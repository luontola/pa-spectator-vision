#!/bin/bash
set -eu
: ${1:? Usage: $0 VERSION}
VERSION="$1"
FILENAME="SpectatorVision_v$VERSION.zip"
set -x

rm -rf dist/SpectatorVision
mkdir -p dist
cp -r src dist/SpectatorVision

cd dist
rm -f "$FILENAME"
zip -r "$FILENAME" SpectatorVision
rm -rf SpectatorVision
