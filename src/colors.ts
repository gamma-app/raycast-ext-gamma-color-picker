const colorPalette = {
  // an "elevation" palette used in dark mode only. in light mode we can make sure of shadows for defining depth/elevation, but in dark mode (in darkness there is no light, and therefore there are no shadows), so opacity is used instead. the "elevation" palette is a precomputed list of values where sky.200 at different opacity levels is overlaid on titanium.950 and the resulting color is the value used. the reason the final values themselves don't have opacity is so that content does not show underneath (ie. a modal with a background with elevation.2 would result in the content underneath to peek through because the background color is slightly opaque)
  elevation: {
    1: "#1a1b1d", // titanium.950 + (sky.200 with opacity 4%)
    2: "#1d1f22", // titanium.950 + (sky.200 with opacity 6%)
    3: "#212327", // with opacity 8%
    4: "#2f3339", // with opacity 16%
    5: "#3d444c", // with opacity 24%
    6: "#515c68", // with opacity 36%
  },

  // NEUTRAL
  moonbeam: {
    50: "#faf9f5", // moonbeam
    100: "#f1eee3",
    200: "#e2dcc6",
    300: "#cfc4a2",
    400: "#bba77c",
    500: "#ad9362",
    600: "#a08156",
    700: "#856949",
    800: "#6d563f",
    900: "#594735",
    950: "#2f241b",
  },
  spacedust: {
    50: "#f2f1ef", // space dust
    100: "#eceae8",
    200: "#d8d5d0",
    300: "#c0bbb1",
    400: "#a59d92",
    500: "#93887c",
    600: "#867970",
    700: "#70655e",
    800: "#5d544f",
    900: "#4c4542",
    950: "#282422",
  },
  spacegray: {
    50: "#f7f7f7",
    100: "#ededed",
    200: "#dfdfdf",
    300: "#d1d1d1", // space gray
    400: "#adadad",
    500: "#999999",
    600: "#888888",
    700: "#7b7b7b",
    800: "#676767",
    900: "#545454",
    950: "#363636",
  },
  steel: {
    50: "#f7f7f7",
    100: "#ededed",
    200: "#dededf",
    300: "#c7c7c9",
    400: "#acacae",
    500: "#9c9c9e", // steel
    600: "#878789",
    700: "#79797c",
    800: "#666667",
    900: "#535355",
    950: "#353536",
  },
  titanium: {
    50: "#f5f5f6",
    100: "#ececed",
    200: "#dfdfe0",
    300: "#cacacb",
    400: "#aeaeb2",
    500: "#8b8b90",
    600: "#66666b", // titanium
    700: "#4d4d51",
    800: "#38383c",
    900: "#252527",
    950: "#131314",
  },
  tungsten: {
    50: "#f0f0f2",
    100: "#dadadb",
    200: "#b9b8bb",
    300: "#87878b",
    400: "#515153",
    500: "#363638", // tungsten
    600: "#2e2e30",
    700: "#272729",
    800: "#222223",
    900: "#1d1d1e",
    950: "#131314",
  },

  // COLOR PALETTE
  snowcap: {
    50: "#e8eefc", // snowcap
    100: "#dbe5fe",
    200: "#bfd2fe",
    300: "#93b6fd",
    400: "#6090fa",
    500: "#3b68f6",
    600: "#2548eb",
    700: "#1d34d8",
    800: "#1e2caf",
    900: "#1e2b8a",
    950: "#171d54",
  },
  glacier: {
    50: "#f0f4fd",
    100: "#e8eefc", // glacier
    200: "#cdd9f8",
    300: "#afc0f2",
    400: "#8f9eea",
    500: "#737ee1",
    600: "#585ad3",
    700: "#4949b9",
    800: "#3d3e96",
    900: "#383b77",
    950: "#212245",
  },
  raindrop: {
    50: "#eef3ff",
    100: "#dee7ff", // raindrop
    200: "#c7d5fe",
    300: "#a5b8fc",
    400: "#8192f8",
    500: "#636df1",
    600: "#4846e5",
    700: "#3c38ca",
    800: "#3230a3",
    900: "#2e2f81",
    950: "#1c1b4b",
  },
  periwinkle: {
    50: "#eff4fe",
    100: "#e2eafd",
    200: "#cddafa", // periwinkle
    300: "#acbef5",
    400: "#8a9cef",
    500: "#6e7be6",
    600: "#5256d9",
    700: "#4345bf",
    800: "#393c9a",
    900: "#34377b",
    950: "#1f2147",
  },
  puddle: {
    50: "#eff7ff",
    100: "#daedff",
    200: "#a8d5ff", // puddle
    300: "#91cdff",
    400: "#5eb1fc",
    500: "#388ff9",
    600: "#2271ee",
    700: "#1a5bdb",
    800: "#1c4ab1",
    900: "#1c418c",
    950: "#162955",
  },
  sky: {
    50: "#eff7ff",
    100: "#dcebfd",
    200: "#c0defd",
    300: "#84c1fa", // sky
    400: "#63acf7",
    500: "#3f8bf2",
    600: "#296ee7",
    700: "#2158d4",
    800: "#2148ac",
    900: "#204088",
    950: "#182953",
  },
  lake: {
    50: "#f1f6fd",
    100: "#dfecfa",
    200: "#c6ddf7",
    300: "#9ec8f2",
    400: "#70aaea",
    500: "#4986e1", // lake
    600: "#3a6ed6",
    700: "#315bc4",
    800: "#2e4a9f",
    900: "#2a427e",
    950: "#1e2a4d",
  },
  ultramarine: {
    50: "#eff8ff",
    100: "#daefff",
    200: "#bee4ff",
    300: "#91d3ff",
    400: "#5dbafd",
    500: "#379bfa",
    600: "#217cef",
    700: "#1862d4", // ultramarine
    800: "#1b52b2",
    900: "#1c488c",
    950: "#162c55",
  },
  deepocean: {
    50: "#ebf3fe",
    100: "#cee2fd",
    200: "#a8cffa",
    300: "#70bcfb",
    400: "#2a98f8",
    500: "#0c72ed",
    600: "#0858f7",
    700: "#0740df",
    800: "#0540ad",
    900: "#0b2e79",
    950: "#002253", // deep ocean
  },
  deepspace: {
    50: "#eef6ff",
    100: "#dcedff",
    200: "#b2dbff",
    300: "#6dbfff",
    400: "#209fff",
    500: "#0082ff",
    600: "#0065df",
    700: "#004fb4",
    800: "#004495",
    900: "#00387a",
    950: "#000e21", // deep space
  },

  // ACCENTS
  bordeaux: {
    50: "#fdf2f9",
    100: "#fce7f5",
    200: "#fbcfec",
    300: "#f9a8db",
    400: "#f373c1",
    500: "#eb49a7",
    600: "#da2887",
    700: "#bd196c",
    800: "#921653", // bordeaux
    900: "#83184d",
    950: "#50072a",
  },
  flamingo: {
    50: "#fff4fe",
    100: "#fee9fb",
    200: "#fdd1f8",
    300: "#faadee",
    400: "#f578de", // flamingo
    500: "#ea4bcd",
    600: "#d62cad",
    700: "#b50084",
    800: "#920063",
    900: "#6e0d46",
    950: "#50072a",
  },
  bonan: {
    50: "#fffbeb",
    100: "#fff3c6",
    200: "#ffeba2",
    300: "#ffd55e",
    400: "#fec500", // bonan
    500: "#f4b603",
    600: "#da9c05",
    700: "#b47300",
    800: "#9b5500",
    900: "#77390a",
    950: "#441c00",
  },
  aurora: {
    50: "#f8f6ff",
    100: "#f2ecff",
    200: "#e1d5ff",
    300: "#d0b9ff",
    400: "#bd97fd",
    500: "#b179fb",
    600: "#9044eb", // aurora
    700: "#8131dc",
    800: "#6623ad",
    900: "#511c87",
    950: "#350764",
  },
  seafoam: {
    50: "#eefffd",
    100: "#e0fdf9",
    200: "#b6fff6",
    300: "#7af9ef",
    400: "#32e5e1", // seafoam
    500: "#04c8c6",
    600: "#009ea4",
    700: "#027e83",
    800: "#086267",
    900: "#0c5155",
    950: "#002f34",
  },
  evergreen: {
    50: "#f2fcf1",
    100: "#e2f7e1",
    200: "#c4eec4",
    300: "#96e096",
    400: "#60c860",
    500: "#3caa3c",
    600: "#2c8c2c",
    700: "#266d28",
    800: "#1a561c", // evergreen
    900: "#1c481d",
    950: "#082b09",
  },
  rocketfire: {
    50: "#fff6ec",
    100: "#ffecd3",
    200: "#ffd4a5",
    300: "#ffb66d",
    400: "#ff8b32",
    500: "#ff6a0a",
    600: "#ff5000", // rocket fire
    700: "#cc3702",
    800: "#a12c0b",
    900: "#82270c",
    950: "#461004",
  },
  calamity: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444", // calamity
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
  white: "#ffffff",
  black: "#000000",
};

const colorRoles = {
  primary: colorPalette.deepocean,
  secondary: colorPalette.sky,
  info: colorPalette.deepocean,
  link: colorPalette.deepocean,
  success: colorPalette.evergreen,
  warning: colorPalette.rocketfire,
  error: colorPalette.calamity,
};

const colorsNested = {
  spacedust: colorPalette.spacedust,
  gray: colorPalette.titanium,

  deepocean: colorPalette.deepocean,
  sky: colorPalette.sky,

  elevation: colorPalette.elevation,

  red: colorPalette.calamity,
  orange: colorPalette.rocketfire,
  yellow: colorPalette.bonan,
  green: colorPalette.evergreen,
  cyan: colorPalette.seafoam,
  purple: colorPalette.aurora,
  pink: colorPalette.flamingo,
};

export const colors = Object.entries(colorsNested).flatMap(([color, palette]) => {
  return Object.entries(palette).map(([num, hex]) => {
    return {
      name: `${color}.${num}`,
      value: hex,
    };
  });
});

colors.push({
  name: "white",
  value: "#ffffff",
});

colors.push({
  name: "black",
  value: "#000000",
});
