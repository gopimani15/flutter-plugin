import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

test('built bundle exposes window.GlassesTryOn', () => {
  const dom = new JSDOM('<!doctype html><div id="v"></div>', { runScripts: 'outside-only' });
  dom.window.eval(readFileSync(new URL('../../eyewear_tryon_web/assets/tryon.js', import.meta.url), 'utf8'));
  const api = dom.window.GlassesTryOn;
  for (const fn of ['create', 'setFrame', 'setManualPd', 'remeasure', 'setMirror', 'snapshot', 'dispose']) {
    assert.equal(typeof api[fn], 'function', fn);
  }
  assert.equal(api.version, '0.1.0');
});
