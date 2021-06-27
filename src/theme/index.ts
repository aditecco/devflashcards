/* ---------------------------------
theme
--------------------------------- */

import { baseFontStack } from "../constants/css-vars";
import chroma from "chroma-js";
import { Theme } from "@emotion/react";

const ACCENT_PRIMARY = "#5E7CE2";

export default {
  // based on: https://system-ui.com/theme
  space: {},
  fontSizes: {},
  accent: "red",
  colors: {
    accent: {
      "1": ACCENT_PRIMARY,
    },
    stroke: {
      "1": chroma(ACCENT_PRIMARY).alpha(0.6).hex(),
    },
    background: {
      blue: {
        "1": "#E3F2FD",
        "2": chroma("#E3F2FD").alpha(0.6).hex(),
      },
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
