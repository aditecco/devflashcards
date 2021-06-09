/* ---------------------------------
CardWithFlip
--------------------------------- */

import * as React from "react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";
import Flip from "./Flip";
import Card, { CardProps } from "./Card";
import CardFlipControls from "./CardFlipControls";
import CardControls from "./CardControls";
import CardFooter from "./CardFooter";
import { css } from "@emotion/react";
import { rem } from "../css-functions";

type OwnProps = {
  card: unknown;
  style?: CSSProperties;
} & Omit<CardProps, "style">;

export default function CardWithFlip({
  card,
  style,
  ...cardProps
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const {
    id,
    frontmatter: { title, topic, timestamp, question, answer, options },
    html,
  } = card ?? {};

  const cleared = html
    .replace(/<h6>[a-zA-Z]{.}<\/h6>/g, "")
    .replace(/<h6>[a-zA-Z0-9\.]{.}<\/h6>/g, "")
    .replace(/<details><summary><b>Answer<\/b><\/summary>/g, "")
    .replace(/<p>/, "")
    .replace(/<\/p>/, "")
    .replace(/<\/details>/, "");
  const q = cleared.split(/\<h4\>Answer\:\s[A-Z]{1}\<\/h4\>/g).shift();
  const a = cleared.split(/\<h4\>Answer\:\s[A-Z]{1}\<\/h4\>/g).pop();

  return (
    <Flip style={style ?? {}}>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card {...cardProps}>
            <div
              className="card-content"
              css={css`
                overflow-y: auto;

                > *:not(.card-content-html) {
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

                .card-content-html {
                  overflow-y: auto;
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
                className={"card-content-html"}
                dangerouslySetInnerHTML={{ __html: q }}
              />

              <div className="card-content-options">{options}</div>
            </div>

            <CardFooter>
              <CardControls>
                <button
                  className="CardControlsButton"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  Show answer
                </button>
              </CardControls>
            </CardFooter>
          </Card>
        )}
      </Flip.Front>

      <Flip.Back>
        {({ setFlipped }) => (
          <Card>
            {/*<span>{answer}</span>*/}
            <div className="card-content-html" style={{ overflowY: "auto" }}>
              <div
                className={"card-content-html-inner"}
                dangerouslySetInnerHTML={{ __html: a }}
                style={{
                  padding: "2rem 1.5rem",
                  lineHeight: "1.6",
                  fontSize: ".9rem",
                }}
              />
            </div>

            <CardFooter>
              <CardControls>
                <button
                  className="CardControlsButton"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  Flip
                </button>

                <button className="CardControlsButton" type="button">
                  Hard
                </button>

                <button className="CardControlsButton" type="button">
                  Good
                </button>

                <button className="CardControlsButton" type="button">
                  Easy
                </button>
              </CardControls>
            </CardFooter>
          </Card>
        )}
      </Flip.Back>
    </Flip>
  );
}
