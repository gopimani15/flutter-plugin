// Builds a glasses model in MILLIMETRES from a FrameSpec, or normalises a GLB.
//
// Model convention (same for procedural and GLB):
//   origin = bridge centre on the frame-front plane
//   +X = wearer's left, +Y = up, +Z = forward (front of the frame faces +Z)
//   temples run toward -Z
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clearTemplesInLenses, paintTemplesInTintedLenses } from './photo_temples.js';

/** Whether the frame is drawn with its temple arms (spec.showTemples, default true). */
const showsTemples = (spec) => spec.showTemples !== false;

/** Frame geometry derived from the spec; every field is used. */
export function frameLayout(spec) {
  const A = spec.lensWidth;
  const B = spec.lensHeight;
  const DBL = spec.bridgeWidth;
  const frameH = spec.frameHeight ?? B + 5;
  const totalW = spec.totalWidth ?? 2 * A + DBL + 14;
  const rim = Math.max(1, (frameH - B) / 2); // rim thickness around the lens
  const lensCenterX = DBL / 2 + A / 2; // = frame PD / 2
  const rimOuterX = DBL / 2 + A + rim;
  const halfW = Math.max(rimOuterX + 1, totalW / 2); // endpieces fill the rest
  return {
    A, B, DBL, frameH, totalW, rim, lensCenterX, rimOuterX, halfW,
    templeLength: spec.templeLength ?? 145,
    framePd: A + DBL,
  };
}

function lensShape(w, h, shape) {
  // Superellipse: n=2 ellipse/round, n~4 soft rectangle.
  const n = shape === 'rect' ? 4.5 : shape === 'cateye' ? 3 : 2.4;
  const s = new THREE.Shape();
  const N = 72;
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * Math.PI * 2;
    const c = Math.cos(t);
    const sn = Math.sin(t);
    let x = (w / 2) * Math.sign(c) * Math.abs(c) ** (2 / n);
    let y = (h / 2) * Math.sign(sn) * Math.abs(sn) ** (2 / n);
    if (shape === 'cateye' && y > 0) y *= 1 + 0.15 * Math.abs(x) / (w / 2);
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  return s;
}

/** Temple arm: straight section, then the ear bend (total = templeLength). */
function buildTemple(L, mat, side, hingeY) {
  const straight = L.templeLength * 0.75;
  const bend = L.templeLength - straight;
  const tw = 1.6;
  const temple = new THREE.Group();
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(tw, 3.2, straight), mat);
  t1.position.z = -straight / 2;
  temple.add(t1);
  const t2 = new THREE.Mesh(new THREE.BoxGeometry(tw, 3.0, bend), mat);
  const bendAngle = THREE.MathUtils.degToRad(32);
  t2.position.set(0, -Math.sin(bendAngle) * bend / 2, -straight - Math.cos(bendAngle) * bend / 2);
  t2.rotation.x = -bendAngle;
  temple.add(t2);
  temple.position.set(side * (L.halfW - tw / 2), hingeY, -1.5);
  temple.name = side < 0 ? 'temple_right' : 'temple_left';
  return temple;
}

