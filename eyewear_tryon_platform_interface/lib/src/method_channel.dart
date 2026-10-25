import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import 'models.dart';
import 'platform.dart';

/// Default implementation for Android and iOS: a native platform view plus a
/// per-view MethodChannel / EventChannel.
///
/// Native side contract:
///   view type:      `eyewear_tryon/view`
///   creation args:  {'frame': <FrameSpec json>, 'config': <TryOnConfig json>}
///   method channel: `eyewear_tryon/view_<id>`
///       setFrame(String json), setManualPd(double), remeasure(), setMirror(bool),
///       setPhoto(Uint8List), takeSnapshot() -> Uint8List?, dispose()
///   event channel:  `eyewear_tryon/events_<id>` emitting JSON strings with the
///       same shape as the web engine events (see TryOnEvent.fromJson).
class MethodChannelGlassesTryOn extends GlassesTryOnPlatform {
  static const viewType = 'eyewear_tryon/view';

  final Map<int, MethodChannel> _channels = {};
  final Map<int, Stream<TryOnEvent>> _streams = {};

  @visibleForTesting
  MethodChannel channel(int id) =>
      _channels.putIfAbsent(id, () => MethodChannel('eyewear_tryon/view_$id'));

  @override
  Widget buildView({
    required FrameSpec frame,
    required TryOnConfig config,
    required void Function(int viewId) onCreated,
  }) {
    final params = <String, Object?>{
      'frame': jsonEncode(frame.toJson()),
      'config': jsonEncode(config.toJson()),
    };
    const codec = StandardMessageCodec();
    final gestures = <Factory<OneSequenceGestureRecognizer>>{};
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return AndroidView(
          viewType: viewType,
          creationParams: params,
          creationParamsCodec: codec,
          gestureRecognizers: gestures,
          onPlatformViewCreated: onCreated,
        );
      case TargetPlatform.iOS:
        return UiKitView(
          viewType: viewType,
          creationParams: params,
          creationParamsCodec: codec,
          gestureRecognizers: gestures,
          onPlatformViewCreated: onCreated,
        );
      default:
        return const Center(
          child: Text('Glasses try-on is not supported on this platform.'),
        );
    }
  }

  @override
  Stream<TryOnEvent> events(int viewId) => _streams.putIfAbsent(
        viewId,
        () => EventChannel('eyewear_tryon/events_$viewId')
            .receiveBroadcastStream()
            .map((e) => TryOnEvent.fromJson(
                (jsonDecode(e as String) as Map).cast<String, Object?>()))
            .where((e) => e != null)
            .cast<TryOnEvent>()
            .asBroadcastStream(),
      );

  @override
  Future<void> setFrame(int viewId, FrameSpec frame) =>
      channel(viewId).invokeMethod('setFrame', jsonEncode(frame.toJson()));

  @override
  Future<void> setManualPd(int viewId, double? pdMm) =>
      channel(viewId).invokeMethod('setManualPd', pdMm ?? 0.0);

  @override
  Future<void> remeasure(int viewId) => channel(viewId).invokeMethod('remeasure');

  @override
  Future<void> setMirror(int viewId, bool mirror) =>
      channel(viewId).invokeMethod('setMirror', mirror);

  @override
  Future<void> setPhoto(int viewId, Uint8List imageBytes) =>
      channel(viewId).invokeMethod('setPhoto', imageBytes);

  @override
  Future<Uint8List?> takeSnapshot(int viewId) =>
      channel(viewId).invokeMethod<Uint8List>('takeSnapshot');

  @override
  Future<void> disposeView(int viewId) async {
    final ch = _channels.remove(viewId) ?? MethodChannel('eyewear_tryon/view_$viewId');
    _streams.remove(viewId);
    try {
      await ch.invokeMethod<void>('dispose');
    } on MissingPluginException {
      // Native view already torn down.
    } on PlatformException {
      // Ignore: nothing left to dispose.
    }
  }
}
