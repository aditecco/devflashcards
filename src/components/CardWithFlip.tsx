/* ---------------------------------
CardWithFlip
--------------------------------- */

import * as React from "react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";
import Flip from "./Flip";
import Card from "./Card";
import CardFlipControls from "./CardFlipControls";
import CardControls from "./CardControls";
import CardFooter from "./CardFooter";
import { css } from "@emotion/react";
import { rem } from "../css-functions";

type OwnProps = {
  card: unknown;
  style?: CSSProperties;
};

export default function CardWithFlip({
  card,
  style,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const {
    id,
    frontmatter: { title, topic, timestamp, question, answer, options },
    html,
  } = card ?? {};

  return (
    <Flip style={style ?? {}}>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card noShadow>
            <div
              className="card-content"
              css={css`
                overflow-y: auto;

                > *:not(.card-content-HTML) {
                  padding: 0 1rem;
                }

                .card-content-meta {
                  padding: 1rem;
                  font-size: small;
                  color: #cbcbcb;
                  text-transform: uppercase;
                  border-bottom: 1px solid #cbcbcb85;
                }

                .card-content-title {
                  font-weight: normal;
                  font-size: ${rem(18)};
                  padding: ${rem(24)} 1rem 0.5rem;
                  margin: 0;
                }

                .card-content-HTML {
                  font-size: small;
                }

                .card-content-options {
                }
              `}
            >
              <div className="card-content-meta">
                {topic} &middot; {timestamp}
              </div>

              <h4 className="card-content-title">{question}</h4>

              <div
                className={"card-content-HTML"}
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <div className="card-content-options">{options}</div>
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
            <span>{answer}</span>
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
          </Card>
        )}
      </Flip.Back>
    </Flip>
  );
}
