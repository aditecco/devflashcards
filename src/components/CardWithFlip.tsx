/* ---------------------------------
CardWithFlip
--------------------------------- */

import * as React from "react";
import { CSSProperties, PropsWithChildren, ReactElement } from "react";
import Flip from "./Flip";
import Card, { CardProps } from "./Card";
import CardControls from "./CardControls";
import CardFooter from "./CardFooter";
import CardContent from "./CardContent";
import { _Card, Flashcard, SupermemoProcessor } from "../types";
import { basicSanitizer, truncate } from "../utils";
import MaterialIcon from "./MaterialIcon";

type OwnProps = {
  card: Flashcard;
  onCardReview: SupermemoProcessor;
  style?: CSSProperties;
} & Omit<CardProps, "style">;

export default function CardWithFlip({
  card,
  style,
  onCardReview,
  ...cardProps
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const {
    node: {
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
    },
  } = card ?? {};

  const questionBlock = html.split(/SPLIT_MARKER/).shift();
  const answerBlock = html.split(/SPLIT_MARKER/).pop();

  return (
    <Flip style={style ?? {}}>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card {...cardProps}>
            <CardContent>
              <div className="card-content-meta">
                <span className={"card-content-meta-item"}>
                  {truncate(deck, 30)}
                </span>
                <span className={"card-content-meta-item"}>#{order + 1}</span>
              </div>

              <header className="card-content-title">
                <h4>{title}</h4>
              </header>

              <main
                className={"card-content-main"}
                dangerouslySetInnerHTML={{
                  __html: basicSanitizer(questionBlock),
                }}
              />
            </CardContent>

            <CardFooter>
              <CardControls>
                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 0)}
                >
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
            <CardContent back>
              <header className="card-content-title">
                <h4>
                  Answer:{" "}
                  <span className="card-content-title-answer-wrapper">
                    {answer}
                  </span>
                </h4>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  <MaterialIcon icon={"arrow_back"} />
                  back
                </button>
              </header>

              <main
                className={"card-content-main"}
                dangerouslySetInnerHTML={{ __html: answerBlock }}
              />
            </CardContent>

            <CardFooter>
              <CardControls>
                <button className="card-controls-button" type="button">
                  Hard
                </button>

                <button className="card-controls-button" type="button">
                  Good
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 5)}
                >
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
