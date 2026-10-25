// Public JS API used by the Flutter web plugin (and usable standalone).
//
//   GlassesTryOn.create(id, hostElement, configJson, onEvent(jsonString))
//   GlassesTryOn.setFrame(id, specJson)
//   GlassesTryOn.setManualPd(id, mm)      // 0 clears
//   GlassesTryOn.remeasure(id)          // unlock PD / face values
//   GlassesTryOn.setImage(id, url)       // still-photo try-on
//   GlassesTryOn.setMirror(id, bool)
//   GlassesTryOn.snapshot(id) -> Promise<dataUrl | null>
//   GlassesTryOn.dispose(id)
import { TryOnSession } from './session.js';

const sessions = new Map();

function get(id) {
  const s = sessions.get(id);
  if (!s) throw new Error(`[eyewear_tryon] no session ${id}`);
  return s;
}

const api = {
  version: '0.1.0',
  create(id, host, configJson, onEvent) {
    sessions.get(id)?.dispose();
    const cfg = configJson ? JSON.parse(configJson) : {};
    const emit = (e) => {
      try {
        onEvent?.(JSON.stringify(e));
      } catch (err) {
        console.error(err);
      }
    };
    const s = new TryOnSession(host, cfg, emit);
    sessions.set(id, s);
    if (cfg.frame) s.setFrame(cfg.frame).catch((e) => s._error(e));
  },
  setFrame(id, specJson) {
    const s = get(id);
    s.setFrame(JSON.parse(specJson)).catch((e) => s._error(e));
  },
  setManualPd(id, mm) {
    get(id).setManualPd(Number(mm) || 0);
  },
  remeasure(id) {
    get(id).remeasure();
  },
  setImage(id, url) {
    const s = get(id);
    return s.setImage(url).catch((e) => s._error(e));
  },
  setMirror(id, mirror) {
    get(id).setMirror(mirror);
  },
  snapshot(id) {
    return Promise.resolve(sessions.get(id)?.snapshot() ?? null);
  },
  dispose(id) {
    sessions.get(id)?.dispose();
    sessions.delete(id);
  },
};

window.GlassesTryOn = api;
export default api;
