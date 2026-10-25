import Flutter
import UIKit

public class GlassesTryOnPlugin: NSObject, FlutterPlugin {
  public static func register(with registrar: FlutterPluginRegistrar) {
    registrar.register(
      TryOnViewFactory(messenger: registrar.messenger()),
      withId: "eyewear_tryon/view")
  }
}

final class TryOnViewFactory: NSObject, FlutterPlatformViewFactory {
  private let messenger: FlutterBinaryMessenger
  init(messenger: FlutterBinaryMessenger) { self.messenger = messenger }

  func createArgsCodec() -> FlutterMessageCodec & NSObjectProtocol {
    FlutterStandardMessageCodec.sharedInstance()
  }

  func create(withFrame frame: CGRect, viewIdentifier viewId: Int64, arguments args: Any?)
    -> FlutterPlatformView
  {
    TryOnPlatformView(
      frame: frame, viewId: viewId, params: args as? [String: Any] ?? [:],
      messenger: messenger)
  }
}

/// Channel contract: eyewear_tryon_platform_interface/lib/src/method_channel.dart
///
/// TODO(next milestone): replace the placeholder with
///  1. ARSCNView + ARFaceTrackingConfiguration (TrueDepth: metric, no iris ruler).
///     PD = distance(leftEyeTransform, rightEyeTransform) of ARFaceAnchor.
///     Face width / nose / ear depth from ARFaceGeometry vertices.
///  2. Glasses SCNNode (GLB via GLTFSceneKit, or procedural from FrameSpec in mm
///     -> metres) parented to the face node; origin between the eyes,
///     vertexDistance in front, pantoscopic tilt.
///  3. Face occlusion: ARSCNFaceGeometry with colorBufferWriteMask = [].
///  4. Fallback on devices without TrueDepth: Vision/MediaPipe + iris ruler
///     (port of engine/src/geometry.js).
final class TryOnPlatformView: NSObject, FlutterPlatformView, FlutterStreamHandler {
  private let label = UILabel()
  private let methods: FlutterMethodChannel
  private let events: FlutterEventChannel
  private var sink: FlutterEventSink?
  private var frameJson: String?
  private var manualPd: Double = 0
  private var mirror = true

  init(frame: CGRect, viewId: Int64, params: [String: Any], messenger: FlutterBinaryMessenger) {
    methods = FlutterMethodChannel(name: "eyewear_tryon/view_\(viewId)", binaryMessenger: messenger)
    events = FlutterEventChannel(name: "eyewear_tryon/events_\(viewId)", binaryMessenger: messenger)
    frameJson = params["frame"] as? String
    super.init()
    label.frame = frame
    label.backgroundColor = .black
    label.textColor = .white
    label.textAlignment = .center
    label.numberOfLines = 0
    label.text = describe()
    events.setStreamHandler(self)
    methods.setMethodCallHandler { [weak self] call, result in
      self?.handle(call, result)
    }
  }

  func view() -> UIView { label }

  private func describe() -> String {
    guard let json = frameJson, let data = json.data(using: .utf8),
      let f = try? JSONSerialization.jsonObject(with: data) as? [String: Any]
    else { return "Glasses try-on (iOS)" }
    return "iOS renderer coming next\nFrame \(f["lensWidth"] ?? "?")-\(f["bridgeWidth"] ?? "?")-\(f["templeLength"] ?? "?")"
  }

  private func emit(_ obj: [String: Any]) {
    guard let sink, let data = try? JSONSerialization.data(withJSONObject: obj),
      let s = String(data: data, encoding: .utf8)
    else { return }
    sink(s)
  }

  private func handle(_ call: FlutterMethodCall, _ result: @escaping FlutterResult) {
    switch call.method {
    case "setFrame":
      frameJson = call.arguments as? String
      label.text = describe()
      emit(["type": "frameLoaded"])
      result(nil)
    case "setManualPd":
      manualPd = (call.arguments as? NSNumber)?.doubleValue ?? 0
      result(nil)
    case "remeasure", "setPhoto":
      result(nil)
    case "setMirror":
      mirror = call.arguments as? Bool ?? true
      result(nil)
    case "takeSnapshot":
      result(nil)
    case "dispose":
      methods.setMethodCallHandler(nil)
      events.setStreamHandler(nil)
      sink = nil
      result(nil)
    default:
      result(FlutterMethodNotImplemented)
    }
  }

  func onListen(withArguments arguments: Any?, eventSink events: @escaping FlutterEventSink)
    -> FlutterError?
  {
    sink = events
    emit(["type": "ready"])
    return nil
  }

  func onCancel(withArguments arguments: Any?) -> FlutterError? {
    sink = nil
    return nil
  }
}
