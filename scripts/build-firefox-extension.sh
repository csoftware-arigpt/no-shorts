#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
SHARED_DIR="$ROOT_DIR/Shared (Extension)/Resources"
FIREFOX_DIR="$ROOT_DIR/Firefox (Extension)"
DIST_ROOT="$ROOT_DIR/dist"
DIST_DIR="$DIST_ROOT/firefox"
PACKAGE="$DIST_ROOT/no-shorts-no-reels-firefox.zip"

mkdir -p "$DIST_DIR"
cp -R "$SHARED_DIR"/. "$DIST_DIR"/
cp "$FIREFOX_DIR/manifest.json" "$DIST_DIR/manifest.json"

printf '%s\n' "Built unpacked Firefox extension: $DIST_DIR"

if command -v zip >/dev/null 2>&1; then
    (cd "$DIST_DIR" && zip -qr "$PACKAGE" .)
    printf '%s\n' "Packaged Firefox extension: $PACKAGE"
else
    printf '%s\n' "zip not found; skipped packaged .zip output."
fi
