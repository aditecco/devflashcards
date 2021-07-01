/* ---------------------------------
theme
--------------------------------- */

import { baseFontStack } from "../constants/css-vars";
import chroma from "chroma-js";
import { _Theme } from "../types";

const ACCENT_PRIMARY = "#5E7CE2";

const theme: _Theme = {
  // based on: https://system-ui.com/theme
  space: {},
  fontSizes: {},
  colors: {
    accent: {
      "1": ACCENT_PRIMARY,
    },
    utility: {
      black: "#000",
      white: "whitesmoke",
      red: "indianred",
      yellow: "#fffde7",
    },
    stroke: {
      [1]: chroma(ACCENT_PRIMARY).alpha(0.6).hex(),
      [2]: chroma("#555").alpha(0.15).hex(),
    },
    typography: {
      [1]: "#4A4A4A",
      [2]: "#9B9B9B",
      [3]: chroma("#4A4A4A").alpha(0.5).hex(),
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
    latoItalic: `'Lato Italic', ${baseFontStack}`,
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

export default theme;
