/* ---------------------------------
gatsby-browser
--------------------------------- */

import React from "react";
import { ThemeProvider, Global, css } from "@emotion/react";
import theme from "./src/theme";

// fonts
import "@fontsource/material-icons/index.css";
import "@fontsource/open-sans/index.css";
import "@fontsource/lato/index.css";
import "@fontsource/lato/400-italic.css";

// 3rd party CSS
import "normalize.css/normalize.css";
import "prismjs/themes/prism-tomorrow.css";
import { baseFontStack } from "./src/constants/css-vars";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          font-family: ${baseFontStack};
          margin: 0;
          padding: 0;

          // WIP https://css-tricks.com/the-current-state-of-styling-scrollbars/
          &::-webkit-scrollbar {
            width: 10px;
          }

          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }

          &::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.accent[1]};
            outline: 1px solid slategrey;
          }
        }
      `}
    />

    {element}
  </ThemeProvider>
);
