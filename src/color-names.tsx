import { useEffect, useState } from "react";
import { List, LaunchProps, popToRoot, closeMainWindow, ActionPanel, Action } from "@raycast/api";
import ColorJS from "colorjs.io";
import { ColorNameListItem } from "./components/ColorNames";
import { normalizeColorHex } from "./utils";
import { colors } from "./colors";

interface ColorWithDistance {
  name: string;
  value: string;
  distance: number;
}

const colorNamesPerGroup = 5;

export default function ColorNames(props: LaunchProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchString, setSearchString] = useState<string>(props.arguments?.searchText || "");
  const [matchingColors, setMatchingColors] = useState<ColorWithDistance[]>([]);
  const normalizedSearchString = normalizeColorHex(searchString);

  const findMatchingColors = (searchString: string) => {
    setIsSearching(true);
    try {
      if (!searchString || searchString === "#") {
        setMatchingColors([]);
        setIsSearching(false);
        return;
      }

      const searchColor = new ColorJS(searchString);
      const colorsWithDistance = colors.map((color) => {
        const paletteColor = new ColorJS(color.value);
        const distance = searchColor.deltaE(paletteColor, "2000");
        return {
          name: color.name,
          value: color.value,
          distance,
        };
      });

      // Sort by distance (closest first)
      const sortedColors = colorsWithDistance.sort((a, b) => a.distance - b.distance);

      // If any colors have distance under 0.5, show only those
      const veryCloseColors = sortedColors.filter((color) => color.distance < 0.5);

      const finalColors = veryCloseColors.length > 0 ? veryCloseColors : sortedColors.slice(0, colorNamesPerGroup);

      setMatchingColors(finalColors);
    } catch {
      setMatchingColors([]);
    }
    setIsSearching(false);
  };

  useEffect(() => {
    findMatchingColors(normalizedSearchString);
  }, [normalizedSearchString, colorNamesPerGroup]);

  const handleEscapeAction = async () => {
    await popToRoot();
    await closeMainWindow();
  };

  return (
    <List isLoading={isSearching} onSearchTextChange={setSearchString} searchText={searchString}>
      {matchingColors.length > 0 ? (
        matchingColors.map((color, index) => (
          <ColorNameListItem
            key={`color-name-${color.name}-${index}`}
            color={{
              name: color.name,
              hex: color.value,
              distance: color.distance,
            }}
          />
        ))
      ) : (
        <List.EmptyView
          title={searchString ? "No colors found" : "Search for a color to see matching shades"}
          actions={
            <ActionPanel>
              <Action title="Close" onAction={handleEscapeAction} />
            </ActionPanel>
          }
        />
      )}
    </List>
  );
}
