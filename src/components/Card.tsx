/* ---------------------------------
Card
--------------------------------- */

import * as React from "react";
import {
  cardMaxWidth,
  baseFontStack,
  cardHeight,
  cardWidth,
} from "../css-vars";
import { css } from "@emotion/react";
import { PropsWithChildren, ReactElement } from "react";

export default function Card({
  children,
}: PropsWithChildren<{}>): ReactElement {
  return (
    <article
      className={"Card"}
      css={css`
        background-color: white;
        border-radius: 6px;
        box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.25);
        width: ${cardWidth};
        max-width: ${cardMaxWidth};
        height: ${cardHeight};
        font-family: ${baseFontStack};
        font-weight: 400;
      `}
    >
      <div
        className={"CardBody"}
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;

          > *:first-child {
            flex-grow: 1;
          }
        `}
      >
        {children}
      </div>
    </article>
  );
}
