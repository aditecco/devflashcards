/* ---------------------------------
App
--------------------------------- */

import * as React from "react";
import useGlobalDate from "./hooks/useGlobalDate";
import useGlobalSession from "./hooks/useGlobalSession";
import { css, Global, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { baseFontStack } from "./constants/css-vars";
import { DateContext, SessionContext } from "./context";
import { AnimatePresence } from "framer-motion";

type OwnProps = {};

export const App: React.FC<OwnProps> = ({ children }) => {
  const currentDate = useGlobalDate();
  const session = useGlobalSession(currentDate?.initial);

  return (
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

      <DateContext.Provider value={currentDate}>
        <SessionContext.Provider value={session}>
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </SessionContext.Provider>
      </DateContext.Provider>
    </ThemeProvider>
  );
};
