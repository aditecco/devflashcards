/* ---------------------------------
Theme types, WIP
--------------------------------- */

import "@emotion/react";

type ThemeColors = {
  accent?: Record<string, string | Record<string, string>>;
  utility?: Record<string, string | Record<string, string>>;
  stroke?: Record<string, string | Record<string, string>>;
  typography?: Record<string, string | Record<string, string>>;
  background?: Record<string, string | Record<string, string>>;
};

type ThemeFonts = {};

declare module "@emotion/react" {
  export interface Theme {
    space: Record<string, string>;
    fontSizes: Record<string, string>;
    colors: ThemeColors;
    fonts: Record<string, string>;
    fontWeights: Record<string, string>;
    lineHeights: Record<string, string>;
    letterSpacings: Record<string, string>;
    sizes: Record<string, string>;
    borders: Record<string, string>;
    borderWidths: Record<string, string>;
    borderStyles: Record<string, string>;
    radii: Record<string, string>;
    shadows: Record<string, string>;
    zIndices: Record<string, string>;
    transitions: Record<string, string>;
  }
}
