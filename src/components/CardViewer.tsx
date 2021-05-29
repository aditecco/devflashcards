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
        background-color: palegoldenrod;
      `}
    >
      {cards?.map?.((card) => (
        <CardWithFlip key={card?.node?.id} card={card?.node} />
      ))}
    </div>
  );
}
