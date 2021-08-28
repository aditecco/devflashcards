/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useRef } from "react";
import CardWithFlip from "./CardWithFlip";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { CARD_HEIGHT, CARD_WIDTH } from "../constants/css-vars";
import { Flashcard } from "../types";
import { SuperMemoGrade } from "supermemo";
import { DRAG_TRIGGER } from "../constants/constants";
import { flex } from "../lib/css-functions";
import { navigate } from "gatsby";
import MaterialIcon from "./MaterialIcon";
import { Container } from "./Container";
import { Button } from "./Button";

type OwnProps = {
  cards: Flashcard[];
  onCardReview: (flashcard: Flashcard, grade: SuperMemoGrade) => void;
};

export default function CardViewer({
  cards,
  onCardReview,
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const dragBoundaries = useRef(null);

  return (
    <div
      className="card-viewer"
      css={css`
        display: flex;
        flex-direction: column;
        background: radial-gradient(at center, white, whitesmoke);
        height: 100vh;
        position: relative;

        .nav-controls {
          padding: 0 1rem;
          margin-top: 1rem;
        }

        .card-area {
          ${flex()};
          flex-grow: 1;
        }

        .card-container {
          position: relative;
          width: ${CARD_WIDTH};
          height: ${CARD_HEIGHT};
        }

        .card-wrapper {
          position: absolute;
          inset: 0;
        }
      `}
    >
      <Container className={"nav-controls"}>
        <Button onClick={() => navigate("/")}>
          <MaterialIcon icon={"arrow_back"} /> Back
        </Button>
      </Container>

      <div className="card-area">
        <motion.div className="card-container" ref={dragBoundaries}>
          {cards?.map?.((card, i, cards) => {
            const first = i === 0;

            return (
              <motion.div
                key={i}
                className={"card-wrapper"}
                data-card={"card__" + (i + 1)}
                drag={first ? "x" : false}
                dragElastic={0.8}
                dragConstraints={dragBoundaries}
                onDragEnd={(_, info) => {
                  const dragMax = info.point.x;

                  if (Math.abs(dragMax) > DRAG_TRIGGER) {
                    // rate the card w/ the lowest grade
                    onCardReview(card, 0);
                  }
                }}
                style={{
                  cursor: first ? "grab" : "pointer",
                }}
                animate={{
                  zIndex: cards.length - i,
                }}
              >
                <CardWithFlip
                  card={card}
                  noShadow={!first}
                  onCardReview={onCardReview} // TODO avoid drilling
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* SessionInfo will go here */}
      {children}
    </div>
  );
}
