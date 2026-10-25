import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { buildProceduralGlasses, frameLayout } from '../src/glasses.js';

const spec = {
  lensWidth: 52, bridgeWidth: 18, lensHeight: 40, frameHeight: 45,
  templeLength: 145, totalWidth: 138,
};

test('layout derives frame PD and rim from the spec', () => {
  const L = frameLayout(spec);
  assert.equal(L.framePd, 70);
  assert.equal(L.lensCenterX, 35);
  assert.equal(L.rim, 2.5);
  assert.equal(L.halfW, 69);
});

test('procedural model matches the spec dimensions (mm)', () => {
  const g = buildProceduralGlasses(spec);
  g.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(g);
  const size = box.getSize(new THREE.Vector3());
  assert.ok(Math.abs(size.x - 138) < 1.5, `front width ${size.x}`);
  // Lens rims: frame height ~45 mm (front only, temples excluded).
  const rim = g.children.find((c) => c.geometry?.type === 'ExtrudeGeometry');
  const rb = new THREE.Box3().setFromObject(rim).getSize(new THREE.Vector3());
  assert.ok(Math.abs(rb.y - 45) < 1.5, `frame height ${rb.y}`);
  assert.ok(Math.abs(rb.x - 57) < 1.5, `rim width ${rb.x}`);
  // Temples extend back roughly templeLength (minus the ear-bend projection).
  assert.ok(box.min.z < -130 && box.min.z > -150, `temple reach ${box.min.z}`);
});

test('front photo: white background keyed out and cropped tight to the frame', async () => {
  const { keyAndTrim, hasTransparency } = await import('../src/glasses.js');
  // 20x10 white image with a dark "frame" from x=3..16, y=2..7.
  const w = 20, h = 10;
  const px = new Uint8ClampedArray(w * h * 4).fill(255);
  for (let y = 2; y <= 7; y++) for (let x = 3; x <= 16; x++) {
    const i = (y * w + x) * 4;
    px[i] = 40; px[i + 1] = 30; px[i + 2] = 20;
  }
  assert.equal(hasTransparency(px), false);
  const { box, edgeColor } = keyAndTrim(px, w, h, { keyWhite: true });
  assert.deepEqual(box, { x0: 3, y0: 2, x1: 16, y1: 7 });
  assert.equal(edgeColor, '#281e14');
  assert.equal(px[3], 0, 'background is transparent');
  assert.equal(px[(2 * w + 3) * 4 + 3], 255, 'frame stays opaque');
});
