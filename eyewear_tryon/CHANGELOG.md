## 0.1.3

* `TryOnConfig.eyeRotationMm` and `TryOnConfig.cameraDiagonalFovDeg` (web) tune the distance-PD correction; `eyeRotationMm: 0` reports the near PD (eyewear_tryon_platform_interface 0.1.2). README: distance PD.

## 0.1.2

* Web: PD is now the distance PD a prescription states, not the near PD the camera sees while you look at the screen, which read 2-3 mm low (eyewear_tryon_web 0.1.2).

## 0.1.1

* Temple arms: `FrameSpec.showTemples` to draw the frame front only, and front photos now have the arms seen through their lenses cleared (`FrameSpec.removePhotoTemples`, on by default).

## 0.1.0

* Initial preview release.
* `GlassesTryOnView` and `GlassesTryOnController`: live camera and still-photo (`tryOnPhoto`) try-on.
* PD measured between vertical lines through the pupils, with monocular PD; locks once stable (`remeasure()` to reset).
* Frames from measurements, front product photos (background removed, scaled to total width) or GLB models, with automatic fallback.
* `FitReport` (width, bridge, temple, lens centring, lens height) and `SizeRecommendation`.
* Catalogs: `JsonFrameCatalog`, `ShopifyFrameMapper`, `rankByFit`.
* Web is fully supported; Android and iOS show a placeholder view in this release.
