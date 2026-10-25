package dev.eyeweartryon.android

import android.content.Context
import android.graphics.Color
import android.view.Gravity
import android.view.View
import android.widget.TextView
import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.plugin.common.BinaryMessenger
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.StandardMessageCodec
import io.flutter.plugin.platform.PlatformView
import io.flutter.plugin.platform.PlatformViewFactory
import org.json.JSONObject

class GlassesTryOnPlugin : FlutterPlugin {
    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        binding.platformViewRegistry.registerViewFactory(
            "eyewear_tryon/view",
            TryOnViewFactory(binding.binaryMessenger),
        )
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {}
}

private class TryOnViewFactory(private val messenger: BinaryMessenger) :
    PlatformViewFactory(StandardMessageCodec.INSTANCE) {
    override fun create(context: Context, viewId: Int, args: Any?): PlatformView {
        @Suppress("UNCHECKED_CAST")
        val params = args as? Map<String, Any?> ?: emptyMap()
        return TryOnPlatformView(context, messenger, viewId, params)
    }
}

/**
 * Channel contract is in eyewear_tryon_platform_interface/lib/src/method_channel.dart.
 *
 * TODO(next milestone): replace the placeholder with the real pipeline:
 *  1. CameraX front camera -> ImageAnalysis (RGBA_8888) + PreviewView.
 *  2. MediaPipe FaceLandmarker (RunningMode.LIVE_STREAM, 478 landmarks).
 *  3. Port engine/src/geometry.js (same landmark indices, iris ruler,
 *     MeasurementAggregator, OneEuro) -> emit "measurements" events.
 *  4. Filament SurfaceView overlay with an orthographic camera over the
 *     preview; glasses from gltfio (GLB) or a procedural mesh from FrameSpec.
 */
private class TryOnPlatformView(
    context: Context,
    messenger: BinaryMessenger,
    id: Int,
    params: Map<String, Any?>,
) : PlatformView, MethodChannel.MethodCallHandler, EventChannel.StreamHandler {

    private val methods = MethodChannel(messenger, "eyewear_tryon/view_$id")
    private val events = EventChannel(messenger, "eyewear_tryon/events_$id")
    private var sink: EventChannel.EventSink? = null
    private var frameJson: String? = params["frame"] as? String
    private var manualPd = 0.0
    private var mirror = true

    private val placeholder = TextView(context).apply {
        setBackgroundColor(Color.BLACK)
        setTextColor(Color.WHITE)
        gravity = Gravity.CENTER
        text = describe()
    }

    init {
        methods.setMethodCallHandler(this)
        events.setStreamHandler(this)
    }

    private fun describe(): String {
        val f = frameJson?.let { JSONObject(it) } ?: return "Glasses try-on (Android)"
        return "Android renderer coming next\n" +
            "Frame ${f.optDouble("lensWidth")}-${f.optDouble("bridgeWidth")}-${f.optDouble("templeLength")}"
    }

    private fun emit(json: JSONObject) = sink?.success(json.toString())

    override fun getView(): View = placeholder

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "setFrame" -> {
                frameJson = call.arguments as? String
                placeholder.text = describe()
                emit(JSONObject().put("type", "frameLoaded"))
                result.success(null)
            }
            "setManualPd" -> {
                manualPd = (call.arguments as? Number)?.toDouble() ?: 0.0
                result.success(null)
            }
            "remeasure", "setPhoto" -> result.success(null)
            "setMirror" -> {
                mirror = call.arguments as? Boolean ?: true
                result.success(null)
            }
            "takeSnapshot" -> result.success(null)
            "dispose" -> {
                dispose()
                result.success(null)
            }
            else -> result.notImplemented()
        }
    }

    override fun onListen(arguments: Any?, events: EventChannel.EventSink) {
        sink = events
        emit(JSONObject().put("type", "ready"))
    }

    override fun onCancel(arguments: Any?) {
        sink = null
    }

    override fun dispose() {
        methods.setMethodCallHandler(null)
        // Keep the stream handler so Dart's late cancel() still finds it.
        sink = null
    }
}
