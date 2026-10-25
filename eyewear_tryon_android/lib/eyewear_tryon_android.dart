import 'package:eyewear_tryon_platform_interface/eyewear_tryon_platform_interface.dart';

/// Android uses the shared platform-view + MethodChannel implementation.
class GlassesTryOnAndroid extends MethodChannelGlassesTryOn {
  static void registerWith() {
    GlassesTryOnPlatform.instance = GlassesTryOnAndroid();
  }
}
