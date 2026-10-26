// Pure geometry: landmarks -> head pose, metric scale and face measurements.
// No DOM / three.js dependency so it can be unit-tested in Node.
//
// Coordinate convention ("scene space"), used everywhere in the engine:
//   X = x * W            (pixels, image right)
//   Y = -(y * H)         (pixels, up)
//   Z = -(z * W)         (pixels, toward the camera)
// MediaPipe landmark z uses roughly the same scale as x, smaller = closer,
// so this gives a right-handed, weak-perspective 3D space in pixels that an
// orthographic camera covering [0..W] x [-H..0] renders 1:1 over the video.

export const LM = Object.freeze({
  RIGHT_IRIS_CENTER: 468, // subject's right eye (image left when unmirrored)
  RIGHT_IRIS_RING: [469, 470, 471, 472], // 469/471 = horizontal pair
  LEFT_IRIS_CENTER: 473,
  LEFT_IRIS_RING: [474, 475, 476, 477], // 474/476 = horizontal pair
  FOREHEAD: 10,
  CHIN: 152,
  SELLION: 168, // nose bridge between the eyes
  FACE_RIGHT: 234, // face oval at ear level (near tragus)
  FACE_LEFT: 454,
  // Sides of the nose where nose pads sit. Verify with `debug: true` overlay
  // and tune for your audience if needed.
  NOSE_PAD_RIGHT: 193,
  NOSE_PAD_LEFT: 417,
});

/** Average adult horizontal visible iris diameter (mm). */
export const DEFAULT_IRIS_MM = 11.7;

/** Diagonal field of view of a typical front camera (deg): phones ~80, webcams ~70-78. */
export const DEFAULT_CAMERA_DIAG_FOV_DEG = 75;

/** Entrance pupil to the eye's centre of rotation (mm). */
export const DEFAULT_EYE_ROTATION_MM = 11;

export function toScene(lm, W, H) {
  return [lm.x * W, -lm.y * H, -(lm.z ?? 0) * W];
}

