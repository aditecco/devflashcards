/* ---------------------------------
theme
--------------------------------- */

import { baseFontStack } from "../constants/css-vars";
import { Theme } from "@emotion/react";

export default {
  // based on: https://system-ui.com/theme
  space: {},
  fontSizes: {},
  accent: "red",
  colors: {
    accent: {
      "1": "#5E7CE2",
    },
    stroke: {},
    background: {
      yellow: {
        "1": "#fffde7",
        "2": "#efebe9",
      },
      "1": "",
    },
  },
  fonts: {
    openSans: `'Open Sans', ${baseFontStack}`,
    lato: `Lato, ${baseFontStack}`,
  },
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borders: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {},
  zIndices: {},
  transitions: {},
};
