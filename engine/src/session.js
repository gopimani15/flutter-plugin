// One live try-on view: camera + MediaPipe face landmarks + three.js overlay.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import {
  LM, DEFAULT_IRIS_MM, toScene, headBasis, headAngles, irisDiameterPx,
  pupilDistancePx, measureFrame, glassesPlacement, MeasurementAggregator,
  VecFilter, OneEuro,
} from './geometry.js';
import { buildGlasses, disposeObject } from './glasses.js';

const MP_VERSION = '1.1.1';
export const DEFAULTS = {
  wasmBaseUrl: `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MP_VERSION}/wasm`,
  modelAssetUrl:
    'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
  delegate: 'GPU',
  mirror: true,
  irisDiameterMm: DEFAULT_IRIS_MM,
  vertexDistanceMm: 12,
  pupilAboveLensCenterMm: 2,
  pantoscopicTiltDeg: 8,
  earOffsetMm: 10,
  maxMeasureYawDeg: 12,
  maxMeasurePitchDeg: 15,
  manualPdMm: 0,
  // A person's PD and face size don't change: lock them once stable.
  lockMeasurements: true,
  lockMinSamples: 45,
  lockMaxPdSpreadMm: 0.6,
  debug: false,
  facingMode: 'user',
  // 'camera' (live) or 'image' (call setImage(url) with a photo).
  source: 'camera',
  // Optional explicit wasm files (skips the CDN fileset lookup).
  wasmLoaderPath: null,
  wasmBinaryPath: null,
  modelAssetBase64Url: null,
};

let landmarkerPromise = null; // shared across views
function getLandmarker(cfg) {
  if (!landmarkerPromise) {
    landmarkerPromise = (async () => {
      const fileset = cfg.wasmLoaderPath && cfg.wasmBinaryPath
        ? { wasmLoaderPath: cfg.wasmLoaderPath, wasmBinaryPath: cfg.wasmBinaryPath }
        : await FilesetResolver.forVisionTasks(cfg.wasmBaseUrl);
      // Hosts that can't serve .task files can ship the model as base64 text.
      let modelAssetBuffer = null;
      if (cfg.modelAssetBase64Url) {
        const res = await fetch(cfg.modelAssetBase64Url);
        if (!res.ok) throw new Error(`Face model download failed (${res.status})`);
        const bin = atob((await res.text()).trim());
        modelAssetBuffer = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) modelAssetBuffer[i] = bin.charCodeAt(i);
      }
      const base = modelAssetBuffer ? { modelAssetBuffer } : { modelAssetPath: cfg.modelAssetUrl };
      const make = (delegate) => FaceLandmarker.createFromOptions(fileset, {
        baseOptions: { ...base, delegate },
        runningMode: 'VIDEO',
        numFaces: 1,
        outputFaceBlendshapes: false,
        outputFacialTransformationMatrixes: false,
      });
      try {
        return await make(cfg.delegate);
      } catch (e) {
        if (cfg.delegate === 'CPU') throw e;
        console.warn('[eyewear_tryon] GPU delegate failed, falling back to CPU', e);
        return make('CPU');
      }
    })();
    landmarkerPromise.catch(() => { landmarkerPromise = null; });
  }
  return landmarkerPromise;
}

export class TryOnSession {
  constructor(host, config, emit) {
    this.host = host;
    this.cfg = { ...DEFAULTS, ...config };
    this.emit = emit;
    this.disposed = false;
    this.faceVisible = false;
    this.agg = new MeasurementAggregator(45);
    this.locked = null; // frozen measurements for this person
    this.posF = new VecFilter(3, { minCutoff: 1.2, beta: 0.05 });
    this.axF = new VecFilter(6, { minCutoff: 1.5, beta: 0.3 });
    this.scaleF = new OneEuro({ minCutoff: 0.4, beta: 0.0 });
    this.lastEmit = 0;
    this.lastVideoTime = -1;
    this.glasses = null;
    this._buildDom();
    this._buildScene();
    this._start().catch((e) => this._error(e));
  }

