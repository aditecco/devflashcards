/* ---------------------------------
SimpleCard
--------------------------------- */

import * as React from "react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";
import { css, useTheme } from "@emotion/react";

export type CardProps = {
  noShadow?: boolean;
  style?: CSSProperties;
};

export default function SimpleCard({
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
        font-family: ${theme?.fonts?.openSans};
        font-weight: 400;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-10px);
        }

        .card-body {
          line-height: 1.8;

          a {
            display: block;
          }
        }
      `}
      style={style ?? {}}
    >
      <div className={"card-body"}>{children}</div>
    </article>
  );
}
