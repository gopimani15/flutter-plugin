#!/usr/bin/env bash
# Dry-runs (default) or publishes every package in dependency order.
#   tool/publish.sh            # validate all packages, publish nothing
#   tool/publish.sh --publish  # publish for real (asks for confirmation per package)
set -euo pipefail
cd "$(dirname "$0")/.."

ORDER=(
  eyewear_tryon_platform_interface
  eyewear_tryon_web
  eyewear_tryon_android
  eyewear_tryon_ios
  eyewear_tryon
)

if [[ "${1:-}" == "--publish" ]]; then
  echo "Publishing is permanent: a version can't be deleted from pub.dev."
  echo "Make sure the engine bundle is current: (cd engine && npm ci && npm test && npm run build)"
  for pkg in "${ORDER[@]}"; do
    echo; echo "=== $pkg ==="
    # Publish against pub.dev versions, not the local overrides.
    (cd "$pkg" && { [[ -f pubspec_overrides.yaml ]] && mv pubspec_overrides.yaml /tmp/"$pkg".overrides || true; } \
       && trap '[[ -f /tmp/'"$pkg"'.overrides ]] && mv /tmp/'"$pkg"'.overrides pubspec_overrides.yaml' EXIT \
       && flutter pub get && flutter pub publish)
    # pub.dev needs a moment before dependents can resolve the new version.
    sleep 30
  done
else
  for pkg in "${ORDER[@]}"; do
    echo; echo "=== $pkg (dry run) ==="
    # Dependents resolve siblings via pubspec_overrides.yaml until they're on
    # pub.dev, so pub reports a warning about the overrides: that one is expected.
    (cd "$pkg" && flutter pub get >/dev/null && flutter pub publish --dry-run) || true
  done
fi
