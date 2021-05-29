/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import CardWithFlip from "./CardWithFlip";
import { css } from "@emotion/react";

type OwnProps = {
  cards: unknown[];
};

export default function CardViewer({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <div
      className="card-viewer"
      css={css`
        background: radial-gradient(at center, white, whitesmoke);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .card-container {
          position: relative;
          width: 300px;
          height: 400px;
          box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.25);
        }
      `}
    >
      <div className="card-container">
        {cards?.map?.((card, i, cards) => {
          const zIndexes = [];

          for (let j = cards.length; j > 0; j--) {
            zIndexes.push(j);
          }

          return (
            <CardWithFlip
              key={card?.node?.id}
              card={card?.node}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: zIndexes[i],
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
