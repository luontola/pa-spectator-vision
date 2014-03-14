#!/bin/bash
set -eu
: ${1:? Usage: $0 VERSION}
VERSION="$1"
FILENAME="ObserverVision_v$VERSION.zip"
set -x

rm -rf dist/ObserverVision
mkdir -p dist
cp -r src dist/ObserverVision

cd dist
rm -f "$FILENAME"
zip -r "$FILENAME" ObserverVision
rm -rf ObserverVision
