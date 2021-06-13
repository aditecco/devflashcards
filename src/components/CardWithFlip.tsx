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
import { rem } from "../lib/css-functions";
import { $backgroundLight, $font, $fontPrimary } from "../constants/css-vars";

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
    html,
    frontmatter: {
      order,
      timestamp,
      topic,
      deck,
      contentSource,
      title,
      answer,
    },
  } = card ?? {};

  const questionBlock = html.split(/SPLIT_MARKER/).shift();
  const answerBlock = html.split(/SPLIT_MARKER/).pop();

  return (
    <Flip style={style ?? {}}>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card {...cardProps}>
            <div
              className="card-content"
              css={css`
                overflow-y: auto;

                > *:not(.card-content-main) {
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
                  padding: ${rem(24)} 1rem 0.5rem;

                  h4 {
                    font-weight: normal;
                    font-size: ${rem(18)};
                    margin: 0;
                  }
                }

                .card-content-main {
                  label {
                    display: none;
                  }

                  .option-container {
                    padding: 0.25rem 0.5rem;

                    code {
                      color: ${$font};
                      background-color: ${$backgroundLight};
                      font-size: small;
                      padding: 2px 6px;
                      border: 1px solid #e3e3e3;
                    }

                    input[type="radio"] {
                      margin-right: 1rem;
                    }
                  }
                }

                .card-content-options {
                }
              `}
            >
              <div className="card-content-meta">
                {order} &middot; {topic} &middot; {timestamp}
              </div>

              <header className="card-content-title">
                <h4>{title}</h4>
              </header>

              <main
                className={"card-content-main"}
                dangerouslySetInnerHTML={{ __html: questionBlock }}
              />
            </div>

            <CardFooter>
              <CardControls>
                <button className="card-controls-button" type="button">
                  Pass
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  Submit
                </button>
              </CardControls>
            </CardFooter>
          </Card>
        )}
      </Flip.Front>

      <Flip.Back>
        {({ setFlipped }) => (
          <Card>
            <div style={{ overflowY: "auto" }}>
              <header className="card-content-title">
                <h4>Answer: {answer}</h4>
              </header>

              <main
                className={"card-content-main"}
                dangerouslySetInnerHTML={{ __html: answerBlock }}
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
                  className="card-controls-button"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  Flip
                </button>

                <button className="card-controls-button" type="button">
                  Hard
                </button>

                <button className="card-controls-button" type="button">
                  Good
                </button>

                <button className="card-controls-button" type="button">
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
