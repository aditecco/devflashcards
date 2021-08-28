/* ---------------------------------
CardFooter
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css, useTheme } from "@emotion/react";
import { radius } from "../constants/css-vars";
import { flex } from "../lib/css-functions";

type OwnProps = {};

export default function CardFooter({
  children,
}: PropsWithChildren<OwnProps>): ReactElement {
  const theme = useTheme();

  return (
    <footer
      className="CardFooter"
      css={css`
        border-bottom-right-radius: ${radius};
        border-bottom-left-radius: ${radius};
        box-shadow: 0 -12px 6px -8px rgba(0, 0, 0, 0.08);

        .card-footer-header {
          ${flex()};
          text-align: center;

          > * {
            font-size: small;
          }
        }

        h6 {
          margin-top: 0.5rem;
        }

        .material-icons {
          margin-left: 6px;
          font-size: 1.05rem;
          color: ${theme?.colors?.typography?.[2]};
        }
      `}
    >
      {children}
    </footer>
  );
}
