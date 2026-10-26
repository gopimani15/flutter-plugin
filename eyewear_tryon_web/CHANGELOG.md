## 0.1.2

* PD is now the distance PD a prescription states. Looking at the screen turns the eyes in, so the camera sees a near PD 2-3 mm smaller; the engine estimates the viewing distance from the iris and the camera's field of view and corrects for it (`cameraDiagonalFovDeg`, default 75; `eyeRotationMm`, default 11, 0 turns it off). Mono PDs too. Frames are still drawn at the PD the camera sees, and a manual PD is taken as a distance PD.

## 0.1.1

* Front photos: the temple arms seen through the lenses are cleared — taken out of clear lenses, painted over in the tint of tinted ones — so they no longer sit on the frame front. `FrameSpec.removePhotoTemples: false` keeps the photo as shot.
* `FrameSpec.showTemples: false` draws no temple arms (photo and measurements frames; a GLB's nodes named "temple" are hidden).

## 0.1.0

* Initial release: MediaPipe Face Landmarker + three.js engine with live camera and photo try-on, PD lock, front-photo and GLB frames.
