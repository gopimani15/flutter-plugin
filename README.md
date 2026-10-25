# eyewear_tryon (monorepo)

Source for the [`eyewear_tryon`](eyewear_tryon/) Flutter plugin: virtual glasses try-on with real-world sizing, PD measurement and fit scoring. See [eyewear_tryon/README.md](eyewear_tryon/README.md) for usage.

| Package | What it is |
|---|---|
| [`eyewear_tryon`](eyewear_tryon/) | App-facing API: `GlassesTryOnView`, controller, `FitReport`, catalogs |
| [`eyewear_tryon_platform_interface`](eyewear_tryon_platform_interface/) | `FrameSpec`, `FaceMeasurements`, events, method-channel implementation |
| [`eyewear_tryon_web`](eyewear_tryon_web/) | Web implementation: Dart ⇄ JS bridge + bundled engine (`assets/tryon.js`) |
| [`eyewear_tryon_android`](eyewear_tryon_android/) | Android implementation (preview: placeholder view) |
| [`eyewear_tryon_ios`](eyewear_tryon_ios/) | iOS implementation (preview: placeholder view) |
| [`engine/`](engine/) | JS engine source (MediaPipe + three.js), Node tests, `demo.html` |

## Development

Run `tool/dev_setup.sh` once after cloning. It writes a `pubspec_overrides.yaml` in each package that points sibling dependencies at this repo, so local changes are picked up without publishing. Those files are not tracked by git and are never published.

```bash
# engine
cd engine && npm install && npm test && npm run build   # rebuilds eyewear_tryon_web/assets/tryon.js

# Dart packages
cd eyewear_tryon && flutter pub get && flutter analyze && flutter test

# example (web)
cd eyewear_tryon/example && flutter create --platforms=web,android,ios . && flutter run -d chrome
```

## Publishing

Packages depend on each other through pub.dev, so publish in this order and bump versions together:

1. `eyewear_tryon_platform_interface`
2. `eyewear_tryon_web`, `eyewear_tryon_android`, `eyewear_tryon_ios`
3. `eyewear_tryon`

`tool/publish.sh` runs a dry run for every package in that order; `tool/publish.sh --publish` publishes them, answering pub's confirmation for each. If it stops part-way, resume with `tool/publish.sh --publish --from <package>`.
