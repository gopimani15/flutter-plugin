import 'dart:async';
import 'dart:convert';
import 'dart:js_interop';
import 'dart:typed_data';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:eyewear_tryon_platform_interface/eyewear_tryon_platform_interface.dart';
import 'package:web/web.dart' as web;

/// JS engine exposed as `window.GlassesTryOn` by assets/tryon.js.
extension type _Engine(JSObject o) implements JSObject {
  external void create(int id, web.HTMLElement host, String configJson, JSFunction onEvent);
  external void setFrame(int id, String specJson);
  external void setManualPd(int id, double mm);
  external void remeasure(int id);
  external JSPromise<JSAny?> setImage(int id, String url);
  external void setMirror(int id, bool mirror);
  external JSPromise<JSString?> snapshot(int id);
  external void dispose(int id);
}

@JS('GlassesTryOn')
external _Engine? get _engine;

class GlassesTryOnWeb extends GlassesTryOnPlatform {
  static const _viewType = 'glasses-tryon-view';
  static const _assetKey = 'packages/eyewear_tryon_web/assets/tryon.js';

  static void registerWith(Registrar registrar) {
    GlassesTryOnPlatform.instance = GlassesTryOnWeb();
  }

  GlassesTryOnWeb() {
    ui_web.platformViewRegistry.registerViewFactory(
      _viewType,
      (int viewId, {Object? params}) => _createView(viewId, params as String?),
    );
  }

  final Map<int, StreamController<TryOnEvent>> _events = {};
  Future<_Engine>? _loading;

  /// Loads the bundled engine script once (no index.html changes needed).
  Future<_Engine> _load() => _loading ??= () async {
        final existing = _engine;
        if (existing != null) return existing;
        final done = Completer<void>();
        final script = web.HTMLScriptElement()
          ..src = ui_web.assetManager.getAssetUrl(_assetKey)
          ..async = true;
        script.onload = ((web.Event _) => done.complete()).toJS;
        script.onerror = ((web.Event _) => done.completeError(
            StateError('Failed to load $_assetKey'))).toJS;
        web.document.head!.appendChild(script);
        await done.future;
        return _engine!;
      }();

  StreamController<TryOnEvent> _controller(int id) =>
      _events.putIfAbsent(id, () => StreamController<TryOnEvent>.broadcast());

  web.HTMLElement _createView(int viewId, String? configJson) {
    final host = web.HTMLDivElement()
      ..style.width = '100%'
      ..style.height = '100%';
    final events = _controller(viewId);
    _load().then((engine) {
      if (events.isClosed) return; // view disposed before the engine loaded
      engine.create(
        viewId,
        host,
        configJson ?? '{}',
        ((JSString json) {
          final e = TryOnEvent.fromJson(
              (jsonDecode(json.toDart) as Map).cast<String, Object?>());
          if (e != null && !events.isClosed) events.add(e);
        }).toJS,
      );
    }).catchError((Object e) {
      if (!events.isClosed) events.add(TryOnError(e.toString()));
    });
    return host;
  }

  @override
  Widget buildView({
    required FrameSpec frame,
    required TryOnConfig config,
    required void Function(int viewId) onCreated,
  }) {
    return HtmlElementView(
      viewType: _viewType,
      creationParams: jsonEncode({...config.toJson(), 'frame': frame.toJson()}),
      onPlatformViewCreated: onCreated,
    );
  }

  @override
  Stream<TryOnEvent> events(int viewId) => _controller(viewId).stream;

  @override
  Future<void> setFrame(int viewId, FrameSpec frame) async =>
      (await _load()).setFrame(viewId, jsonEncode(frame.toJson()));

  @override
  Future<void> setManualPd(int viewId, double? pdMm) async =>
      (await _load()).setManualPd(viewId, pdMm ?? 0);

  @override
  Future<void> remeasure(int viewId) async => (await _load()).remeasure(viewId);

  @override
  Future<void> setMirror(int viewId, bool mirror) async =>
      (await _load()).setMirror(viewId, mirror);

  String? _photoUrl;

  @override
  Future<void> setPhoto(int viewId, Uint8List imageBytes) async {
    final engine = await _load();
    final old = _photoUrl;
    final blob = web.Blob([imageBytes.toJS].toJS);
    final url = _photoUrl = web.URL.createObjectURL(blob);
    await engine.setImage(viewId, url).toDart;
    if (old != null) web.URL.revokeObjectURL(old);
  }

  @override
  Future<Uint8List?> takeSnapshot(int viewId) async {
    final url = (await (await _load()).snapshot(viewId).toDart)?.toDart;
    if (url == null) return null;
    return base64Decode(url.substring(url.indexOf(',') + 1));
  }

  @override
  Future<void> disposeView(int viewId) async {
    _engine?.dispose(viewId);
    await _events.remove(viewId)?.close();
  }
}
