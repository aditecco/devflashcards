/* ---------------------------------
Theme types, WIP
--------------------------------- */

import "@emotion/react";

type ThemeColorDefinition = {};

type ThemeFontDefinition = {};

declare module "@emotion/react" {
  export interface Theme {
    space: Record<string, string>;
    fontSizes: Record<string, string>;
    colors: Record<string, string>;
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
