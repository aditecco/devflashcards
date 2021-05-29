import React from "react";
import { ThemeProvider, Global, css } from "@emotion/react";
import theme from "./src/theme/theme";
// fonts
import "@fontsource/material-icons/index.css";
// 3rd party CSS
import "normalize.css/normalize.css";
import "prismjs/themes/prism-tomorrow.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        // other globals
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          //font-family: ${({ theme }) => theme.bodyFont};
          margin: 0;
          padding: 0;
        }
      `}
    />

    {element}
  </ThemeProvider>
);
