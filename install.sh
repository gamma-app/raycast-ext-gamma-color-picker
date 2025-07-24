#!/bin/bash

set -e

GIST_URL="https://gist.githubusercontent.com/USER/GIST_ID/raw/gamma-color-picker.tar.gz"
RAYCAST_EXTENSIONS_DIR="$HOME/.config/raycast/extensions"
TEMP_DIR=$(mktemp -d)
EXTENSION_NAME="gamma-color-picker"

echo "Installing Gamma Color Picker extension..."

if [ ! -d "$RAYCAST_EXTENSIONS_DIR" ]; then
    echo "Raycast extensions directory not found at $RAYCAST_EXTENSIONS_DIR"
    exit 1
fi

if command -v curl > /dev/null; then
    curl -L "$GIST_URL" -o "$TEMP_DIR/gamma-color-picker.tar.gz"
elif command -v wget > /dev/null; then
    wget "$GIST_URL" -O "$TEMP_DIR/gamma-color-picker.tar.gz"
else
    echo "Neither curl nor wget found. Please install one of them."
    exit 1
fi

cd "$TEMP_DIR"
tar -xzf gamma-color-picker.tar.gz

if [ -d "$RAYCAST_EXTENSIONS_DIR/$EXTENSION_NAME" ]; then
    rm -rf "$RAYCAST_EXTENSIONS_DIR/$EXTENSION_NAME"
fi

mv "$EXTENSION_NAME" "$RAYCAST_EXTENSIONS_DIR/"
rm -rf "$TEMP_DIR"

echo "Installation complete!"