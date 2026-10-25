import 'dart:typed_data';

import 'package:flutter/widgets.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

import 'method_channel.dart';
import 'models.dart';

/// Implemented once per platform (web, android, ios).
abstract class GlassesTryOnPlatform extends PlatformInterface {
  GlassesTryOnPlatform() : super(token: _token);

  static final Object _token = Object();
  static GlassesTryOnPlatform _instance = MethodChannelGlassesTryOn();

  static GlassesTryOnPlatform get instance => _instance;

  static set instance(GlassesTryOnPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  /// Builds the native camera + 3D view. [onCreated] receives the view id
  /// used by every other call.
  Widget buildView({
    required FrameSpec frame,
    required TryOnConfig config,
    required void Function(int viewId) onCreated,
  });

  /// Events for a view (ready, measurements, errors...).
  Stream<TryOnEvent> events(int viewId);

  Future<void> setFrame(int viewId, FrameSpec frame);

  /// Use a known PD (mm) as the metric scale; `null` returns to estimation.
  Future<void> setManualPd(int viewId, double? pdMm);

  /// Forget the locked PD / face values and measure again (e.g. new person).
  Future<void> remeasure(int viewId);

  Future<void> setMirror(int viewId, bool mirror);

  /// Try on a still photo (JPEG/PNG bytes) instead of the camera. The photo
  /// is treated as a new person: measurements restart.
  Future<void> setPhoto(int viewId, Uint8List imageBytes);

  /// JPEG of the camera image with the glasses composited, or null.
  Future<Uint8List?> takeSnapshot(int viewId);

  Future<void> disposeView(int viewId);
}
