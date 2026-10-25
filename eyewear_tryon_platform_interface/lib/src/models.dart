import 'package:flutter/foundation.dart';

/// Lens outline used by the procedural frame (when no 3D model is supplied).
enum LensShape { round, rect, cateye }

/// Unit of a supplied 3D model. [auto] scales it so its front width equals
/// [FrameSpec.totalWidth].
enum ModelUnits { mm, cm, m, auto }

/// Frame measurements, all in millimetres. Matches the size printed on a
/// frame's temple (e.g. 52□18-145) plus front width and heights.
@immutable
class FrameSpec {
  const FrameSpec({
    required this.id,
    required this.lensWidth,
    required this.bridgeWidth,
    required this.lensHeight,
    required this.templeLength,
    required this.totalWidth,
    double? frameHeight,
    this.name,
    this.modelUrl,
    this.modelUnits = ModelUnits.auto,
    this.frontImageUrl,
    this.frontImageLensCenterY = 0.5,
    this.removeBackground,
    this.removePhotoTemples = true,
    this.showTemples = true,
    this.thumbnailUrl,
    this.productUrl,
    this.price,
    this.shape = LensShape.round,
    this.frameColor = '#1c1c1e',
    this.lensTint = '#a8c0d8',
    this.lensOpacity = 0.18,
    this.metallic = false,
  }) : frameHeight = frameHeight ?? lensHeight + 5;

  final String id;
  final String? name;

  /// Lens width "A".
  final double lensWidth;

  /// Bridge width "DBL" (distance between lenses).
  final double bridgeWidth;

  /// Lens height "B".
  final double lensHeight;

  /// Overall frame height (lens height + rims).
  final double frameHeight;
  final double templeLength;

  /// Total frame front width, hinge to hinge.
  final double totalWidth;

  /// Optional .glb/.gltf URL. Convention: origin at the bridge centre,
  /// +X wearer's left, +Y up, +Z forward, temples toward -Z.
  final String? modelUrl;
  final ModelUnits modelUnits;

  /// Front product photo (transparent PNG, or a plain white background that
  /// is removed automatically). Cropped to the frame and scaled to
  /// [totalWidth]. Used when there is no [modelUrl] or it fails to load.
  final String? frontImageUrl;

  /// Lens-centre height in the cropped front photo, 0 = top, 1 = bottom.
  final double frontImageLensCenterY;

  /// Force background removal on/off for [frontImageUrl] (null = automatic:
  /// only when the photo has no transparency). Set false for white frames.
  final bool? removeBackground;

  /// Clear the temple arms a front photo shows through its lenses — on a
  /// face they are behind the head. Clear lenses lose the arm outright;
  /// tinted lenses have it painted over in the tint. On by default; set false
  /// for a photo whose lens area should be drawn exactly as shot.
  final bool removePhotoTemples;

  /// Draw the temple arms. False draws the frame front only: no arms for a
  /// photo or measurements frame, and a GLB's nodes named "temple" hidden.
  final bool showTemples;

  /// Catalogue display fields (not used for rendering).
  final String? thumbnailUrl;
  final String? productUrl;
  final String? price;
  final LensShape shape;
  final String frameColor;
  final String lensTint;
  final double lensOpacity;
  final bool metallic;

  /// Which asset the try-on will use first.
  String get renderSource => modelUrl != null
      ? 'model'
      : frontImageUrl != null
          ? 'photo'
          : 'measurements';

  /// Frame PD / geometric centre distance = A + DBL.
  double get framePd => lensWidth + bridgeWidth;

  /// Standard size notation, e.g. `52□18-145`.
  String get sizeLabel =>
      '${_n(lensWidth)}□${_n(bridgeWidth)}-${_n(templeLength)}';

