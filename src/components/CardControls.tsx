/** @jsxImportSource @emotion/react */

/* ---------------------------------
CardControls
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { flex } from "../css-functions";
import { css } from "@emotion/react";
import { $small, $strokeLight, $success, transparent } from "../css-vars";

interface OwnProps {}

export default function CardControls({
  children,
}: PropsWithChildren<OwnProps>): ReactElement {
  return (
    <div
      className="CardControls"
      css={css`
        width: 100%;
        ${flex("row nowrap")}

        > button {
          flex: 1;
          font-size: ${$small};
          text-align: center;
          padding: 16px 10px;
          border: transparent;
          cursor: pointer;
          background-color: ${transparent};
          color: ${$strokeLight};
          transition: background-color 0.3s ease-in-out;
          border-top: 1px solid #eee;

          + button {
            border-left: 1px solid #eee;
          }

          &:hover {
            background-color: ${$success};
          }
        }
      `}
    >
      {children}
    </div>
  );
}
