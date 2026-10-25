// Clears the temple arms a front product photo shows through its lenses.
//
// A front-on product shot shows the arms running back from the hinges,
// through the lenses. On a face they are behind the head, so they must not be
// drawn on the frame front. Both passes work on RGBA bytes in place, after the
// background has been keyed out.

/**
 * Clear lenses. Once keyed, a clear lens is a transparent hole the rim
 * encloses, and an arm crossing it cuts that hole into pieces. The hull of a
 * lens's pieces spans the arm but stays inside the rim's inner edge, so
 * clearing what is opaque within it removes the arm and leaves the rim alone.
 * Tinted lenses stay opaque and make no hole; a rimless lens is open to the
 * outside. Neither is touched here.
 */
export function clearTemplesInLenses(px, width, height) {
  const n = width * height;
  const clear = (i) => px[i * 4 + 3] < 64;

  // Transparent pixels reachable from the edge are outside the frame; the
  // transparent pixels left over are the lens holes.
  const label = new Int32Array(n); // 0 unvisited, -1 outside, >0 a hole's id
  const queue = new Int32Array(n);
  let head = 0;
  let tail = 0;
  const seed = (i) => {
    if (label[i] === 0 && clear(i)) {
      label[i] = -1;
      queue[tail++] = i;
    }
  };
  for (let x = 0; x < width; x++) {
    seed(x);
    seed((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    seed(y * width);
    seed(y * width + width - 1);
  }
  const spread = (id) => {
    while (head < tail) {
      const i = queue[head++];
      const x = i % width;
      const visit = (j) => {
        if (label[j] === 0 && clear(j)) {
          label[j] = id;
          queue[tail++] = j;
        }
      };
      if (x > 0) visit(i - 1);
      if (x < width - 1) visit(i + 1);
      if (i >= width) visit(i - width);
      if (i < n - width) visit(i + width);
    }
  };
  spread(-1);

  // Each hole: its size, its middle, and the ends of each of its rows.
  const holes = [];
  for (let i = 0; i < n; i++) {
    if (label[i] !== 0 || !clear(i)) continue;
    const id = holes.length + 1;
    head = tail = 0;
    label[i] = id;
    queue[tail++] = i;
    spread(id);
    const rows = new Map();
    let sumX = 0;
    for (let k = 0; k < tail; k++) {
      const j = queue[k];
      const x = j % width;
      const y = (j - x) / width;
      sumX += x;
      const row = rows.get(y);
      if (!row) rows.set(y, [x, x]);
      else {
        if (x < row[0]) row[0] = x;
        if (x > row[1]) row[1] = x;
      }
    }
    holes.push({ area: tail, cx: sumX / tail, rows });
  }

  // Specks and the slot in a bridge are not lenses.
  const minArea = n * 0.001;
  const sides = [[], []];
  for (const hole of holes) {
    if (hole.area < minArea || Math.abs(hole.cx - width / 2) < width * 0.06) continue;
    sides[hole.cx < width / 2 ? 0 : 1].push(hole);
  }

  for (const side of sides) {
    if (!side.length) continue;
    const points = [];
    for (const hole of side) {
      for (const [y, [x0, x1]] of hole.rows) points.push([x0, y], [x1, y]);
    }
    fillHull(convexHull(points), width, (i) => {
      px[i * 4 + 3] = 0;
    });
  }
}

/**
 * Tinted lenses. A tinted lens stays opaque when keyed, so it makes no hole;
 * the arm shows through it as a darker or differently coloured band, edged
 * with a pale outline. Each lens is found as the patch of one tint around its
 * middle, and everything inside that patch's hull that is not the tint — the
 * arm, and its half-transparent outline — is painted the tint, solid. A band
 * just beyond the hull takes the outline's far edge too, but only what is not
 * much darker than the lens, which leaves the rim. A lens the same colour as
 * its rim cannot be told apart from it; the patch runs into the rim, grows past
 * a lens's width, and that side is left alone.
 *
 * box: the frame's bounds, { x0, y0, x1, y1 }.
 */
export function paintTemplesInTintedLenses(px, width, height, box) {
  const TOLERANCE = 26;
  const bw = box.x1 - box.x0 + 1;
  const bh = box.y1 - box.y0 + 1;
  const n = width * height;
  const queue = new Int32Array(n);
  const opaque = (i) => px[i * 4 + 3] >= 200;
  const near = (i, [r, g, b]) =>
    Math.max(Math.abs(px[i * 4] - r), Math.abs(px[i * 4 + 1] - g), Math.abs(px[i * 4 + 2] - b)) <= TOLERANCE;

  // Lens middles sit about a quarter in from each side, a little below the
  // middle of the frame; a few guesses, in case the first lands on a glint.
  for (const side of [0, 1]) {
    // Per side: a flood that stopped at pixels the other side had visited
    // would look lens-sized when it is really the whole frame.
    const seen = new Uint8Array(n);
    for (const [fx, fy] of [[0.27, 0.55], [0.3, 0.5], [0.25, 0.62], [0.32, 0.6]]) {
      const sx = Math.round(box.x0 + bw * (side ? 1 - fx : fx));
      const sy = Math.round(box.y0 + bh * fy);
      const start = sy * width + sx;
      if (sx < 0 || sx >= width || sy < 0 || sy >= height || seen[start] || !opaque(start)) continue;
      const tint = [px[start * 4], px[start * 4 + 1], px[start * 4 + 2]];

      let head = 0;
      let tail = 0;
      seen[start] = 1;
      queue[tail++] = start;
      let minX = sx;
      let maxX = sx;
      let leaked = false;
      while (head < tail) {
        const i = queue[head++];
        const x = i % width;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (maxX - minX > bw * 0.5) {
          leaked = true;
          break;
        }
        const visit = (j) => {
          if (!seen[j] && opaque(j) && near(j, tint)) {
            seen[j] = 1;
            queue[tail++] = j;
          }
        };
        if (x > 0) visit(i - 1);
        if (x < width - 1) visit(i + 1);
        if (i >= width) visit(i - width);
        if (i < n - width) visit(i + width);
      }
      // Too small to be a lens — a glint, a rivet — try the next guess.
      if (leaked) break;
      if (tail < bw * bh * 0.03) continue;

      const rows = new Map();
      for (let k = 0; k < tail; k++) {
        const j = queue[k];
        const x = j % width;
        const y = (j - x) / width;
        const row = rows.get(y);
        if (!row) rows.set(y, [x, x]);
        else {
          if (x < row[0]) row[0] = x;
          if (x > row[1]) row[1] = x;
        }
      }
      const points = [];
      for (const [y, [x0, x1]] of rows) points.push([x0, y], [x1, y]);
      const hull = convexHull(points);
      const paint = (i) => {
        px[i * 4] = tint[0];
        px[i * 4 + 1] = tint[1];
        px[i * 4 + 2] = tint[2];
        px[i * 4 + 3] = 255;
      };
      // Not the fully clear pixels: a tinted lens has none, and what the hull
      // takes in past the lens's own edge is background.
      fillHull(hull, width, (i) => {
        if (px[i * 4 + 3] > 0 && !(opaque(i) && near(i, tint))) paint(i);
      });
      const tintLight = (tint[0] + tint[1] + tint[2]) / 3;
      fillHull(growHull(hull, Math.max(2, bw * 0.012)), width, (i) => {
        const light = (px[i * 4] + px[i * 4 + 1] + px[i * 4 + 2]) / 3;
        if (px[i * 4 + 3] > 0 && light >= tintLight - TOLERANCE) paint(i);
      });
      break;
    }
  }
}

/** Andrew's monotone chain; points are [x, y]. */
export function convexHull(points) {
  const p = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const q of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop();
    lower.push(q);
  }
  const upper = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const q = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop();
    upper.push(q);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

/** hull pushed out by `by` pixels from its middle. */
function growHull(hull, by) {
  let cx = 0;
  let cy = 0;
  for (const [x, y] of hull) {
    cx += x;
    cy += y;
  }
  cx /= hull.length;
  cy /= hull.length;
  return hull.map(([x, y]) => {
    const d = Math.hypot(x - cx, y - cy) || 1;
    return [x + ((x - cx) / d) * by, y + ((y - cy) / d) * by];
  });
}

/** Calls paint with the index of every pixel inside the convex hull. */
function fillHull(hull, width, paint) {
  if (hull.length < 3) return;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const [, y] of hull) {
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  for (let y = Math.ceil(minY); y <= Math.floor(maxY); y++) {
    let left = Infinity;
    let right = -Infinity;
    for (let k = 0; k < hull.length; k++) {
      const [ax, ay] = hull[k];
      const [bx, by] = hull[(k + 1) % hull.length];
      if ((ay <= y && by >= y) || (by <= y && ay >= y)) {
        const x = ay === by ? Math.min(ax, bx) : ax + ((y - ay) / (by - ay)) * (bx - ax);
        const x2 = ay === by ? Math.max(ax, bx) : x;
        if (x < left) left = x;
        if (x2 > right) right = x2;
      }
    }
    // Clamped to the row: a grown hull can reach past the photo's edge, and an
    // index past the end of one row is the start of the next. Rows outside
    // the photo index outside the array, where writes do nothing.
    const x1 = Math.min(width - 1, Math.floor(right));
    for (let x = Math.max(0, Math.ceil(left)); x <= x1; x++) paint(y * width + x);
  }
}