  static String _n(double v) =>
      v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1);

  Map<String, Object?> toJson() => {
        'id': id,
        'name': name,
        'lensWidth': lensWidth,
        'bridgeWidth': bridgeWidth,
        'lensHeight': lensHeight,
        'frameHeight': frameHeight,
        'templeLength': templeLength,
        'totalWidth': totalWidth,
        'modelUrl': modelUrl,
        'modelUnits': modelUnits.name,
        'frontImageUrl': frontImageUrl,
        'frontImageLensCenterY': frontImageLensCenterY,
        'removeBackground': removeBackground,
        'removePhotoTemples': removePhotoTemples,
        'showTemples': showTemples,
        'thumbnailUrl': thumbnailUrl,
        'productUrl': productUrl,
        'price': price,
        'shape': shape.name,
        'frameColor': frameColor,
        'lensTint': lensTint,
        'lensOpacity': lensOpacity,
        'metallic': metallic,
      };

  factory FrameSpec.fromJson(Map<String, Object?> j) => FrameSpec(
        id: j['id']! as String,
        name: j['name'] as String?,
        lensWidth: (j['lensWidth']! as num).toDouble(),
        bridgeWidth: (j['bridgeWidth']! as num).toDouble(),
        lensHeight: (j['lensHeight']! as num).toDouble(),
        frameHeight: (j['frameHeight'] as num?)?.toDouble(),
        templeLength: (j['templeLength']! as num).toDouble(),
        totalWidth: (j['totalWidth']! as num).toDouble(),
        modelUrl: j['modelUrl'] as String?,
        modelUnits: ModelUnits.values.byName(j['modelUnits'] as String? ?? 'auto'),
        frontImageUrl: j['frontImageUrl'] as String?,
        frontImageLensCenterY: (j['frontImageLensCenterY'] as num?)?.toDouble() ?? 0.5,
        removeBackground: j['removeBackground'] as bool?,
        removePhotoTemples: j['removePhotoTemples'] as bool? ?? true,
        showTemples: j['showTemples'] as bool? ?? true,
        thumbnailUrl: j['thumbnailUrl'] as String?,
        productUrl: j['productUrl'] as String?,
        price: j['price'] as String?,
        shape: LensShape.values.byName(j['shape'] as String? ?? 'round'),
        frameColor: j['frameColor'] as String? ?? '#1c1c1e',
        lensTint: j['lensTint'] as String? ?? '#a8c0d8',
        lensOpacity: (j['lensOpacity'] as num?)?.toDouble() ?? 0.18,
        metallic: j['metallic'] as bool? ?? false,
      );

  @override
  bool operator ==(Object other) =>
      other is FrameSpec && mapEquals(other.toJson(), toJson());

  @override
  int get hashCode => Object.hashAll(toJson().values);
}

/// How the live view is configured. Defaults are sensible for adults.
@immutable
class TryOnConfig {
  const TryOnConfig({
    this.mirror = true,
    this.useCamera = true,
    this.manualPdMm,
    this.irisDiameterMm = 11.7,
    this.vertexDistanceMm = 12,
    this.pupilAboveLensCenterMm = 2,
    this.pantoscopicTiltDeg = 8,
    this.earOffsetMm = 10,
    this.debug = false,
    this.webWasmBaseUrl,
    this.webModelAssetUrl,
    this.webDelegate = 'GPU',
  });

  /// Selfie-style mirrored preview.
  final bool mirror;

  /// Start the live camera. Set false to start in photo mode and call
  /// [GlassesTryOnPlatform.setPhoto] (e.g. when camera access is denied).
  final bool useCamera;

  /// PD from a prescription. When set it is used as the metric scale instead
  /// of the iris estimate (more accurate sizing).
  final double? manualPdMm;

  /// Horizontal visible iris diameter used as a ruler on monocular cameras.
  final double irisDiameterMm;
  final double vertexDistanceMm;
  final double pupilAboveLensCenterMm;
  final double pantoscopicTiltDeg;

  /// Added to the tragus depth to approximate the ear junction.
  final double earOffsetMm;

  /// Draws the landmarks used for measuring (web).
  final bool debug;

  /// Web only: self-hosted MediaPipe wasm folder (recommended in production).
  final String? webWasmBaseUrl;

  /// Web only: self-hosted `face_landmarker.task`.
  final String? webModelAssetUrl;

  /// Web only: 'GPU' or 'CPU'. Falls back to CPU automatically.
  final String webDelegate;

  Map<String, Object?> toJson() => {
        'mirror': mirror,
        'source': useCamera ? 'camera' : 'image',
        'manualPdMm': manualPdMm ?? 0,
        'irisDiameterMm': irisDiameterMm,
        'vertexDistanceMm': vertexDistanceMm,
        'pupilAboveLensCenterMm': pupilAboveLensCenterMm,
        'pantoscopicTiltDeg': pantoscopicTiltDeg,
        'earOffsetMm': earOffsetMm,
        'debug': debug,
        if (webWasmBaseUrl != null) 'wasmBaseUrl': webWasmBaseUrl,
        if (webModelAssetUrl != null) 'modelAssetUrl': webModelAssetUrl,
        'delegate': webDelegate,
      };
}

enum PdSource { estimated, manual }

