import 'package:flutter/material.dart';
import 'package:eyewear_tryon/eyewear_tryon.dart';

void main() => runApp(const TryOnDemoApp());

const frames = <FrameSpec>[
  // The sample from the measurement sheet: 52□18-145, 138 mm front.
  FrameSpec(
    id: 'classic-round',
    name: 'Classic Round',
    lensWidth: 52,
    bridgeWidth: 18,
    lensHeight: 40,
    frameHeight: 45,
    templeLength: 145,
    totalWidth: 138,
    shape: LensShape.round,
    frameColor: '#b08d57',
    metallic: true,
  ),
  FrameSpec(
    id: 'bold-rect',
    name: 'Bold Rectangle',
    lensWidth: 54,
    bridgeWidth: 17,
    lensHeight: 38,
    frameHeight: 44,
    templeLength: 145,
    totalWidth: 142,
    shape: LensShape.rect,
    frameColor: '#111111',
  ),
  FrameSpec(
    id: 'petite-cateye',
    name: 'Petite Cat-eye',
    lensWidth: 49,
    bridgeWidth: 17,
    lensHeight: 36,
    frameHeight: 41,
    templeLength: 140,
    totalWidth: 130,
    shape: LensShape.cateye,
    frameColor: '#7a1f3d',
  ),
];

class TryOnDemoApp extends StatelessWidget {
  const TryOnDemoApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        title: 'Glasses Try-On',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(colorSchemeSeed: const Color(0xFF2F5D62), useMaterial3: true),
        home: const TryOnPage(),
      );
}

class TryOnPage extends StatefulWidget {
  const TryOnPage({super.key});

  @override
  State<TryOnPage> createState() => _TryOnPageState();
}

class _TryOnPageState extends State<TryOnPage> {
  final controller = GlassesTryOnController();
  final pdField = TextEditingController();

  @override
  void dispose() {
    controller.dispose();
    pdField.dispose();
    super.dispose();
  }

  Future<void> _snapshot() async {
    final bytes = await controller.takeSnapshot();
    if (!mounted || bytes == null) return;
    showDialog<void>(
      context: context,
      builder: (_) => Dialog(child: Image.memory(bytes, fit: BoxFit.contain)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final view = ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: Stack(fit: StackFit.expand, children: [
        GlassesTryOnView(
          controller: controller,
          initialFrame: frames.first,
          config: const TryOnConfig(debug: false),
        ),
        Positioned(
          left: 12,
          right: 12,
          top: 12,
          child: ListenableBuilder(
            listenable: controller,
            builder: (_, __) => _StatusBanner(controller: controller),
          ),
        ),
        Positioned(
          right: 12,
          bottom: 12,
          child: FloatingActionButton.small(
            onPressed: _snapshot,
            tooltip: 'Snapshot',
            child: const Icon(Icons.photo_camera),
          ),
        ),
      ]),
    );

    final panel = ListenableBuilder(
      listenable: controller,
      builder: (_, __) => _Panel(controller: controller, pdField: pdField),
    );

    return Scaffold(
      appBar: AppBar(title: const Text('Glasses Try-On')),
      body: LayoutBuilder(builder: (context, c) {
        if (c.maxWidth >= 900) {
          return Padding(
            padding: const EdgeInsets.all(16),
            child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Expanded(child: view),
              const SizedBox(width: 16),
              SizedBox(width: 360, child: panel),
            ]),
          );
        }
        return Column(children: [
          Expanded(flex: 3, child: Padding(padding: const EdgeInsets.all(12), child: view)),
          Expanded(flex: 2, child: panel),
        ]);
      }),
    );
  }
}

class _StatusBanner extends StatelessWidget {
  const _StatusBanner({required this.controller});
  final GlassesTryOnController controller;

  @override
  Widget build(BuildContext context) {
    final (String? text, Color color) = switch (controller.status) {
      TryOnStatus.starting => ('Starting camera…', Colors.black54),
      TryOnStatus.ready => ('Look straight at the camera', Colors.black54),
      TryOnStatus.noFace => ('No face detected', Colors.orange.shade800),
      TryOnStatus.error => (
          controller.error?.isPermissionDenied == true
              ? 'Camera permission denied. Allow camera access and reload.'
              : 'Error: ${controller.error?.message}',
          Colors.red.shade700
        ),
      TryOnStatus.tracking => (
          (controller.measurements?.locked ?? false)
              ? null
              : 'Measuring PD… look straight at the camera',
          Colors.black54
        ),
    };
    if (text == null) return const SizedBox.shrink();
    return Align(
      alignment: Alignment.topCenter,
      child: DecoratedBox(
        decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(20)),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
          child: Text(text, style: const TextStyle(color: Colors.white)),
        ),
      ),
    );
  }
}

class _Panel extends StatelessWidget {
  const _Panel({required this.controller, required this.pdField});
  final GlassesTryOnController controller;
  final TextEditingController pdField;

  String _mm(double? v) => v == null || v.isNaN ? '—' : '${v.toStringAsFixed(1)} mm';

