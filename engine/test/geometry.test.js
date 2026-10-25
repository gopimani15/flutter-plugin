import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LM, toScene, headBasis, headAngles, irisDiameterPx, measureFrame,
  glassesPlacement, MeasurementAggregator, median, dot, sub, len,
} from '../src/geometry.js';

const W = 1280;
const H = 720;
const PX_PER_MM = 4;

// Synthetic face in head-local millimetres (+x subject's left, +y up, +z forward).
function syntheticFace({ pd = 63, iris = 11.7, faceWidth = 140, nose = 18, earDepth = 95 } = {}) {
  const pts = Array.from({ length: 478 }, () => [0, 0, 0]);
  const set = (i, p) => { pts[i] = p; };
  set(LM.RIGHT_IRIS_CENTER, [-pd / 2, 0, 0]);
  set(LM.LEFT_IRIS_CENTER, [pd / 2, 0, 0]);
  set(LM.RIGHT_IRIS_RING[0], [-pd / 2 + iris / 2, 0, 0]);
  set(LM.RIGHT_IRIS_RING[2], [-pd / 2 - iris / 2, 0, 0]);
  set(LM.RIGHT_IRIS_RING[1], [-pd / 2, iris / 2, 0]);
  set(LM.RIGHT_IRIS_RING[3], [-pd / 2, -iris / 2, 0]);
  set(LM.LEFT_IRIS_RING[0], [pd / 2 - iris / 2, 0, 0]);
  set(LM.LEFT_IRIS_RING[2], [pd / 2 + iris / 2, 0, 0]);
  set(LM.LEFT_IRIS_RING[1], [pd / 2, iris / 2, 0]);
  set(LM.LEFT_IRIS_RING[3], [pd / 2, -iris / 2, 0]);
  set(LM.FOREHEAD, [0, 70, 5]);
  set(LM.CHIN, [0, -120, 5]);
  set(LM.SELLION, [0, 5, 8]);
  set(LM.FACE_RIGHT, [-faceWidth / 2, -10, 8 - earDepth]);
  set(LM.FACE_LEFT, [faceWidth / 2, -10, 8 - earDepth]);
  set(LM.NOSE_PAD_RIGHT, [-nose / 2, -3, 6]);
  set(LM.NOSE_PAD_LEFT, [nose / 2, -3, 6]);
  return pts;
}

// Rotate (yaw about y), scale to px, place in frame, and emit MediaPipe-style
// normalised landmarks.
function toLandmarks(ptsMm, yawDeg = 0, center = [640, -360, 0]) {
  const a = (yawDeg * Math.PI) / 180;
  return ptsMm.map(([x, y, z]) => {
    const rx = x * Math.cos(a) + z * Math.sin(a);
    const rz = -x * Math.sin(a) + z * Math.cos(a);
    const X = center[0] + rx * PX_PER_MM;
    const Y = center[1] + y * PX_PER_MM;
    const Z = center[2] + rz * PX_PER_MM;
    return { x: X / W, y: -Y / H, z: -Z / W };
  });
}

const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg}: ${a} vs ${b}`);

for (const yaw of [0, 10, -20]) {
  test(`measurements are pose-invariant (yaw ${yaw})`, () => {
    const P = toLandmarks(syntheticFace(), yaw).map((p) => toScene(p, W, H));
    const basis = headBasis(P);
    const ang = headAngles(basis);
    near(ang.yaw, yaw, 0.5, 'yaw');
    near(ang.pitch, 0, 0.5, 'pitch');
    const mmPerPx = 11.7 / irisDiameterPx(P);
    near(mmPerPx, 1 / PX_PER_MM, 1e-6, 'iris scale');
    const m = measureFrame(P, basis, mmPerPx, { earOffsetMm: 10 });
    near(m.pd, 63, 1e-6, 'pd');
    near(m.faceWidth, 140, 1e-6, 'face width');
    near(m.noseBridge, 18, 1e-6, 'nose bridge');
    near(m.frontToEar, 95 + 10, 1e-6, 'front to ear');
  });
}

test('glasses origin sits vertexDistance in front of the pupils, 2mm below', () => {
  const P = toLandmarks(syntheticFace(), 15).map((p) => toScene(p, W, H));
  const basis = headBasis(P);
  const { position, scale } = glassesPlacement(P, basis, PX_PER_MM, {
    vertexDistanceMm: 12, pupilAboveLensCenterMm: 2,
  });
  const pupils = P[LM.RIGHT_IRIS_CENTER].map((v, i) => (v + P[LM.LEFT_IRIS_CENTER][i]) / 2);
  const d = sub(position, pupils);
  near(dot(d, basis.z) / scale, 12, 1e-6, 'forward');
  near(dot(d, basis.y) / scale, -2, 1e-6, 'vertical');
  near(dot(d, basis.x) / scale, 0, 1e-6, 'lateral');
  near(len(basis.z), 1, 1e-9, 'unit z');
});

test('basis is right-handed with z toward the camera for a frontal face', () => {
  const P = toLandmarks(syntheticFace(), 0).map((p) => toScene(p, W, H));
  const b = headBasis(P);
  near(b.x[0], 1, 1e-9, 'x');
  near(b.y[1], 1, 1e-9, 'y');
  near(b.z[2], 1, 1e-9, 'z');
});

test('aggregator uses rolling medians and ignores outliers', () => {
  const agg = new MeasurementAggregator(5);
  for (const pd of [63, 63.2, 90, 62.8, 63.1, 63]) agg.push({ pd, faceWidth: 140, noseBridge: 18, frontToEar: 105 });
  const r = agg.result();
  assert.equal(r.samples, 5);
  near(r.pd, 63.1, 1e-9, 'median pd');
  assert.equal(median([3, 1, 2, 4]), 2.5);
});

test('PD is the horizontal distance between vertical lines through the pupils', () => {
  // Left pupil 3 mm higher than the right: straight-line distance grows,
  // optician PD (horizontal) must not. Nose bridge off-centre -> mono PDs.
  const pts = syntheticFace({ pd: 62 });
  pts[LM.LEFT_IRIS_CENTER] = [31, 3, 0];
  pts[LM.SELLION] = [1, 5, 8];
  for (const yaw of [0, 15]) {
    const P = toLandmarks(pts, yaw).map((p) => toScene(p, W, H));
    const m = measureFrame(P, headBasis(P), 1 / PX_PER_MM);
    near(m.pd, 62, 1e-6, `pd yaw ${yaw}`);
    near(m.monoPdRight, 32, 1e-6, 'mono right');
    near(m.monoPdLeft, 30, 1e-6, 'mono left');
  }
});

test('measurements lock only once enough samples agree', () => {
  const agg = new MeasurementAggregator(45);
  for (let i = 0; i < 44; i++) agg.push({ pd: 63 + (i % 2 ? 0.3 : -0.3) });
  assert.equal(agg.isStable(45, 0.6), false, 'too few samples');
  agg.push({ pd: 63 });
  assert.equal(agg.isStable(45, 0.6), true);
  const noisy = new MeasurementAggregator(45);
  for (let i = 0; i < 45; i++) noisy.push({ pd: 63 + (i % 2 ? 2 : -2) });
  assert.equal(noisy.isStable(45, 0.6), false, 'too noisy');
});
