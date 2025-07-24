import ColorJS from "colorjs.io";
import { Color } from "./types";

export function colorToHex(_color: Color) {
  const color = new ColorJS(_color.colorSpace, [_color.red, _color.green, _color.blue], _color.alpha);
  return color.to("srgb").toString({ format: "hex" }).toUpperCase();
}

export function normalizeColorHex(colorInput: string) {
  let hex = colorInput.replace(/^#/, "");
  const validHexPattern = /^([a-f\d]{3,4}|[a-f\d]{6}|[a-f]\d{8})$/i;
  if (validHexPattern.test(hex)) {
    switch (hex.length) {
      case 3:
      case 4:
        hex = hex
          .slice(0, 3)
          .split("")
          .map((x) => x.repeat(2))
          .join("");
        break;
      case 8:
        hex = hex.slice(0, 6);
        break;
    }
  }
  return "#" + hex.toUpperCase();
}