export function buildProceduralGlasses(spec) {
  const L = frameLayout(spec);
  const color = new THREE.Color(spec.frameColor ?? '#1c1c1e');
  const frameMat = new THREE.MeshStandardMaterial({
    color, metalness: spec.metallic ? 0.9 : 0.25, roughness: spec.metallic ? 0.25 : 0.45,
  });
  const lensMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(spec.lensTint ?? '#a8c0d8'),
    metalness: 0.0, roughness: 0.05, transparent: true,
    opacity: spec.lensOpacity ?? 0.18, depthWrite: false, side: THREE.DoubleSide,
  });

  const g = new THREE.Group();
  g.name = 'glasses';
  const depth = 2.2;
  const rimShape = lensShape(L.A + 2 * L.rim, L.B + 2 * L.rim, spec.shape);
  rimShape.holes.push(lensShape(L.A, L.B, spec.shape));
  const rimGeo = new THREE.ExtrudeGeometry(rimShape, {
    depth, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.3, bevelSegments: 2,
  });
  rimGeo.translate(0, 0, -depth / 2);
  const lensGeo = new THREE.ShapeGeometry(lensShape(L.A + 0.4, L.B + 0.4, spec.shape), 1);

  for (const side of [-1, 1]) {
    const cx = side * L.lensCenterX;
    const rimMesh = new THREE.Mesh(rimGeo, frameMat);
    rimMesh.position.x = cx;
    g.add(rimMesh);
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(cx, 0, 0.2);
    lens.renderOrder = 2;
    g.add(lens);

    // Endpiece: from rim outer edge to the total frame width.
    const epLen = L.halfW - L.rimOuterX + L.rim;
    const ep = new THREE.Mesh(new THREE.BoxGeometry(epLen, 4, depth + 0.8), frameMat);
    const hingeY = L.B * 0.25;
    ep.position.set(side * (L.halfW - epLen / 2), hingeY, -0.4);
    g.add(ep);

    if (showsTemples(spec)) g.add(buildTemple(L, frameMat, side, hingeY));

    // Nose pad.
    const pad = new THREE.Mesh(new THREE.SphereGeometry(1.6, 12, 8), lensMat.clone());
    pad.material.opacity = 0.5;
    pad.scale.set(0.6, 1.2, 1);
    pad.position.set(side * (L.DBL / 2 + 0.5), -L.B * 0.12, -5);
    g.add(pad);
  }

  // Bridge: arched tube spanning DBL between the rims.
  const by = L.B * 0.22;
  const x0 = L.DBL / 2 + L.rim * 0.3;
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-x0, by, 0),
    new THREE.Vector3(0, by + 3, 0.5),
    new THREE.Vector3(x0, by, 0),
  );
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 1.2, 8, false), frameMat));

  g.userData.layout = L;
  return g;
}

/**
 * Prepares a front product photo in place (RGBA bytes):
 *  - keyWhite: turns a plain white/light studio background transparent
 *  - returns the bounding box of the remaining (opaque) frame pixels, so the
 *    crop is tight to the frame and its width can be mapped to totalWidth.
 *  - edgeColor: average colour of the outer 8% columns (the endpieces), used
 *    for the temples, which a front photo doesn't show.
 */
export function keyAndTrim(rgba, w, h, { keyWhite = false, threshold = 238, soft = 22, alphaMin = 24 } = {}) {
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (keyWhite) {
        const m = Math.min(rgba[i], rgba[i + 1], rgba[i + 2]);
        if (m >= threshold) rgba[i + 3] = 0;
        else if (m > threshold - soft) rgba[i + 3] = Math.min(rgba[i + 3], Math.round(255 * (threshold - m) / soft));
      }
      if (rgba[i + 3] > alphaMin) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  if (x1 < 0) return { box: null, edgeColor: null };
  const band = Math.max(1, Math.round((x1 - x0 + 1) * 0.08));
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = y0; y <= y1; y++) {
    for (const x of [...Array(band).keys()].flatMap((k) => [x0 + k, x1 - k])) {
      const i = (y * w + x) * 4;
      if (rgba[i + 3] > 200) { r += rgba[i]; g += rgba[i + 1]; b += rgba[i + 2]; n++; }
    }
  }
  const hex = (v) => Math.round(v / Math.max(n, 1)).toString(16).padStart(2, '0');
  return { box: { x0, y0, x1, y1 }, edgeColor: n ? `#${hex(r)}${hex(g)}${hex(b)}` : null };
}

