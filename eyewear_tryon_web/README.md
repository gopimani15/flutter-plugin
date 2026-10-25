# eyewear_tryon_web

The web implementation of [`eyewear_tryon`](https://pub.dev/packages/eyewear_tryon).

It runs MediaPipe Face Landmarker (WebAssembly) and three.js in an `HtmlElementView`, for live camera and still-photo try-on.

## Usage

This package is [endorsed](https://flutter.dev/to/endorsed-federated-plugin): add `eyewear_tryon` to your app and it is included automatically on web.

By default the MediaPipe WebAssembly files and the face model load from public CDNs. For production, self-host them and set `TryOnConfig(webWasmBaseUrl: ..., webModelAssetUrl: ...)`.

Third-party licenses for the bundled engine are in `THIRD_PARTY_NOTICES.md`.
