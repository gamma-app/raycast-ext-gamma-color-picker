import { Action, ActionPanel, Icon, List, PopToRootType, closeMainWindow, popToRoot } from "@raycast/api";
import { normalizeColorHex } from "../utils";

interface ColorItem {
  name: string;
  hex: string;
  distance: number;
}

export const ColorNameListItem = ({ color }: { color: ColorItem }) => {
  const hexCode = color.hex.replace(/^#/, "");

  return (
    <List.Item
      icon={{
        source: Icon.CircleFilled,
        tintColor: {
          light: hexCode,
          dark: hexCode,
          adjustContrast: false,
        },
      }}
      title={color.name}
      subtitle={`Distance: ${color.distance.toFixed(1)}`}
      accessories={[
        {
          tag: {
            value: normalizeColorHex(color.hex),
            color: hexCode,
          },
        },
      ]}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard
            content={color.name}
            title="Copy Shade Name"
            onCopy={() =>
              closeMainWindow({
                popToRootType: PopToRootType.Immediate,
              })
            }
          />
          <Action.CopyToClipboard content={color.hex} title="Copy Hex" />
        </ActionPanel>
      }
    />
  );
};