  // ---------- DOM ----------
  _buildDom() {
    const h = this.host;
    // Children are absolutely positioned; only add a containing block when the
    // host has none, so a host the page positions itself keeps its size.
    const pos = h.isConnected ? getComputedStyle(h).position : '';
    if (!['relative', 'absolute', 'fixed', 'sticky'].includes(pos)) h.style.position = 'relative';
    h.style.overflow = 'hidden';
    h.style.background = '#000';
    const fill = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;';
    this.video = document.createElement('video');
    this.video.setAttribute('playsinline', '');
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.style.cssText = fill;
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = fill + 'pointer-events:none;';
    h.append(this.video, this.canvas);
    if (this.cfg.debug) {
      this.dbg = document.createElement('canvas');
      this.dbg.style.cssText = fill + 'pointer-events:none;';
      h.append(this.dbg);
    }
    this._applyMirror();
  }

  _applyMirror() {
    const t = this.cfg.mirror ? 'scaleX(-1)' : 'none';
    for (const el of [this.video, this.photo, this.canvas, this.dbg]) if (el) el.style.transform = t;
  }

  // ---------- three.js ----------
  _buildScene() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(1); // canvas is sized to video pixels already
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(0.3, 0.6, 1);
    this.scene.add(key);
    this.camera = new THREE.OrthographicCamera(0, 1, 0, -1, 0.1, 100000);
    this.camera.position.set(0, 0, 50000);

    // Head-local anchor; glasses + occluder live inside it in millimetres.
    this.anchor = new THREE.Group();
    this.anchor.matrixAutoUpdate = false;
    this.anchor.visible = false;
    this.scene.add(this.anchor);
    this.tilt = new THREE.Group();
    this.tilt.rotation.x = THREE.MathUtils.degToRad(this.cfg.pantoscopicTiltDeg);
    this.anchor.add(this.tilt);

