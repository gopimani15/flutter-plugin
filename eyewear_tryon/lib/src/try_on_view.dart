import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/widgets.dart';
import 'package:eyewear_tryon_platform_interface/eyewear_tryon_platform_interface.dart';

import 'fit.dart';

enum TryOnStatus { starting, ready, tracking, noFace, error }

/// Drives a [GlassesTryOnView]: switch frames, set PD, take snapshots, and
/// listen for live measurements + fit.
class GlassesTryOnController extends ChangeNotifier {
  GlassesTryOnController({
    this.tolerances = const FitTolerances(),
    bool progressive = false,
  }) : _progressive = progressive;

  final FitTolerances tolerances;
  bool _progressive;
  int? _viewId;
  FrameSpec? _frame;
  FaceMeasurements? _measurements;
  TryOnStatus _status = TryOnStatus.starting;
  TryOnError? _error;
  StreamSubscription<TryOnEvent>? _sub;

  GlassesTryOnPlatform get _p => GlassesTryOnPlatform.instance;

  TryOnStatus get status => _status;
  TryOnError? get error => _error;
  FrameSpec? get frame => _frame;
  FaceMeasurements? get measurements => _measurements;
  bool get progressive => _progressive;

  /// Fit of the current frame against the latest measurements.
  FitReport? get fit {
    final f = _frame, m = _measurements;
    if (f == null || m == null) return null;
    return FitReport.evaluate(f, m, tolerances: tolerances, progressive: _progressive);
  }

  /// Fit of any frame (e.g. to rank a catalogue) against the latest face.
  FitReport? fitFor(FrameSpec frame) {
    final m = _measurements;
    return m == null
        ? null
        : FitReport.evaluate(frame, m, tolerances: tolerances, progressive: _progressive);
  }

  set progressive(bool v) {
    _progressive = v;
    notifyListeners();
  }

  void _attach(int viewId, FrameSpec frame) {
    _viewId = viewId;
    _sub?.cancel();
    _sub = _p.events(viewId).listen(_onEvent);
    // Keep a frame chosen before the view existed.
    final pending = _frame;
    _frame = pending ?? frame;
    if (pending != null && pending != frame) _p.setFrame(viewId, pending);
  }

  void _onEvent(TryOnEvent e) {
    switch (e) {
      case TryOnReady():
        _status = TryOnStatus.ready;
      case TryOnFaceFound():
        _status = TryOnStatus.tracking;
      case TryOnFaceLost():
        _status = TryOnStatus.noFace;
      case TryOnMeasured(:final measurements):
        _measurements = measurements;
      case final TryOnError err:
        _status = TryOnStatus.error;
        _error = err;
      case TryOnFrameLoaded():
        break;
    }
    notifyListeners();
  }

  Future<void> setFrame(FrameSpec frame) async {
    _frame = frame;
    notifyListeners();
    final id = _viewId;
    if (id != null) await _p.setFrame(id, frame);
  }

  /// Use a prescription PD as the metric scale (more accurate); null to clear.
  Future<void> setManualPd(double? pdMm) async {
    _measurements = null;
    notifyListeners();
    final id = _viewId;
    if (id != null) await _p.setManualPd(id, pdMm);
  }

  /// Try on a still photo (JPEG/PNG bytes), e.g. from an image picker or
  /// when camera access is denied. Measurements restart for the new face.
  Future<void> tryOnPhoto(Uint8List imageBytes) async {
    _measurements = null;
    _status = TryOnStatus.ready;
    notifyListeners();
    final id = _viewId;
    if (id != null) await _p.setPhoto(id, imageBytes);
  }

  /// Unlock and re-measure PD / face size (e.g. a different person).
  Future<void> remeasure() async {
    _measurements = null;
    notifyListeners();
    final id = _viewId;
    if (id != null) await _p.remeasure(id);
  }

  Future<void> setMirror(bool mirror) async {
    final id = _viewId;
    if (id != null) await _p.setMirror(id, mirror);
  }

  /// JPEG bytes of the current view with glasses, or null.
  Future<Uint8List?> takeSnapshot() async {
    final id = _viewId;
    return id == null ? null : _p.takeSnapshot(id);
  }

  Future<void> _detach() async {
    await _sub?.cancel();
    _sub = null;
    final id = _viewId;
    _viewId = null;
    if (id != null) await _p.disposeView(id);
  }

  @override
  void dispose() {
    _detach();
    super.dispose();
  }
}

/// Live camera try-on. Size it like any widget; the camera image is
/// cover-fitted into it.
class GlassesTryOnView extends StatefulWidget {
  const GlassesTryOnView({
    super.key,
    required this.controller,
    required this.initialFrame,
    this.config = const TryOnConfig(),
  });

  final GlassesTryOnController controller;
  final FrameSpec initialFrame;

  /// Read once when the view is created.
  final TryOnConfig config;

  @override
  State<GlassesTryOnView> createState() => _GlassesTryOnViewState();
}

class _GlassesTryOnViewState extends State<GlassesTryOnView> {
  late final Widget _view = GlassesTryOnPlatform.instance.buildView(
    frame: widget.initialFrame,
    config: widget.config,
    onCreated: (id) => widget.controller._attach(id, widget.initialFrame),
  );

  @override
  void dispose() {
    widget.controller._detach();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => _view;
}
