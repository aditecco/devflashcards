/* ---------------------------------
Card
--------------------------------- */

import * as React from "react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";
import { CARD_HEIGHT, CARD_RADIUS, CARD_WIDTH } from "../constants/css-vars";
import { css, useTheme } from "@emotion/react";
import { truncate } from "../utils";

export type CardProps = {
  noShadow?: boolean;
  style?: CSSProperties;
  deck;
  order; // TOOO!
};

export default function Card({
  children,
  noShadow,
  deck,
  order,
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

        .card-content-meta {
          padding: 0 1rem;
          font-size: small;
          text-transform: uppercase;
          border-bottom: 1px solid ${theme?.colors?.stroke?.[2]};
          display: flex;
          justify-content: space-between;
          font-family: ${theme?.fonts?.lato};
          color: ${theme?.colors?.typography?.[2]};
          position: absolute;
          background: white;
          left: 0;
          right: 0;
          top: 0;
          z-index: 1;
          border-top-left-radius: ${theme?.radii?.card};
          border-top-right-radius: ${theme?.radii?.card};
        }

        .card-content-meta-item {
          padding: 0.8rem 0;
        }

        .card-content-meta-item:last-child {
          border-left: 1px solid ${theme?.colors?.stroke?.[2]};
          padding-left: 1rem;
        }
      `}
      style={style ?? {}}
    >
      <div className={"card-body"}>
        <div className="card-content-meta">
          <span className={"card-content-meta-item"}>{truncate(deck, 30)}</span>
          <span className={"card-content-meta-item"}>#{order + 1}</span>
        </div>

        {children}
      </div>
    </article>
  );
}
