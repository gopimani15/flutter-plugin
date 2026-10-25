import 'dart:convert';

import 'package:eyewear_tryon_platform_interface/eyewear_tryon_platform_interface.dart';
import 'package:http/http.dart' as http;

import 'fit.dart';

/// Where frames come from: your backend, Shopify, a bundled JSON file…
abstract interface class FrameCatalogSource {
  Future<List<FrameSpec>> load();
}

/// A fixed list (bundled frames, tests).
class StaticFrameCatalog implements FrameCatalogSource {
  const StaticFrameCatalog(this.frames);
  final List<FrameSpec> frames;

  @override
  Future<List<FrameSpec>> load() async => frames;
}

/// Loads frames from a JSON endpoint.
///
/// Default format (one object per frame, sizes in mm):
/// ```json
/// {"frames": [{
///   "id": "EK-1021", "name": "Classic Round",
///   "lensWidth": 52, "bridgeWidth": 18, "lensHeight": 40, "frameHeight": 45,
///   "templeLength": 145, "totalWidth": 138,
///   "modelUrl": "https://cdn.example.com/frames/EK-1021.glb",
///   "frontImageUrl": "https://cdn.example.com/frames/EK-1021-front.png",
///   "thumbnailUrl": "...", "productUrl": "...", "price": "₹2,499"
/// }]}
/// ```
/// Use [mapper] when your API uses other field names.
///
/// Web: the API, GLB and image hosts must send CORS headers
/// (`Access-Control-Allow-Origin`) for your app's origin.
class JsonFrameCatalog implements FrameCatalogSource {
  JsonFrameCatalog(
    this.uri, {
    this.headers = const {},
    this.mapper,
    this.listKey = 'frames',
    http.Client? client,
  }) : _client = client ?? http.Client();

  final Uri uri;
  final Map<String, String> headers;

  /// Converts one raw item to a FrameSpec, or null to skip it.
  final FrameSpec? Function(Map<String, Object?> item)? mapper;

  /// Key holding the list; ignored when the response is a bare list.
  final String listKey;
  final http.Client _client;

  @override
  Future<List<FrameSpec>> load() async {
    final res = await _client.get(uri, headers: headers);
    if (res.statusCode != 200) {
      throw http.ClientException('Catalog request failed (${res.statusCode})', uri);
    }
    return parse(jsonDecode(utf8.decode(res.bodyBytes)));
  }

  /// Parses a decoded response; frames missing a measurement are skipped.
  List<FrameSpec> parse(Object? body) {
    final raw = body is List ? body : (body as Map)[listKey] as List? ?? const [];
    final out = <FrameSpec>[];
    for (final item in raw) {
      final map = (item as Map).cast<String, Object?>();
      try {
        final spec = mapper != null ? mapper!(map) : FrameSpec.fromJson(map);
        if (spec != null) out.add(spec);
      } catch (_) {
        // Incomplete product (e.g. no measurements yet): leave it out.
      }
    }
    return out;
  }
}

/// Maps Shopify Storefront API products to frames.
///
/// Store the measurements as product metafields in the `frame` namespace
/// (number_decimal): lens_width, bridge_width, lens_height, frame_height,
/// temple_length, total_width. Optional file/url metafields: model_glb,
/// front_image. Query them with [query].
class ShopifyFrameMapper {
  static const query = r'''
query Frames($first: Int!) {
  products(first: $first, query: "product_type:Eyeglasses") {
    nodes {
      id handle title onlineStoreUrl
      featuredImage { url }
      priceRange { minVariantPrice { amount currencyCode } }
      metafields(identifiers: [
        {namespace: "frame", key: "lens_width"},
        {namespace: "frame", key: "bridge_width"},
        {namespace: "frame", key: "lens_height"},
        {namespace: "frame", key: "frame_height"},
        {namespace: "frame", key: "temple_length"},
        {namespace: "frame", key: "total_width"},
        {namespace: "frame", key: "model_glb"},
        {namespace: "frame", key: "front_image"}
      ]) {
        key value
        reference {
          ... on GenericFile { url }
          ... on Model3d { sources { url format } }
          ... on MediaImage { image { url } }
        }
      }
    }
  }
}''';