export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const len = (a) => Math.hypot(a[0], a[1], a[2]);
export const dist = (a, b) => len(sub(a, b));
export const mid = (a, b) => mul(add(a, b), 0.5);
export const norm = (a) => {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
export const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

/**
 * Orthonormal head basis in scene space.
 *  x: from subject's right pupil to left pupil
 *  y: up (chin -> forehead, orthogonalised)
 *  z: forward, out of the face toward the camera
 */
export function headBasis(P) {
  const rp = P[LM.RIGHT_IRIS_CENTER];
  const lp = P[LM.LEFT_IRIS_CENTER];
  const x = norm(sub(lp, rp));
  const upRaw = sub(P[LM.FOREHEAD], P[LM.CHIN]);
  const y = norm(sub(upRaw, mul(x, dot(upRaw, x))));
  const z = cross(x, y);
  return { x, y, z };
}

/**
 * Face-referenced horizontal axis for measuring, independent of the pupils:
 * ear-to-ear direction, made perpendicular to the face's vertical midline.
 * "Vertical lines through each pupil" are perpendicular to this axis.
 */
export function faceHorizontalAxis(P) {
  const up = norm(sub(P[LM.FOREHEAD], P[LM.CHIN]));
  const lateral = sub(P[LM.FACE_LEFT], P[LM.FACE_RIGHT]);
  return norm(sub(lateral, mul(up, dot(lateral, up))));
}

/** Yaw/pitch/roll in degrees from a head basis (0,0,0 = facing camera). */
export function headAngles({ x, z }) {
  const deg = 180 / Math.PI;
  return {
    yaw: Math.atan2(z[0], z[2]) * deg,
    pitch: Math.atan2(z[1], Math.hypot(z[0], z[2])) * deg,
    roll: Math.atan2(x[1], x[0]) * deg,
  };
}

/** Horizontal iris diameter in scene pixels (mean of both eyes). */
export function irisDiameterPx(P) {
  const r = dist(P[LM.RIGHT_IRIS_RING[0]], P[LM.RIGHT_IRIS_RING[2]]);
  const l = dist(P[LM.LEFT_IRIS_RING[0]], P[LM.LEFT_IRIS_RING[2]]);
  return (r + l) / 2;
}

export function pupilDistancePx(P) {
  return dist(P[LM.RIGHT_IRIS_CENTER], P[LM.LEFT_IRIS_CENTER]);
}

/**
 * Camera-to-eyes distance (mm), from the metric scale at the eyes and the
 * camera's (assumed) field of view. Rough, but only feeds a small correction.
 */
export function viewingDistanceMm(mmPerPx, W, H, diagFovDeg = DEFAULT_CAMERA_DIAG_FOV_DEG) {
  const focalPx = Math.hypot(W, H) / 2 / Math.tan((diagFovDeg * Math.PI) / 360);
  return focalPx * mmPerPx;
}

/**
 * Eyes looking at a screen `viewingMm` away turn inward, so the camera sees
 * the near PD. Each pupil lies on the line from its centre of rotation to the
 * screen, so near = distance * d / (d + r): this returns (d + r) / d, the
 * factor that gives the distance PD a prescription states.
 */
export function convergenceFactor(viewingMm, eyeRotationMm = DEFAULT_EYE_ROTATION_MM) {
  if (!(viewingMm > 0) || !(eyeRotationMm > 0)) return 1;
  // Nobody holds a screen nearer than this; keeps a bad estimate harmless.
  const d = Math.max(viewingMm, 200);
  return (d + eyeRotationMm) / d;
}

/**
 * One frame's raw measurements (mm). `mmPerPx` is the metric scale to use:
 * from the iris ruler, or from a manually entered PD (more accurate).
 * `convergence` (see convergenceFactor) turns the near PDs seen by the camera
 * into distance PDs; `nearPd` keeps the PD as seen, for drawing.
 */
export function measureFrame(P, basis, mmPerPx, { earOffsetMm = 10, convergence = 1 } = {}) {
  // PD as an optician measures it: horizontal distance between the vertical
  // lines through each pupil centre (projected on the head's horizontal axis).
  const rp = P[LM.RIGHT_IRIS_CENTER];
  const lp = P[LM.LEFT_IRIS_CENTER];
  const nose = P[LM.SELLION];
  const h = faceHorizontalAxis(P);
  const nearPd = Math.abs(dot(sub(lp, rp), h)) * mmPerPx;
  const pd = nearPd * convergence;
  // Monocular PD: each pupil to the nose-bridge centre line.
  const monoPdRight = Math.abs(dot(sub(nose, rp), h)) * mmPerPx * convergence;
  const monoPdLeft = Math.abs(dot(sub(lp, nose), h)) * mmPerPx * convergence;
  const faceWidth = dist(P[LM.FACE_RIGHT], P[LM.FACE_LEFT]) * mmPerPx;
  const noseBridge = dist(P[LM.NOSE_PAD_RIGHT], P[LM.NOSE_PAD_LEFT]) * mmPerPx;
  // Depth from the nose bridge back to the ear, along the head's forward axis.
  const s = P[LM.SELLION];
  const dR = dot(sub(s, P[LM.FACE_RIGHT]), basis.z);
  const dL = dot(sub(s, P[LM.FACE_LEFT]), basis.z);
  const frontToEar = ((dR + dL) / 2) * mmPerPx + earOffsetMm;
  return { pd, nearPd, monoPdRight, monoPdLeft, faceWidth, noseBridge, frontToEar };
}

/**
 * Where the glasses' origin (bridge centre on the frame plane) goes, and the
 * px-per-mm scale to apply to a model authored in millimetres.
 */
export function glassesPlacement(P, basis, pxPerMm, {
  vertexDistanceMm = 12,
  pupilAboveLensCenterMm = 2,
} = {}) {
  const pupils = mid(P[LM.RIGHT_IRIS_CENTER], P[LM.LEFT_IRIS_CENTER]);
  let o = add(pupils, mul(basis.z, vertexDistanceMm * pxPerMm));
  o = add(o, mul(basis.y, -pupilAboveLensCenterMm * pxPerMm));
  return { position: o, basis, scale: pxPerMm };
}

export function median(arr) {
  if (!arr.length) return NaN;
  const s = [...arr].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/** Rolling median aggregator for noisy per-frame measurements. */
export class MeasurementAggregator {
  constructor(size = 45) {
    this.size = size;
    this.buf = {
      pd: [], nearPd: [], monoPdRight: [], monoPdLeft: [], faceWidth: [], noseBridge: [], frontToEar: [],
    };
  }
  push(m) {
    for (const k of Object.keys(this.buf)) {
      if (!Number.isFinite(m[k])) continue;
      const b = this.buf[k];
      b.push(m[k]);
      if (b.length > this.size) b.shift();
    }
  }
  get samples() {
    return this.buf.pd.length;
  }
  /** Semi-interquartile range of a key (mm): how noisy the estimate is. */
  spread(key = 'pd') {
    const s = [...this.buf[key]].sort((x, y) => x - y);
    if (s.length < 4) return Infinity;
    const q = (p) => s[Math.min(s.length - 1, Math.floor(p * (s.length - 1) + 0.5))];
    return (q(0.75) - q(0.25)) / 2;
  }
  /** Enough samples and a tight PD spread: safe to lock the person's values. */
  isStable(minSamples = 45, maxPdSpreadMm = 0.6) {
    return this.samples >= minSamples && this.spread('pd') <= maxPdSpreadMm;
  }
  result() {
    const r = {};
    for (const k of Object.keys(this.buf)) r[k] = median(this.buf[k]);
    r.samples = this.samples;
    r.confidence = Math.min(1, this.samples / 30);
    return r;
  }
  reset() {
    for (const k of Object.keys(this.buf)) this.buf[k] = [];
  }
}

/** One-Euro filter for smoothing a scalar signal (jitter vs. lag). */
export class OneEuro {
  constructor({ minCutoff = 1.0, beta = 0.02, dCutoff = 1.0 } = {}) {
    Object.assign(this, { minCutoff, beta, dCutoff });
    this.x = null;
    this.dx = 0;
    this.t = null;
  }
  static alpha(cutoff, dt) {
    const tau = 1 / (2 * Math.PI * cutoff);
    return 1 / (1 + tau / dt);
  }
  filter(value, tSec) {
    if (this.x === null) {
      this.x = value;
      this.t = tSec;
      return value;
    }
    const dt = Math.max(1e-3, tSec - this.t);
    this.t = tSec;
    const dxRaw = (value - this.x) / dt;
    this.dx += OneEuro.alpha(this.dCutoff, dt) * (dxRaw - this.dx);
    const cutoff = this.minCutoff + this.beta * Math.abs(this.dx);
    this.x += OneEuro.alpha(cutoff, dt) * (value - this.x);
    return this.x;
  }
  reset() {
    this.x = null;
    this.dx = 0;
    this.t = null;
  }
}

/** Smooths a vector with one One-Euro filter per component. */
export class VecFilter {
  constructor(n, opts) {
    this.f = Array.from({ length: n }, () => new OneEuro(opts));
  }
  filter(v, t) {
    return v.map((x, i) => this.f[i].filter(x, t));
  }
  reset() {
    this.f.forEach((f) => f.reset());
  }
}
