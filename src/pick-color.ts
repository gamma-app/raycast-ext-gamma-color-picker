import { closeMainWindow, launchCommand, LaunchType } from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { pickColor } from "swift:../swift/color-picker";
import { addToHistory } from "./history";
import { Color, PickColorCommandLaunchProps } from "./types";
import { getFormattedColor } from "./utils";

export default async function command(props: PickColorCommandLaunchProps) {
  await closeMainWindow();

  try {
    const pickedColor = (await pickColor()) as Color | undefined;
    if (!pickedColor) {
      return;
    }

    addToHistory(pickedColor);

    const hex = getFormattedColor(pickedColor, "hex");
    if (!hex) {
      throw new Error("Failed to format color");
    }

    // Launch color-names command with the picked color hex as the search term
    try {
      await launchCommand({
        name: "color-names",
        type: LaunchType.UserInitiated,
        arguments: { searchText: hex },
      });
    } catch (e) {
      await showFailureToast(e);
    }
  } catch (e) {
    console.error(e);
  }
}
