/* ---------------------------------
Card
--------------------------------- */

import * as React from "react";
import {
  baseFontStack,
  CARD_HEIGHT,
  CARD_WIDTH,
  CARD_MAX_WIDTH,
  CARD_RADIUS,
} from "../constants/css-vars";
import { css } from "@emotion/react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";

export type CardProps = {
  noShadow?: boolean;
  style?: CSSProperties;
};

export default function Card({
  children,
  noShadow,
  style,
}: PropsWithChildren<CardProps>): ReactElement {
  return (
    <article
      className={"card"}
      css={css`
        background-color: white;
        border-radius: ${CARD_RADIUS};
        box-shadow: ${noShadow ? "" : "0 10px 20px 2px rgba(0,0,0,0.15)"};
        width: ${CARD_WIDTH};
        height: ${CARD_HEIGHT};
        font-family: ${baseFontStack};
        font-weight: 400;

        .card-body {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;

          > *:first-child {
            flex-grow: 1;
          }
        }
      `}
      style={style ?? {}}
    >
      <div className={"card-body"}>{children}</div>
    </article>
  );
}
