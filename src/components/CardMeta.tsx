/* ---------------------------------
CardMeta
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { truncate } from "../utils";
import { css, useTheme } from "@emotion/react";

type OwnProps = { deck; order };

export default function CardMeta({
  deck,
  order,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  return (
    <div
      className="card-content-meta"
      css={css`
        padding: 0 1rem;
        font-size: small;
        text-transform: uppercase;
        border-bottom: 1px solid ${theme?.colors?.stroke?.[2]};
        display: flex;
        justify-content: space-between;
        font-family: ${theme?.fonts?.lato};
        color: ${theme?.colors?.typography?.[2]};
        background: white;
        z-index: 1;
        border-top-left-radius: ${theme?.radii?.card};
        border-top-right-radius: ${theme?.radii?.card};

        .card-content-meta-item {
          padding: 0.8rem 0;
        }

        .card-content-meta-item:last-child {
          border-left: 1px solid ${theme?.colors?.stroke?.[2]};
          padding-left: 1rem;
        }
      `}
    >
      <span className={"card-content-meta-item"}>{truncate(deck, 30)}</span>
      <span className={"card-content-meta-item"}>#{order + 1}</span>
    </div>
  );
}
