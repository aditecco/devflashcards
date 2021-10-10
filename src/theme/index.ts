/* ---------------------------------
theme
--------------------------------- */

import { baseFontStack } from "../constants/css-vars";
import chroma from "chroma-js";
import { Theme } from "@emotion/react";

const ACCENT_PRIMARY = "#5E7CE2";

const theme: Theme = {
  // based on: https://system-ui.com/theme
  space: {},
  fontSizes: {},
  colors: {
    accent: {
      "1": ACCENT_PRIMARY,
    },
    utility: {
      black: "#000",
      white: "#fff",
      offWhite: "whitesmoke",
      red: "indianred",
      paleYellow: "#fffde7",
      gray: "#9B9B9B",
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
      gray: {
        [1]: chroma.mix("#fff", "#000", 0.08).hex(),
        [2]: chroma.mix("#fff", "#000", 0.1).hex(),
        [3]: chroma.mix("#fff", "#000", 0.2).hex(),
        [4]: chroma.mix("#fff", "#000", 0.3).hex(),
        [5]: chroma.mix("#fff", "#000", 0.4).hex(),
        [6]: chroma.mix("#fff", "#000", 0.5).hex(),
      },
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
  radii: {
    card: "6px",
  },
  shadows: {
    [1]: `0 2px 8px rgba(0,0,0,.25)`,
  },
  zIndices: {},
  transitions: {},
  breakpoints: {
    xs: 375,
    sm: 425,
    md: 768,
    lg: 1024,
    xxl: 1400,
  },
};

export default theme;
