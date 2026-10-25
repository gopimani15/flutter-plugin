# eyewear_tryon_platform_interface

A common platform interface for the [`eyewear_tryon`](https://pub.dev/packages/eyewear_tryon) plugin.

This package defines `FrameSpec`, `FaceMeasurements`, `TryOnConfig`, the try-on events and `GlassesTryOnPlatform`, plus the method-channel implementation used on Android and iOS.

## Usage

To implement a new platform, extend `GlassesTryOnPlatform` and set `GlassesTryOnPlatform.instance` in your `registerWith`.

Prefer non-breaking changes (such as adding a method) over breaking changes to this interface. See https://flutter.dev/go/platform-interface-breaking-changes.