  /// Builds a [JsonFrameCatalog] against the Storefront GraphQL endpoint.
  static FrameCatalogSource catalog({
    required String shopDomain,
    required String storefrontToken,
    String apiVersion = '2025-07',
    int first = 100,
  }) =>
      _ShopifyCatalog(shopDomain, storefrontToken, apiVersion, first);

  static FrameSpec? map(Map<String, Object?> p) {
    final fields = <String, Map<String, Object?>>{};
    for (final m in (p['metafields'] as List? ?? const [])) {
      if (m is Map) fields[m['key'] as String] = m.cast<String, Object?>();
    }
    double? num_(String k) => double.tryParse('${fields[k]?['value'] ?? ''}');
    String? url(String k) {
      final f = fields[k];
      if (f == null) return null;
      final ref = f['reference'];
      if (ref is Map) {
        if (ref['url'] is String) return ref['url'] as String;
        final sources = ref['sources'];
        if (sources is List) {
          final glb = sources.cast<Map>().where((s) => s['format'] == 'glb');
          if (glb.isNotEmpty) return glb.first['url'] as String;
        }
        final img = ref['image'];
        if (img is Map) return img['url'] as String?;
      }
      final v = f['value'];
      return v is String && v.startsWith('http') ? v : null;
    }

    final a = num_('lens_width'), dbl = num_('bridge_width'), b = num_('lens_height');
    final t = num_('temple_length'), w = num_('total_width');
    if (a == null || dbl == null || b == null || t == null || w == null) return null;
    final price = (p['priceRange'] as Map?)?['minVariantPrice'] as Map?;
    return FrameSpec(
      id: p['handle'] as String? ?? p['id'] as String,
      name: p['title'] as String?,
      lensWidth: a,
      bridgeWidth: dbl,
      lensHeight: b,
      frameHeight: num_('frame_height'),
      templeLength: t,
      totalWidth: w,
      modelUrl: url('model_glb'),
      frontImageUrl: url('front_image'),
      thumbnailUrl: (p['featuredImage'] as Map?)?['url'] as String?,
      productUrl: p['onlineStoreUrl'] as String?,
      price: price == null ? null : '${price['amount']} ${price['currencyCode']}',
    );
  }
}

class _ShopifyCatalog implements FrameCatalogSource {
  _ShopifyCatalog(this.domain, this.token, this.version, this.first);
  final String domain, token, version;
  final int first;

  @override
  Future<List<FrameSpec>> load() async {
    final uri = Uri.https(domain, '/api/$version/graphql.json');
    final res = await http.post(
      uri,
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: jsonEncode({
        'query': ShopifyFrameMapper.query,
        'variables': {'first': first},
      }),
    );
    if (res.statusCode != 200) {
      throw http.ClientException('Shopify request failed (${res.statusCode})', uri);
    }
    final nodes = (((jsonDecode(res.body) as Map)['data'] as Map?)?['products'] as Map?)?['nodes'];
    return [
      for (final n in (nodes as List? ?? const []))
        if (ShopifyFrameMapper.map((n as Map).cast<String, Object?>()) case final f?) f,
    ];
  }
}

/// Sorts frames best-fit first for a measured face.
List<(FrameSpec, FitReport)> rankByFit(
  Iterable<FrameSpec> frames,
  FaceMeasurements face, {
  FitTolerances tolerances = const FitTolerances(),
  bool progressive = false,
}) {
  final scored = [
    for (final f in frames)
      (f, FitReport.evaluate(f, face, tolerances: tolerances, progressive: progressive)),
  ];
  scored.sort((x, y) => y.$2.score.compareTo(x.$2.score));
  return scored;
}
