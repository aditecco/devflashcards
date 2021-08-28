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
import { Flashcard } from "../types";
import { basicSanitizer, truncate } from "../utils";
import MaterialIcon from "./MaterialIcon";
import { SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { SmallHeading } from "./SmallHeading";
import { Button } from "./Button";

type OwnProps = {
  card: Flashcard;
  onCardReview: (flashcard: Flashcard, grade: SuperMemoGrade) => void;
  style?: CSSProperties;
} & Omit<CardProps, "style">;

export default function CardWithFlip({
  card,
  style,
  onCardReview,
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

              <span className="card-content-debug-info">
                ID: {id?.slice?.(-3)} &middot; Due date:{" "}
                {dayjs(card?.dueDate).format("DD/MM/YYYY HH:mm:ss")}
              </span>
            </CardContent>

            <CardFooter>
              <CardControls>
                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => {
                    onCardReview(card, 0);
                  }}
                >
                  Pass
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  Answer
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

                <Button
                  className="card-controls-button"
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                >
                  <MaterialIcon icon={"arrow_back"} />
                  Back
                </Button>
              </header>

              <main
                className={"card-content-main"}
                dangerouslySetInnerHTML={{ __html: answerBlock }}
              />
            </CardContent>

            <CardFooter>
              <div className="card-footer-header">
                <SmallHeading>Rate your answer</SmallHeading>
                {/* TODO on click, add popover with rating notes */}
                <MaterialIcon icon={"help"} />
              </div>

              <CardControls>
                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 5)}
                  title={"Perfect response"}
                >
                  5
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 4)}
                  title={"Correct response after a hesitation"}
                >
                  4
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 3)}
                  title={"Correct response recalled with serious difficulty"}
                >
                  3
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 2)}
                  title={
                    "Incorrect response; where the correct one seemed easy to recall"
                  }
                >
                  2
                </button>

                <button
                  className="card-controls-button"
                  type="button"
                  onClick={() => onCardReview(card, 1)}
                  title={"Incorrect response; the correct one remembered"}
                >
                  1
                </button>
              </CardControls>
            </CardFooter>
          </Card>
        )}
      </Flip.Back>
    </Flip>
  );
}