    // Depth-only head occluder: hides temples behind the head / ears.
    this.occluder = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 24),
      new THREE.MeshBasicMaterial({ colorWrite: false }),
    );
    this.occluder.renderOrder = -1;
    this.anchor.add(this.occluder);
    this._sizeOccluder(140);
  }

  _sizeOccluder(faceWidthMm) {
    const L = this.glasses?.userData.layout;
    const frameHalf = L ? L.halfW : 69;
    const rx = Math.min(faceWidthMm / 2, frameHalf - 3);
    const rz = 95;
    const ry = 115;
    this.occluder.scale.set(rx, ry, rz);
    // Front of the head roughly at cornea depth; glasses sit vertexDistance ahead.
    this.occluder.position.set(0, -15, -rz + 4 - this.cfg.vertexDistanceMm);
  }

  async setFrame(spec) {
    const g = await buildGlasses(spec);
    if (this.disposed) return disposeObject(g);
    if (this.glasses) {
      this.tilt.remove(this.glasses);
      disposeObject(this.glasses);
    }
    this.glasses = g;
    this.spec = spec;
    this.tilt.add(g);
    this.dirty = true;
    const fw = this.agg.result().faceWidth;
    this._sizeOccluder(Number.isFinite(fw) ? fw : 140);
    this.emit({ type: 'frameLoaded', framePd: g.userData.layout.framePd, source: g.userData.source });
  }

  setManualPd(mm) {
    this.cfg.manualPdMm = mm > 0 ? mm : 0;
    this.remeasure();
  }

  /** Drop the locked values and measure the person again. */
  remeasure() {
    this.dirty = true;
    this.locked = null;
    this.agg.reset();
    this.scaleF.reset();
  }

  setMirror(m) {
    this.cfg.mirror = !!m;
    this._applyMirror();
  }

  // ---------- camera + loop ----------
  async _start() {
    this.landmarker = await getLandmarker(this.cfg);
    if (this.disposed) return;
    if (this.cfg.source === 'camera') await this._startCamera();
    if (this.disposed) return;
    this.emit({ type: 'ready', source: this.cfg.source });
    const loop = () => {
      if (this.disposed) return;
      this._tick();
      this.raf = requestAnimationFrame(loop);
    };
    loop();
  }

  async _startCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      const e = new Error('Camera API unavailable (page must be served over HTTPS or localhost).');
      e.name = 'NotSupportedError';
      throw e;
    }
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: this.cfg.facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    if (this.disposed) return this._stopStream();
    this.video.srcObject = this.stream;
    await this.video.play();
    this.source = this.video;
  }

  /**
   * Try on a still photo (URL or blob: URL). Treated as a new person.
   * The photo is redrawn upright (EXIF rotation applied) and at most
   * 1280 px on its long side, which is what the face detector works best on.
   */
  setImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        const k = Math.min(1, 1280 / Math.max(img.naturalWidth, img.naturalHeight));
        const photo = this.photo ?? document.createElement('canvas');
        photo.width = Math.max(1, Math.round(img.naturalWidth * k));
        photo.height = Math.max(1, Math.round(img.naturalHeight * k));
        photo.getContext('2d').drawImage(img, 0, 0, photo.width, photo.height);
        this._stopStream();
        this.video.hidden = true;
        photo.style.cssText = this.video.style.cssText;
        if (!photo.isConnected) this.host.insertBefore(photo, this.canvas);
        this.photo = photo;
        this.source = photo;
        this.cfg.mirror = false;
        this._applyMirror();
        this.remeasure();
        this.faceVisible = false;
        this.noFaceReported = false;
        this.photoMisses = 0;
        this.posF.reset();
        this.axF.reset();
        resolve();
      };
      img.onerror = () => reject(new Error('Could not open that image.'));
      img.src = url;
    });
  }

  _resizeTo(W, H) {
    if (this.canvas.width === W && this.canvas.height === H) return;
    this.renderer.setSize(W, H, false);
    this.camera.left = 0;
    this.camera.right = W;
    this.camera.top = 0;
    this.camera.bottom = -H;
    this.camera.updateProjectionMatrix();
    if (this.dbg) {
      this.dbg.width = W;
      this.dbg.height = H;
    }
  }

  _tick() {
    const v = this.source;
    if (!v) return;
    const isVideo = v === this.video;
    const W = isVideo ? v.videoWidth : v.width;
    const H = isVideo ? v.videoHeight : v.height;
    if (!W || !H) return;
    this._resizeTo(W, H);
    if (isVideo) {
      if (v.currentTime === this.lastVideoTime) return;
      this.lastVideoTime = v.currentTime;
    } else if (!this.dirty && ((this.locked && this.anchor.visible) || this.noFaceReported)) {
      return; // still photo already measured and drawn (or has no face): nothing changes
    }
    this.dirty = false;
    const now = performance.now();
    let res;
    try {
      res = this.landmarker.detectForVideo(v, now);
    } catch (e) {
      return this._error(e);
    }
    const lms = res.faceLandmarks?.[0];
    if (!lms || lms.length < 478) {
      if (this.faceVisible) this.emit({ type: 'faceLost' });
      else if (!isVideo && !this.noFaceReported && ++this.photoMisses >= 5) {
        // A still photo won't change: say so instead of searching forever.
        this.noFaceReported = true;
        this.emit({ type: 'faceLost', reason: 'noFaceInPhoto' });
      }
      this.faceVisible = false;
      this.anchor.visible = false;
      this.posF.reset();
      this.axF.reset();
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (!this.faceVisible) this.emit({ type: 'faceFound' });
    this.noFaceReported = false;
    this.photoMisses = 0;
    this.faceVisible = true;
    this._update(lms.map((p) => toScene(p, W, H)), now / 1000);
    this.renderer.render(this.scene, this.camera);
    if (this.dbg) this._drawDebug(lms, W, H);
  }

  _update(P, t) {
    const basis = headBasis(P);
    const ang = headAngles(basis);
    const eyePx = pupilDistancePx(P);

    // Metric scale: manual PD is most accurate; otherwise iris ruler for the
    // measurements and the stabilised median PD for rendering.
    const irisMmPerPx = this.cfg.irisDiameterMm / irisDiameterPx(P);
    const mmPerPx = this.cfg.manualPdMm > 0 ? this.cfg.manualPdMm / eyePx : irisMmPerPx;

    const frontal = Math.abs(ang.yaw) < this.cfg.maxMeasureYawDeg
      && Math.abs(ang.pitch) < this.cfg.maxMeasurePitchDeg;
    if (frontal && !this.locked) {
      this.agg.push(measureFrame(P, basis, mmPerPx, { earOffsetMm: this.cfg.earOffsetMm }));
      if (this.cfg.lockMeasurements
        && this.agg.isStable(this.cfg.lockMinSamples, this.cfg.lockMaxPdSpreadMm)) {
        this.locked = this.agg.result();
        if (this.cfg.manualPdMm > 0) this.locked.pd = this.cfg.manualPdMm;
        this.lastEmit = 0; // announce the lock immediately
      }
    }
    const agg = this.locked ?? this.agg.result();

    // Render scale: PD is fixed for the person, so once known (manual, locked
    // or a settled median) the frame size no longer drifts.
    const pdMm = this.cfg.manualPdMm > 0 ? this.cfg.manualPdMm
      : (agg.samples >= 10 ? agg.pd : eyePx * irisMmPerPx);
    const pxPerMm = this.scaleF.filter(eyePx / pdMm, t);

    // Smooth pose (position + two axes, re-orthonormalised).
    const place = glassesPlacement(P, basis, pxPerMm, this.cfg);
    const pos = this.posF.filter(place.position, t);
    const ax = this.axF.filter([...basis.x, ...basis.y], t);
    const x = new THREE.Vector3(ax[0], ax[1], ax[2]).normalize();
    const yRaw = new THREE.Vector3(ax[3], ax[4], ax[5]);
    const y = yRaw.sub(x.clone().multiplyScalar(yRaw.dot(x))).normalize();
    const z = new THREE.Vector3().crossVectors(x, y);

    const m = new THREE.Matrix4().makeBasis(x, y, z);
    m.scale(new THREE.Vector3(pxPerMm, pxPerMm, pxPerMm));
    m.setPosition(pos[0], pos[1], pos[2]);
    this.anchor.matrix.copy(m);
    this.anchor.matrixWorldNeedsUpdate = true;
    this.anchor.visible = !!this.glasses;

    this.frameCount = (this.frameCount ?? 0) + 1;
    if (this.frameCount % 30 === 0 && Number.isFinite(agg.faceWidth)) this._sizeOccluder(agg.faceWidth);

    if (t * 1000 - this.lastEmit > 200 && agg.samples > 0) {
      this.lastEmit = t * 1000;
      this.emit({
        type: 'measurements',
        pd: this.cfg.manualPdMm > 0 ? this.cfg.manualPdMm : agg.pd,
        monoPdRight: agg.monoPdRight,
        monoPdLeft: agg.monoPdLeft,
        pdSource: this.cfg.manualPdMm > 0 ? 'manual' : 'estimated',
        locked: !!this.locked,
        pdSpread: this.locked ? 0 : this.agg.spread('pd'),
        faceWidth: agg.faceWidth,
        noseBridge: agg.noseBridge,
        frontToEar: agg.frontToEar,
        samples: agg.samples,
        confidence: this.locked ? 1 : agg.confidence,
        yaw: ang.yaw,
        pitch: ang.pitch,
        roll: ang.roll,
      });
    }
  }

  _drawDebug(lms, W, H) {
    const c = this.dbg.getContext('2d');
    c.clearRect(0, 0, W, H);
    const ids = [
      LM.RIGHT_IRIS_CENTER, LM.LEFT_IRIS_CENTER, ...LM.RIGHT_IRIS_RING, ...LM.LEFT_IRIS_RING,
      LM.FACE_RIGHT, LM.FACE_LEFT, LM.NOSE_PAD_RIGHT, LM.NOSE_PAD_LEFT, LM.SELLION,
    ];
    c.fillStyle = '#00e5ff';
    for (const i of ids) {
      c.beginPath();
      c.arc(lms[i].x * W, lms[i].y * H, 3, 0, Math.PI * 2);
      c.fill();
    }
  }

  // ---------- snapshot / teardown ----------
  snapshot(type = 'image/jpeg', quality = 0.92) {
    const src = this.source;
    if (!src) return null;
    const W = src.videoWidth || src.width;
    const H = src.videoHeight || src.height;
    if (!W) return null;
    const out = document.createElement('canvas');
    out.width = W;
    out.height = H;
    const c = out.getContext('2d');
    if (this.cfg.mirror) {
      c.translate(W, 0);
      c.scale(-1, 1);
    }
    c.drawImage(src, 0, 0, W, H);
    this.renderer.render(this.scene, this.camera); // draw in the same task
    c.drawImage(this.canvas, 0, 0, W, H);
    return out.toDataURL(type, quality);
  }

  _error(e) {
    console.error('[eyewear_tryon]', e);
    this.emit({ type: 'error', message: String(e?.message ?? e), name: e?.name ?? 'Error' });
  }

  _stopStream() {
    this.stream?.getTracks().forEach((tr) => tr.stop());
    this.stream = null;
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this._stopStream();
    if (this.glasses) disposeObject(this.glasses);
    disposeObject(this.occluder);
    this.scene.environment?.dispose();
    this.renderer.dispose();
    this.host.replaceChildren();
  }
}
