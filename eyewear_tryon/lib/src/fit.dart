import 'dart:math' as math;

import 'package:flutter/foundation.dart';
import 'package:eyewear_tryon_platform_interface/eyewear_tryon_platform_interface.dart';

enum FitLevel { tooSmall, good, tooLarge, unknown }

/// Tolerance bands (mm). Starting points: tune with an optician or your
/// returns data.
@immutable
class FitTolerances {
  const FitTolerances({
    this.widthMin = -4,
    this.widthMax = 6,
    this.bridgeMin = -2,
    this.bridgeMax = 3,
    this.templeMin = 25,
    this.templeMax = 45,
    this.maxDecentrationPerEye = 5,
    this.minProgressiveFittingHeight = 17,
    this.pupilAboveLensCenterMm = 2,
  });

  /// frame total width - face width
  final double widthMin, widthMax;

  /// bridge (DBL) - nose bridge width
  final double bridgeMin, bridgeMax;

  /// temple length - front-to-ear (room for the bend behind the ear)
  final double templeMin, templeMax;

  /// |frame PD - PD| / 2
  final double maxDecentrationPerEye;

  /// pupil to lens bottom, for progressive lenses
  final double minProgressiveFittingHeight;
  final double pupilAboveLensCenterMm;
}

@immutable
class FitCheck {
  const FitCheck({
    required this.label,
    required this.level,
    required this.message,
    this.value,
    this.excess = 0,
  });

  final String label;
  final FitLevel level;
  final String message;

  /// The compared difference in mm (see each check), if measurable.
  final double? value;

  /// How far outside the good band, in mm (0 when good).
  final double excess;

  bool get isGood => level == FitLevel.good;
}

/// Compares a frame against a face. All inputs and outputs in mm.
@immutable
class FitReport {
  const FitReport({
    required this.width,
    required this.bridge,
    required this.temple,
    required this.decentration,
    required this.lensHeight,
    required this.decentrationPerEye,
    required this.fittingHeight,
    required this.score,
    required this.confidence,
  });

  final FitCheck width, bridge, temple, decentration, lensHeight;

  /// (frame PD - PD) / 2. Positive: lens centres sit outside the pupils.
  final double decentrationPerEye;

  /// Pupil to bottom of the lens.
  final double fittingHeight;

  /// 0..100, weighted over all checks.
  final int score;

  /// Copied from the measurements (0..1).
  final double confidence;

  List<FitCheck> get checks => [width, bridge, temple, decentration, lensHeight];

  bool get isGoodFit => checks.every((c) => c.level != FitLevel.tooSmall && c.level != FitLevel.tooLarge);

  String get summary {
    if (checks.every((c) => c.level == FitLevel.unknown)) return 'Measuring…';
    final issues = checks.where((c) => !c.isGood && c.level != FitLevel.unknown).toList();
    if (issues.isEmpty) return 'Great fit';
    return issues.map((c) => c.message).join(' · ');
  }

  static FitCheck _band(String label, double value, double lo, double hi,
      {required String small, required String large, String good = 'Good'}) {
    if (value.isNaN) {
      return FitCheck(label: label, level: FitLevel.unknown, message: 'Not measured yet');
    }
    if (value < lo) {
      return FitCheck(label: label, level: FitLevel.tooSmall, message: small, value: value, excess: lo - value);
    }
    if (value > hi) {
      return FitCheck(label: label, level: FitLevel.tooLarge, message: large, value: value, excess: value - hi);
    }
    return FitCheck(label: label, level: FitLevel.good, message: good, value: value);
  }

  static FitReport evaluate(
    FrameSpec frame,
    FaceMeasurements face, {
    FitTolerances tolerances = const FitTolerances(),
    bool progressive = false,
  }) {
    final t = tolerances;
    final width = _band('Frame width', frame.totalWidth - face.faceWidth, t.widthMin, t.widthMax,
        small: 'Frame too narrow', large: 'Frame too wide');
    final bridge = _band('Bridge', frame.bridgeWidth - face.noseBridgeWidth, t.bridgeMin, t.bridgeMax,
        small: 'Bridge too tight', large: 'Bridge too loose (may slide)');
    final temple = _band('Temple length', frame.templeLength - face.frontToEar, t.templeMin, t.templeMax,
        small: 'Temples too short', large: 'Temples too long');

    final dec = (frame.framePd - face.pd) / 2;
    final decentration = _band('Lens centring', dec, -t.maxDecentrationPerEye, t.maxDecentrationPerEye,
        small: 'Lenses narrower than your PD', large: 'Lenses wide for your PD (thicker edges with strong Rx)');

    final fittingHeight = frame.lensHeight / 2 + t.pupilAboveLensCenterMm;
    final lensHeight = progressive
        ? _band('Lens height', fittingHeight, t.minProgressiveFittingHeight, double.infinity,
            small: 'Lens too short for progressives', large: '')
        : FitCheck(label: 'Lens height', level: FitLevel.good, message: 'Good', value: fittingHeight);

    const weights = {'w': 35.0, 'b': 25.0, 't': 15.0, 'd': 15.0, 'h': 10.0};
    double part(FitCheck c, double w) => switch (c.level) {
          FitLevel.good => w,
          FitLevel.unknown => w * 0.5,
          _ => w * math.max(0, 1 - c.excess / 10),
        };
    final score = (part(width, weights['w']!) +
            part(bridge, weights['b']!) +
            part(temple, weights['t']!) +
            part(decentration, weights['d']!) +
            part(lensHeight, weights['h']!))
        .round();

    return FitReport(
      width: width,
      bridge: bridge,
      temple: temple,
      decentration: decentration,
      lensHeight: lensHeight,
      decentrationPerEye: dec,
      fittingHeight: fittingHeight,
      score: score,
      confidence: face.confidence,
    );
  }
}

/// Ideal frame size ranges for a face, e.g. to filter a catalogue.
@immutable
class SizeRecommendation {
  const SizeRecommendation({
    required this.totalWidth,
    required this.bridgeWidth,
    required this.templeLength,
    required this.lensWidth,
  });

  final ({double min, double max}) totalWidth, bridgeWidth, templeLength, lensWidth;

  factory SizeRecommendation.forFace(FaceMeasurements f,
      {FitTolerances t = const FitTolerances()}) {
    final bridge = (min: f.noseBridgeWidth + t.bridgeMin, max: f.noseBridgeWidth + t.bridgeMax);
    final mid = (bridge.min + bridge.max) / 2;
    return SizeRecommendation(
      totalWidth: (min: f.faceWidth + t.widthMin, max: f.faceWidth + t.widthMax),
      bridgeWidth: bridge,
      templeLength: (min: f.frontToEar + t.templeMin, max: f.frontToEar + t.templeMax),
      // Keep lens centres within the decentration limit of the PD.
      lensWidth: (
        min: f.pd - 2 * t.maxDecentrationPerEye - mid,
        max: f.pd + 2 * t.maxDecentrationPerEye - mid,
      ),
    );
  }

  bool matches(FrameSpec s) =>
      _in(s.totalWidth, totalWidth) &&
      _in(s.bridgeWidth, bridgeWidth) &&
      _in(s.templeLength, templeLength) &&
      _in(s.lensWidth, lensWidth);

  static bool _in(double v, ({double min, double max}) r) => v >= r.min && v <= r.max;
}
