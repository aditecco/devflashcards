/* ---------------------------------
Navbar
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css, useTheme } from "@emotion/react";
import { rem } from "../lib/css-functions";

type OwnProps = {};

export default function Navbar({}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  return (
    <nav
      className={"navbar"}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: ${rem(24)} 1rem;
        font-size: ${rem(18)};
        color: ${theme.colors.typography[1]};
        box-shadow: ${theme.shadows[1]};
        z-index: 1;
        background-color: white;

        h1 {
          font-size: inherit;
          margin: 0;
          font-weight: normal;
        }
      `}
    >
      <h1>DevFlashcards</h1>
    </nav>
  );
}
