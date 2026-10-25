import 'package:eyewear_tryon_platform_interface/eyewear_tryon_platform_interface.dart';

/// iOS uses the shared platform-view + MethodChannel implementation.
class GlassesTryOnIOS extends MethodChannelGlassesTryOn {
  static void registerWith() {
    GlassesTryOnPlatform.instance = GlassesTryOnIOS();
  }
}
