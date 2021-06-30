/** @jsxImportSource @emotion/react */

/* ---------------------------------
CardControls
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { flex } from "../lib/css-functions";
import { css, useTheme } from "@emotion/react";
import {
  $small,
  $strokeLight,
  $success,
  transparent,
} from "../constants/css-vars";

interface OwnProps {}

export default function CardControls({
  children,
}: PropsWithChildren<OwnProps>): ReactElement {
  const theme = useTheme();

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

        > button:last-child {
          color: ${theme.colors.accent[1]};
        }
      `}
    >
      {children}
    </div>
  );
}
