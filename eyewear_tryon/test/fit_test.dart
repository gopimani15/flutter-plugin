import 'package:flutter_test/flutter_test.dart';
import 'package:eyewear_tryon/eyewear_tryon.dart';

const frame = FrameSpec(
  id: 'sample',
  lensWidth: 52,
  bridgeWidth: 18,
  lensHeight: 40,
  frameHeight: 45,
  templeLength: 145,
  totalWidth: 138,
);

FaceMeasurements face({
  double pd = 63,
  double faceWidth = 136,
  double nose = 17,
  double ear = 108,
}) =>
    FaceMeasurements(
      pd: pd,
      faceWidth: faceWidth,
      noseBridgeWidth: nose,
      frontToEar: ear,
      confidence: 1,
    );

void main() {
  test('frame PD and size label come from the spec', () {
    expect(frame.framePd, 70);
    expect(frame.sizeLabel, '52□18-145');
  });

  test('a matching face is a good fit', () {
    final r = FitReport.evaluate(frame, face());
    expect(r.isGoodFit, isTrue);
    expect(r.decentrationPerEye, 3.5);
    expect(r.fittingHeight, 22);
    expect(r.score, 100);
    expect(r.summary, 'Great fit');
  });

  test('wide face flags a narrow frame', () {
    final r = FitReport.evaluate(frame, face(faceWidth: 150));
    expect(r.width.level, FitLevel.tooSmall);
    expect(r.width.excess, 8);
    expect(r.score, lessThan(100));
  });

  test('narrow nose flags a loose bridge; short head flags long temples', () {
    final r = FitReport.evaluate(frame, face(nose: 12, ear: 90));
    expect(r.bridge.level, FitLevel.tooLarge);
    expect(r.temple.level, FitLevel.tooLarge);
  });

  test('progressive lenses need enough fitting height', () {
    const shallow = FrameSpec(
      id: 's', lensWidth: 50, bridgeWidth: 18, lensHeight: 26,
      templeLength: 140, totalWidth: 134,
    );
    expect(FitReport.evaluate(shallow, face(faceWidth: 132), progressive: true).lensHeight.level,
        FitLevel.tooSmall);
    expect(FitReport.evaluate(frame, face(), progressive: true).lensHeight.level, FitLevel.good);
  });

  test('unmeasured values are unknown, not failures', () {
    final r = FitReport.evaluate(frame, face(ear: double.nan));
    expect(r.temple.level, FitLevel.unknown);
    expect(r.isGoodFit, isTrue);
  });

  test('size recommendation accepts the sample frame for a matching face', () {
    expect(SizeRecommendation.forFace(face()).matches(frame), isTrue);
    expect(SizeRecommendation.forFace(face(faceWidth: 120)).matches(frame), isFalse);
  });

  test('locked PD and mono PD are parsed from engine events', () {
    final m = FaceMeasurements.fromJson(const {
      'pd': 62.4, 'monoPdRight': 31.5, 'monoPdLeft': 30.9, 'faceWidth': 136,
      'noseBridge': 17, 'frontToEar': 108, 'confidence': 1, 'locked': true,
    });
    expect(m.locked, isTrue);
    expect(m.isReliable, isTrue);
    expect(m.monoPdRight + m.monoPdLeft, closeTo(m.pd, 0.01));
  });

  test('FrameSpec json round-trips', () {
    expect(FrameSpec.fromJson(frame.toJson()), frame);
  });
}