export function hasTransparency(rgba) {
  for (let i = 3; i < rgba.length; i += 4 * 7) if (rgba[i] < 250) return true;
  return false;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // remote catalog images need CORS
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load frame photo ${url}`));
    img.src = url;
  });
}

/**
 * Front product photo as a textured plane, scaled so its width equals the
 * frame's totalWidth (mm), plus temples from the measurements.
 * spec.frontImageLensCenterY: lens-centre height as a fraction of the cropped
 * image from the top (default 0.5).
 */
export async function loadFrontImageGlasses(spec) {
  const L = frameLayout(spec);
  const img = await loadImage(spec.frontImageUrl);
  const maxW = 1600;
  const k = Math.min(1, maxW / img.naturalWidth);
  const w = Math.round(img.naturalWidth * k);
  const h = Math.round(img.naturalHeight * k);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h);
  const keyWhite = spec.removeBackground ?? !hasTransparency(data.data);
  const { box, edgeColor } = keyAndTrim(data.data, w, h, { keyWhite });
  if (!box) throw new Error('Frame photo is empty after background removal');
  // The photo's own arms, seen through the lenses, would sit on the frame
  // front; on a face they are behind the head.
  if (spec.removePhotoTemples !== false) {
    clearTemplesInLenses(data.data, w, h);
    paintTemplesInTintedLenses(data.data, w, h, box);
  }
  ctx.putImageData(data, 0, 0);
  const cw = box.x1 - box.x0 + 1;
  const ch = box.y1 - box.y0 + 1;
  const crop = document.createElement('canvas');
  crop.width = cw;
  crop.height = ch;
  crop.getContext('2d').drawImage(c, box.x0, box.y0, cw, ch, 0, 0, cw, ch);

  const tex = new THREE.CanvasTexture(crop);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const planeW = L.totalW;
  const planeH = planeW * (ch / cw);
  const lc = spec.frontImageLensCenterY ?? 0.5;
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(planeW, planeH),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.04, side: THREE.DoubleSide }),
  );
  plane.position.y = (lc - 0.5) * planeH;
  plane.renderOrder = 2;

  const g = new THREE.Group();
  g.name = 'glasses';
  g.add(plane);
  if (showsTemples(spec)) {
    const templeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(spec.frameColor ?? edgeColor ?? '#1c1c1e'), metalness: 0.3, roughness: 0.45,
    });
    const hingeY = plane.position.y + planeH * 0.22;
    for (const side of [-1, 1]) g.add(buildTemple(L, templeMat, side, hingeY));
  }
  g.userData.layout = L;
  g.userData.source = 'photo';
  return g;
}

/**
 * Loads a GLB and normalises it to the model convention in millimetres.
 * modelUnits: 'mm' | 'm' | 'cm' | 'auto' ('auto' scales the model so its
 * front width equals spec.totalWidth).
 */
export async function loadGlbGlasses(spec) {
  const gltf = await new GLTFLoader().loadAsync(spec.modelUrl);
  const model = gltf.scene;
  const unit = spec.modelUnits ?? 'auto';
  const inner = new THREE.Group();
  inner.add(model);
  model.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  let s = 1;
  if (unit === 'm') s = 1000;
  else if (unit === 'cm') s = 10;
  else if (unit === 'auto' && spec.totalWidth) s = spec.totalWidth / size.x;
  model.scale.multiplyScalar(s);
  model.updateMatrixWorld(true);

  // Centre on the frame front: x centre of the box, y centre of the front slice
  // (temples droop, so the whole-box y centre would be biased), front at z=+1.
  const b2 = new THREE.Box3().setFromObject(model);
  const frontSlice = new THREE.Box3();
  const v = new THREE.Vector3();
  const sliceDepth = 8; // mm
  model.traverse((o) => {
    if (!o.isMesh) return;
    const pos = o.geometry.attributes.position;
    for (let i = 0; i < pos.count; i += 3) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      if (v.z > b2.max.z - sliceDepth) frontSlice.expandByPoint(v);
    }
  });
  const cy = frontSlice.isEmpty() ? (b2.min.y + b2.max.y) / 2 : (frontSlice.min.y + frontSlice.max.y) / 2;
  model.position.sub(new THREE.Vector3((b2.min.x + b2.max.x) / 2, cy, b2.max.z - 1));
  // A GLB's arms are whatever its author named "temple".
  if (!showsTemples(spec)) {
    model.traverse((o) => {
      if (/temple/i.test(o.name)) o.visible = false;
    });
  }
  const g = new THREE.Group();
  g.name = 'glasses';
  g.add(inner);
  g.userData.layout = frameLayout(spec);
  return g;
}

/** Best available asset: 3D model, then front photo, then measurements. */
export async function buildGlasses(spec) {
  if (spec.modelUrl) {
    try {
      const g = await loadGlbGlasses(spec);
      g.userData.source = 'model';
      return g;
    } catch (e) {
      console.warn('[eyewear_tryon] GLB failed, trying the front photo', e);
    }
  }
  if (spec.frontImageUrl) {
    try {
      return await loadFrontImageGlasses(spec);
    } catch (e) {
      console.warn('[eyewear_tryon] front photo failed, using measurements', e);
    }
  }
  const g = buildProceduralGlasses(spec);
  g.userData.source = 'measurements';
  return g;
}

export function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    const m = o.material;
    if (Array.isArray(m)) m.forEach((x) => x.dispose());
    else if (m) m.dispose();
  });
}
