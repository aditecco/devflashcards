/* ---------------------------------
Theme types, WIP
--------------------------------- */

import { Theme } from "@emotion/react";

type ThemeColorDefinition = {};

type ThemeFontDefinition = {};

export interface _Theme extends Theme {
  space: Record<string, unknown>;
  fontSizes: Record<string, unknown>;
  colors: Record<string, unknown>;
  fonts: Record<string, unknown>;
  fontWeights: Record<string, unknown>;
  lineHeights: Record<string, unknown>;
  letterSpacings: Record<string, unknown>;
  sizes: Record<string, unknown>;
  borders: Record<string, unknown>;
  borderWidths: Record<string, unknown>;
  borderStyles: Record<string, unknown>;
  radii: Record<string, unknown>;
  shadows: Record<string, unknown>;
  zIndices: Record<string, unknown>;
  transitions: Record<string, unknown>;
}