/// Face measurements in millimetres, as medians over recent frontal frames.
@immutable
class FaceMeasurements {
  const FaceMeasurements({
    required this.pd,
    required this.faceWidth,
    required this.noseBridgeWidth,
    required this.frontToEar,
    required this.confidence,
    this.monoPdRight = double.nan,
    this.monoPdLeft = double.nan,
    this.locked = false,
    this.samples = 0,
    this.pdSource = PdSource.estimated,
    this.yaw = 0,
    this.pitch = 0,
    this.roll = 0,
  });

  /// Pupillary distance: horizontal distance between the vertical lines
  /// through each pupil centre.
  final double pd;

  /// Monocular PD: right / left pupil to the nose-bridge centre line.
  final double monoPdRight, monoPdLeft;

  /// True once enough stable samples agree. A person's PD and face size don't
  /// change, so locked values stay fixed (switching frames won't move them).
  /// Save [pd] and pass it as [TryOnConfig.manualPdMm] next session.
  final bool locked;
  final double faceWidth;
  final double noseBridgeWidth;

  /// Nose bridge to ear junction, along the head's forward axis.
  final double frontToEar;

  /// 0..1, grows with the number of frontal samples collected.
  final double confidence;
  final int samples;
  final PdSource pdSource;
  final double yaw, pitch, roll;

  bool get isReliable => locked || confidence >= 0.99;

  static double _d(Object? v) => (v as num?)?.toDouble() ?? double.nan;

  factory FaceMeasurements.fromJson(Map<String, Object?> j) => FaceMeasurements(
        pd: _d(j['pd']),
        faceWidth: _d(j['faceWidth']),
        noseBridgeWidth: _d(j['noseBridge']),
        frontToEar: _d(j['frontToEar']),
        confidence: _d(j['confidence']),
        monoPdRight: _d(j['monoPdRight']),
        monoPdLeft: _d(j['monoPdLeft']),
        locked: j['locked'] as bool? ?? false,
        samples: (j['samples'] as num?)?.toInt() ?? 0,
        pdSource: j['pdSource'] == 'manual' ? PdSource.manual : PdSource.estimated,
        yaw: _d(j['yaw']),
        pitch: _d(j['pitch']),
        roll: _d(j['roll']),
      );

  @override
  String toString() => 'FaceMeasurements(pd: ${pd.toStringAsFixed(1)}, '
      'faceWidth: ${faceWidth.toStringAsFixed(1)}, '
      'nose: ${noseBridgeWidth.toStringAsFixed(1)}, '
      'frontToEar: ${frontToEar.toStringAsFixed(1)}, '
      'conf: ${confidence.toStringAsFixed(2)}${locked ? ', locked' : ''})';
}

/// Events emitted by a live try-on view.
sealed class TryOnEvent {
  const TryOnEvent();

  static TryOnEvent? fromJson(Map<String, Object?> j) => switch (j['type']) {
        'ready' => const TryOnReady(),
        'frameLoaded' => TryOnFrameLoaded((j['framePd'] as num?)?.toDouble(),
            source: j['source'] as String?),
        'faceFound' => const TryOnFaceFound(),
        'faceLost' => TryOnFaceLost(noFaceInPhoto: j['reason'] == 'noFaceInPhoto'),
        'measurements' => TryOnMeasured(FaceMeasurements.fromJson(j)),
        'error' => TryOnError(j['message'] as String? ?? 'Unknown error',
            name: j['name'] as String?),
        _ => null,
      };
}

class TryOnReady extends TryOnEvent {
  const TryOnReady();
}

class TryOnFrameLoaded extends TryOnEvent {
  const TryOnFrameLoaded(this.framePd, {this.source});
  final double? framePd;

  /// What was actually rendered: 'model', 'photo' or 'measurements'
  /// (falls back down this list when an asset fails to load).
  final String? source;
}

class TryOnFaceFound extends TryOnEvent {
  const TryOnFaceFound();
}

class TryOnFaceLost extends TryOnEvent {
  const TryOnFaceLost({this.noFaceInPhoto = false});

  /// True when a still photo was searched and contains no detectable face.
  final bool noFaceInPhoto;
}

class TryOnMeasured extends TryOnEvent {
  const TryOnMeasured(this.measurements);
  final FaceMeasurements measurements;
}

class TryOnError extends TryOnEvent {
  const TryOnError(this.message, {this.name});
  final String message;

  /// e.g. `NotAllowedError` when camera permission is denied.
  final String? name;

  bool get isPermissionDenied =>
      name == 'NotAllowedError' || name == 'PERMISSION_DENIED';
}
