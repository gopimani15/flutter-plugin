import 'package:flutter_test/flutter_test.dart';
import 'package:eyewear_tryon/eyewear_tryon.dart';

void main() {
  test('JSON catalog parses frames and skips incomplete ones', () {
    final frames = JsonFrameCatalog(Uri.parse('https://x')).parse({
      'frames': [
        {
          'id': 'EK-1', 'name': 'Classic Round', 'lensWidth': 52, 'bridgeWidth': 18,
          'lensHeight': 40, 'frameHeight': 45, 'templeLength': 145, 'totalWidth': 138,
          'frontImageUrl': 'https://cdn/x.png',
        },
        {'id': 'EK-2', 'name': 'No sizes yet'},
      ],
    });
    expect(frames, hasLength(1));
    expect(frames.single.renderSource, 'photo');
    expect(frames.single.sizeLabel, '52□18-145');
  });

  test('Shopify product with frame metafields maps to a FrameSpec', () {
    final f = ShopifyFrameMapper.map({
      'id': 'gid://shopify/Product/1', 'handle': 'classic-round', 'title': 'Classic Round',
      'priceRange': {'minVariantPrice': {'amount': '2499.0', 'currencyCode': 'INR'}},
      'metafields': [
        {'key': 'lens_width', 'value': '52'},
        {'key': 'bridge_width', 'value': '18'},
        {'key': 'lens_height', 'value': '40'},
        {'key': 'frame_height', 'value': '45'},
        {'key': 'temple_length', 'value': '145'},
        {'key': 'total_width', 'value': '138'},
        {'key': 'model_glb', 'value': 'gid://x', 'reference': {
          'sources': [{'url': 'https://cdn/a.usdz', 'format': 'usdz'}, {'url': 'https://cdn/a.glb', 'format': 'glb'}],
        }},
        null,
      ],
    })!;
    expect(f.id, 'classic-round');
    expect(f.framePd, 70);
    expect(f.modelUrl, 'https://cdn/a.glb');
    expect(f.renderSource, 'model');
    expect(f.price, '2499.0 INR');
  });

  test('rankByFit puts the best-fitting frame first', () {
    const face = FaceMeasurements(pd: 63, faceWidth: 136, noseBridgeWidth: 17, frontToEar: 108, confidence: 1);
    const good = FrameSpec(id: 'g', lensWidth: 52, bridgeWidth: 18, lensHeight: 40, templeLength: 145, totalWidth: 138);
    const wide = FrameSpec(id: 'w', lensWidth: 58, bridgeWidth: 20, lensHeight: 42, templeLength: 150, totalWidth: 152);
    expect(rankByFit([wide, good], face).first.$1.id, 'g');
  });
}
