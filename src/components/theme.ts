export type Colors =
  | keyof typeof colorCodes
  | {
      copyOne: string;
      copyTwo: string;
      error: string;
      primary: string;
      secondary: string;
      accentPrimary: string;
    };

const zIndexes = {
  behind: -1,
  inFront: 1,
  secondInFront: 2,
  overlay: 1300,
};

const colorCodes = {
  black: "#020403",
  athensGray: "#d9d9d9",
};

const colors = {
  ...colorCodes,
  copyOne: colorCodes["athensGray"],
  copyTwo: colorCodes["black"],
};

const breakpoints: string[] = ["319px", "424px", "767px", "1023px"];

const fontSizes = {
  0: 10,
  1: 12,
  2: 14,
  3: 16,
  4: 20,
  5: 30,
  6: 40,
  7: 50,
  8: 60,
  9: 70,
  10: 80,
};

const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
};

const fonts = {
  primary: "Favorit, sans-serif",
  secondary: "SangBleu OG Serif, sans-serif",
};

const borders = {
  offWhiteThin: `1px solid ${colors.copyOne}`,
};

const theme = {
  space: {
    ...space,
  },
  fonts: {
    ...fonts,
  },
  fontSizes: {
    ...fontSizes,
  },
  borders,
  breakpoints,
  colors: {
    ...colors,
  },
  zIndexes: {
    ...zIndexes,
  },
};

export default theme;
