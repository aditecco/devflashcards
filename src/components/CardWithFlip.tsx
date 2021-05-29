/* ---------------------------------
CardWithFlip
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import Flip from "./Flip";
import Card from "./Card";
import CardFlipControls from "./CardFlipControls";
import CardControls from "./CardControls";
import CardFooter from "./CardFooter";

type OwnProps = {
  card: unknown;
};

export default function CardWithFlip({
  card,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const {
    id,
    frontmatter: { title, topic, timestamp },
  } = card ?? {};

  return (
    <Flip>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card>
            <div className="card-content">
              <h4>{title}</h4>
              <h6>{timestamp}</h6>
              <span>{topic}</span>
            </div>

            <CardFlipControls onFlip={() => setFlipped((f) => !f)} />
            <CardFooter>
              <CardControls>
                <button className="CardControlsButton" type="button">
                  Cobaltum
                </button>

                <button className="CardControlsButton" type="button">
                  Germanus
                </button>

                <button className="CardControlsButton" type="button">
                  Nunquam
                </button>
              </CardControls>
            </CardFooter>
          </Card>
        )}
      </Flip.Front>

      <Flip.Back>
        {({ setFlipped }) => (
          <Card>
            <span>Back</span>
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
          </Card>
        )}
      </Flip.Back>
    </Flip>
  );
}
