import { Clipboard, closeMainWindow, launchCommand, LaunchType, getPreferenceValues, showHUD } from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { callbackLaunchCommand } from "raycast-cross-extension";
import ColorJS from "colorjs.io";
import { pickColor } from "swift:../swift/color-picker";
import { addToHistory } from "./history";
import { Color, PickColorCommandLaunchProps } from "./types";
import { getFormattedColor } from "./utils";
import { colors } from "./colors";

function findClosestColorShade(pickedHex: string) {
  const pickedColor = new ColorJS(pickedHex);
  let closestColor = null;
  let minDistance = Infinity;

  for (const color of colors) {
    const paletteColor = new ColorJS(color.value);
    const distance = pickedColor.deltaE(paletteColor, "2000");

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }

  // Only return the closest color if it's close enough (deltaE < 15)
  if (minDistance < 15 && closestColor) {
    return {
      name: closestColor.name,
      hex: closestColor.value,
      distance: minDistance,
    };
  }

  return null;
}

export default async function command(props: PickColorCommandLaunchProps) {
  const { showColorName } = getPreferenceValues<Preferences.PickColor>();
  await closeMainWindow();

  try {
    const pickedColor = (await pickColor()) as Color | undefined;
    if (!pickedColor) {
      return;
    }

    addToHistory(pickedColor);

    const hex = getFormattedColor(pickedColor, "hex");
    const formattedColor = getFormattedColor(pickedColor);
    if (!formattedColor) {
      throw new Error("Failed to format color");
    }

    // Find closest color shade
    const closestShade = findClosestColorShade(hex);
    const colorToCopy = closestShade ? closestShade.name : formattedColor;
    const displayHex = closestShade ? closestShade.hex : hex;

    if (props.launchContext?.callbackLaunchOptions) {
      if (props.launchContext?.copyToClipboard) {
        await Clipboard.copy(colorToCopy);
      }

      try {
        await callbackLaunchCommand(props.launchContext.callbackLaunchOptions, { hex, formattedColor: colorToCopy });
      } catch (e) {
        await showFailureToast(e);
      }
    } else {
      await Clipboard.copy(colorToCopy);
      if (closestShade) {
        await showHUD(`copied ${closestShade.name} (${displayHex}) to clipboard`);
      } else {
        await showHUD(`Copied color ${formattedColor} to clipboard`);
      }
    }
  } catch (e) {
    console.error(e);

    await showHUD("❌ Failed picking color");
  }
}
