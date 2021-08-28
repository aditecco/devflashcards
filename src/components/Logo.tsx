/* ---------------------------------
Logo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import MaterialIcon from "./MaterialIcon";
import { css } from "@emotion/react";
import { navigate } from "gatsby";

type OwnProps = {};

export default function Logo({}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <a
      onClick={() => navigate("/")}
      css={css`
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        transition: transform 0.15s ease-in-out;

        &:hover {
          color: inherit;
          transform: scale(1.05);
        }

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
    </a>
  );
}
