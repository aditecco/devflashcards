/* ---------------------------------
Card
--------------------------------- */

import * as React from "react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";
import { CARD_HEIGHT, CARD_WIDTH } from "../constants/css-vars";
import { css, useTheme } from "@emotion/react";

export type CardProps = {
  noShadow?: boolean;
  style?: CSSProperties;
};

export default function Card({
  children,
  noShadow,
  style,
}: PropsWithChildren<CardProps>): ReactElement {
  const theme = useTheme();

  return (
    <article
      className={"card"}
      css={css`
        background-color: white;
        border-radius: ${theme?.radii?.card};
        box-shadow: ${noShadow ? "" : "0 10px 20px 2px rgba(0,0,0,0.15)"};
        width: ${CARD_WIDTH};
        height: ${CARD_HEIGHT};
        font-family: ${theme?.fonts?.openSans};
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
