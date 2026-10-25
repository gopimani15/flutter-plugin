# eyewear_tryon

Virtual glasses try-on for Flutter. Frames are drawn at **real-world size** from their measurements (52□18-145 style sizes), a 3D model or a front product photo. The user's **PD** is measured and locked, and every frame gets a **fit score** for their face.

> **Preview release.** Web is fully working (live camera and photo try-on). On **Android and iOS this version shows a placeholder view**: the API, channels and fit logic work, but the camera renderers are still being built. Don't ship mobile try-on on 0.1.x.

| Platform | Status |
|---|---|
| Web | ✅ Live camera + photo try-on (MediaPipe Face Landmarker + three.js) |
| Android | 🚧 Preview: placeholder view (CameraX + MediaPipe + Filament in progress) |
| iOS | 🚧 Preview: placeholder view (ARKit + SceneKit in progress) |

## Install

```bash
flutter pub add eyewear_tryon
```

Web needs HTTPS (or `localhost`) for camera access. Nothing needs adding to `index.html`; the plugin loads its engine itself.

## How the measurements are used

| Frame field | Used for |
|---|---|
| Lens width **A** | Lens shape width; frame PD = A + DBL |
| Bridge **DBL** | Gap between the lenses; compared with the nose bridge → bridge fit |
| Lens height **B** | Lens shape height; progressive fitting height = B/2 + 2 mm |
| Frame height | Rim thickness = (frame height − B)/2 |
| Temple length | Length of the temple arms; compared with nose-to-ear depth → temple fit |
| Total front width | Endpieces / hinge position; compared with face width → width fit |
| PD (customer) | Estimated with the iris ruler, or entered from a prescription; also sets the metric scale |
| 3D model | Optional GLB; otherwise a procedural frame is built from the numbers above |

**PD.** PD is measured the way an optician does it: the horizontal distance between the vertical lines through each pupil centre. "Horizontal" comes from the face outline (ear to ear, perpendicular to the face midline), not from the pupil line, so a slightly higher eye doesn't inflate it. Monocular PD (each pupil to the nose-bridge centre) is reported too.

A person's PD doesn't change, so once 45 frontal samples agree (spread ≤ 0.6 mm) the engine **locks** PD and the other face measurements. They then stay fixed while the user moves or switches frames. Save the locked `pd` per user and pass it back as `TryOnConfig(manualPdMm: savedPd)` next time. `controller.remeasure()` unlocks them, e.g. for a different person.

**Metric scale.** On web and Android the scale comes from the iris (visible iris ≈ 11.7 mm, so mm/px = 11.7 / iris px). The engine then locks onto the median PD for a stable render scale. A manual PD (`setManualPd`) overrides both and is the most accurate option.

**Placement.** The bridge centre of the frame sits at the midpoint between the pupils. It is pushed forward by the vertex distance (12 mm), dropped 2 mm so the pupils sit slightly above the lens centre, and tilted 8° pantoscopic. A depth-only head ellipsoid hides the temples behind the head.

## Usage

```dart
final controller = GlassesTryOnController();

GlassesTryOnView(
  controller: controller,
  initialFrame: const FrameSpec(
    id: 'sample', lensWidth: 52, bridgeWidth: 18, lensHeight: 40,
    frameHeight: 45, templeLength: 145, totalWidth: 138,
    // modelUrl: 'https://…/frame.glb',  // optional; origin at bridge, +Z forward
  ),
);

controller.addListener(() {
  final m = controller.measurements; // pd, faceWidth, noseBridgeWidth, frontToEar
  final fit = controller.fit;        // width / bridge / temple / centring / lens height + score
});

await controller.setFrame(otherFrame);
await controller.setManualPd(63);   // from a prescription
await controller.tryOnPhoto(bytes); // still photo instead of the camera
final jpeg = await controller.takeSnapshot();

// Rank a catalogue for the current face:
catalog.where((f) => controller.fitFor(f)!.isGoodFit);
SizeRecommendation.forFace(m).matches(frame);
```

## Real frames (catalog)

Each frame renders from the best asset it has: **3D model** (`modelUrl`, GLB) → **front photo** (`frontImageUrl`) → **measurements only**. If an asset fails to load, it falls back to the next one, and `TryOnFrameLoaded.source` reports what was actually drawn.

Front photos: use a transparent PNG, or a plain white background, which is removed automatically (clear lenses become see-through too). The photo is cropped to the frame and its width is mapped to `totalWidth`. Set `removeBackground: false` for white frames, and `frontImageLensCenterY` if the lens centre isn't at mid-height.

```dart
// Your API (JSON format documented on JsonFrameCatalog; use `mapper` for other field names)
final frames = await JsonFrameCatalog(Uri.parse('https://api.example.com/frames')).load();

// Or Shopify: measurements as `frame.*` product metafields, GLB / photo as file metafields
final frames = await ShopifyFrameMapper.catalog(
  shopDomain: 'yourstore.myshopify.com', storefrontToken: '…').load();

// Best fit first for the measured face
final ranked = rankByFit(frames, controller.measurements!);
```

On Flutter web, the API, GLB and image hosts must allow CORS for your app's origin.

**No camera?** Start with `TryOnConfig(useCamera: false)`, or call `controller.tryOnPhoto(bytes)` when `controller.error?.isPermissionDenied` is true. Photos are turned upright and resized before detection; `TryOnFaceLost.noFaceInPhoto` tells you when a photo has no usable face.

## Run the example (web)

```bash
cd example
flutter create --platforms=web,android,ios .   # generates runner folders only
flutter run -d chrome
```

The camera needs `localhost` or HTTPS.

For production, self-host the MediaPipe files and pass their locations through `TryOnConfig(webWasmBaseUrl: …, webModelAssetUrl: …)`:
- the `wasm/` folder from `@mediapipe/tasks-vision@1.1.1`
- `face_landmarker.task`

## Engine source

The web engine (`assets/tryon.js` in `eyewear_tryon_web`) is built from the `engine/` folder of the [repository](https://github.com/gopimani15/flutter-plugin), which also has its tests and a standalone demo page.

## GLB model convention

- Origin at the bridge centre on the front plane
- +X is the wearer's left, +Y is up, +Z is forward; temples run toward −Z
- Units: `mm`, `cm` or `m` via `modelUnits`. The default `auto` scales the model so its width equals `totalWidth`.

## Accuracy

Camera estimates are typically within ±1–2 mm for PD. Use them for try-on and size recommendations, not for dispensing prescription lenses without validation. The fit tolerance bands in `FitTolerances` are starting points; tune them with an optician or with returns data.

## Requirements

- Flutter 3.22+ (Dart 3.4+)
- iOS (when the ARKit renderer lands): add `NSCameraUsageDescription` to the app's Info.plist
- Android: `CAMERA` permission is declared by the plugin. The CameraX/Filament renderer will need Hybrid Composition (`PlatformViewLink`).

## License

MIT. The web implementation bundles three.js (MIT) and MediaPipe Tasks Vision (Apache-2.0); see `eyewear_tryon_web/THIRD_PARTY_NOTICES.md`.