  @override
  Widget build(BuildContext context) {
    final t = Theme.of(context).textTheme;
    final m = controller.measurements;
    final fit = controller.fit;
    final current = controller.frame ?? frames.first;

    return ListView(padding: const EdgeInsets.all(16), children: [
      Text('Frames', style: t.titleMedium),
      const SizedBox(height: 8),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final f in frames)
          ChoiceChip(
            label: Text('${f.name}  ${f.sizeLabel}'),
            selected: f.id == current.id,
            onSelected: (_) => controller.setFrame(f),
          ),
      ]),
      const SizedBox(height: 12),
      _Table(rows: [
        ('Lens width (A)', _mm(current.lensWidth)),
        ('Bridge (DBL)', _mm(current.bridgeWidth)),
        ('Lens height (B)', _mm(current.lensHeight)),
        ('Frame height', _mm(current.frameHeight)),
        ('Temple length', _mm(current.templeLength)),
        ('Total front width', _mm(current.totalWidth)),
        ('Frame PD (A+DBL)', _mm(current.framePd)),
      ]),
      const Divider(height: 32),
      Row(children: [
        Text('Your face', style: t.titleMedium),
        const Spacer(),
        if (m != null && m.locked)
          const Chip(
            avatar: Icon(Icons.lock, size: 16),
            label: Text('Locked'),
            visualDensity: VisualDensity.compact,
          )
        else if (m != null)
          Text('${(m.confidence * 100).round()}%', style: t.labelMedium),
        IconButton(
          tooltip: 'Re-measure',
          icon: const Icon(Icons.refresh),
          onPressed: controller.remeasure,
        ),
      ]),
      const SizedBox(height: 6),
      LinearProgressIndicator(value: m?.confidence ?? 0),
      const SizedBox(height: 8),
      _Table(rows: [
        ('Pupillary distance${m?.pdSource == PdSource.manual ? ' (manual)' : ''}', _mm(m?.pd)),
        ('  Right eye (mono PD)', _mm(m?.monoPdRight)),
        ('  Left eye (mono PD)', _mm(m?.monoPdLeft)),
        ('Face width', _mm(m?.faceWidth)),
        ('Nose bridge', _mm(m?.noseBridgeWidth)),
        ('Front to ear', _mm(m?.frontToEar)),
      ]),
      const SizedBox(height: 8),
      Row(children: [
        Expanded(
          child: TextField(
            controller: pdField,
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            decoration: const InputDecoration(
              labelText: 'PD from prescription (optional)',
              suffixText: 'mm',
              isDense: true,
            ),
          ),
        ),
        const SizedBox(width: 8),
        FilledButton.tonal(
          onPressed: () => controller.setManualPd(double.tryParse(pdField.text)),
          child: const Text('Apply'),
        ),
      ]),
      SwitchListTile(
        contentPadding: EdgeInsets.zero,
        title: const Text('Progressive lenses'),
        value: controller.progressive,
        onChanged: (v) => controller.progressive = v,
      ),
      const Divider(height: 24),
      Row(children: [
        Text('Fit', style: t.titleMedium),
        const Spacer(),
        if (fit != null) Text('${fit.score}/100', style: t.titleMedium),
      ]),
      const SizedBox(height: 8),
      if (fit == null)
        const Text('Waiting for measurements…')
      else ...[
        Text(fit.summary, style: t.bodyMedium?.copyWith(fontWeight: FontWeight.w600)),
        const SizedBox(height: 8),
        for (final c in fit.checks) _FitRow(check: c),
        const SizedBox(height: 4),
        Text(
          'Decentration ${fit.decentrationPerEye.toStringAsFixed(1)} mm/eye · '
          'fitting height ${fit.fittingHeight.toStringAsFixed(0)} mm',
          style: t.bodySmall,
        ),
      ],
      const SizedBox(height: 12),
      Text(
        'Estimates from the camera are typically within ±1–2 mm. '
        'Use a prescription PD for best accuracy.',
        style: t.bodySmall?.copyWith(color: Theme.of(context).colorScheme.outline),
      ),
    ]);
  }
}

class _Table extends StatelessWidget {
  const _Table({required this.rows});
  final List<(String, String)> rows;

  @override
  Widget build(BuildContext context) => Column(children: [
        for (final (k, v) in rows)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 3),
            child: Row(children: [Expanded(child: Text(k)), Text(v)]),
          ),
      ]);
}

class _FitRow extends StatelessWidget {
  const _FitRow({required this.check});
  final FitCheck check;

  @override
  Widget build(BuildContext context) {
    final (IconData icon, Color color) = switch (check.level) {
      FitLevel.good => (Icons.check_circle, Colors.green.shade600),
      FitLevel.unknown => (Icons.help_outline, Colors.grey),
      _ => (Icons.warning_amber_rounded, Colors.orange.shade800),
    };
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3),
      child: Row(children: [
        Icon(icon, color: color, size: 18),
        const SizedBox(width: 8),
        Expanded(child: Text(check.label)),
        Text(check.message, style: TextStyle(color: color)),
      ]),
    );
  }
}
