import test from 'node:test';
import assert from 'node:assert/strict';
import { clearTemplesInLenses, paintTemplesInTintedLenses, convexHull } from '../src/photo_temples.js';

// A keyed front photo, 200 × 80: two lens rims (8 px thick) on a transparent
// background, joined by a bridge, with a temple arm crossing the left lens on
// a diagonal from its outer top corner — as a front product shot shows it.
const W = 200;
const H = 80;
const RIM = [10, 10, 10];
const ARM = [60, 40, 20];

function photo({ lens = null } = {}) {
  const px = new Uint8ClampedArray(W * H * 4); // all transparent
  const put = (x, y, [r, g, b], a = 255) => {
    const i = (y * W + x) * 4;
    px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = a;
  };
  // Lenses span x 10..90 and 110..190, y 10..70; rim 8 px.
  for (const [x0, x1] of [[10, 90], [110, 190]]) {
    for (let y = 10; y <= 70; y++) {
      for (let x = x0; x <= x1; x++) {
        const rim = x < x0 + 8 || x > x1 - 8 || y < 18 || y > 62;
        if (rim) put(x, y, RIM);
        else if (lens) put(x, y, lens);
      }
    }
  }
  for (let y = 18; y <= 26; y++) for (let x = 90; x <= 110; x++) put(x, y, RIM); // bridge
  // The arm: 4 px thick, from the left lens's outer top corner inward.
  for (let t = 0; t <= 40; t++) {
    for (let d = 0; d < 4; d++) put(20 + t + d, 20 + t, ARM);
  }
  return px;
}

const at = (px, x, y) => Array.from(px.slice((y * W + x) * 4, (y * W + x) * 4 + 4));

test('the arm through a clear lens is cleared, and the rim kept', () => {
  const px = photo();
  assert.equal(at(px, 40, 40)[3], 255, 'the arm is there before');
  clearTemplesInLenses(px, W, H);
  assert.equal(at(px, 40, 40)[3], 0, 'the arm is gone from the lens');
  assert.equal(at(px, 50, 50)[3], 0);
  assert.equal(at(px, 12, 40)[3], 255, 'the rim stays');
  assert.equal(at(px, 50, 12)[3], 255, 'the top rim stays');
  assert.equal(at(px, 100, 22)[3], 255, 'the bridge stays');
});

test('the arm through a tinted lens is painted the tint', () => {
  const tint = [120, 80, 40];
  const px = photo({ lens: tint });
  const box = { x0: 10, y0: 10, x1: 190, y1: 70 };
  paintTemplesInTintedLenses(px, W, H, box);
  assert.deepEqual(at(px, 40, 40), [...tint, 255], 'the arm is the lens colour now');
  assert.deepEqual(at(px, 12, 40), [...RIM, 255], 'the rim keeps its colour');
});

test('a lens the colour of its rim is left alone', () => {
  const px = photo({ lens: RIM });
  const before = px.slice();
  paintTemplesInTintedLenses(px, W, H, { x0: 10, y0: 10, x1: 190, y1: 70 });
  assert.deepEqual(px, before);
});

test('the hull of a square is its corners', () => {
  const hull = convexHull([[0, 0], [10, 0], [10, 10], [0, 10], [5, 5], [3, 7]]);
  assert.equal(hull.length, 4);
});
