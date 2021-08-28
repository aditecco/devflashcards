/* ---------------------------------
Logo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import MaterialIcon from "./MaterialIcon";
import { css } from "@emotion/react";

type OwnProps = {};

export default function Logo({}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <div
      css={css`
        h1 {
          font-size: inherit;
          margin: 0;
          font-weight: normal;
          display: flex;
          align-items: center;

          .navbar-logotype {
            margin-left: 0.4rem;
          }
        }
      `}
    >
      <h1>
        <MaterialIcon icon={"graphic_eq"} />
        <span className="navbar-logotype">DevFlashcards</span>
      </h1>
    </div>
  );
}
