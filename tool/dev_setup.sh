#!/usr/bin/env bash
# Writes untracked pubspec_overrides.yaml files so packages in this repo use
# each other locally instead of the versions on pub.dev.
set -euo pipefail
cd "$(dirname "$0")/.."
write() { # dir, then "name=path" pairs
  local dir=$1; shift
  { echo "# Local development only (untracked, not published)."; echo "dependency_overrides:"
    for kv in "$@"; do echo "  ${kv%%=*}:"; echo "    path: ${kv#*=}"; done; } > "$dir/pubspec_overrides.yaml"
  echo "wrote $dir/pubspec_overrides.yaml"
}
PI=eyewear_tryon_platform_interface
for p in eyewear_tryon_web eyewear_tryon_android eyewear_tryon_ios; do write "$p" "$PI=../$PI"; done
write eyewear_tryon "$PI=../$PI" eyewear_tryon_android=../eyewear_tryon_android \
  eyewear_tryon_ios=../eyewear_tryon_ios eyewear_tryon_web=../eyewear_tryon_web
write eyewear_tryon/example eyewear_tryon=.. "$PI=../../$PI" eyewear_tryon_android=../../eyewear_tryon_android \
  eyewear_tryon_ios=../../eyewear_tryon_ios eyewear_tryon_web=../../eyewear_tryon_web
