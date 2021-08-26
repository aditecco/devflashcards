/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useRef } from "react";
import CardWithFlip from "./CardWithFlip";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { $navbarHeight, CARD_HEIGHT, CARD_WIDTH } from "../constants/css-vars";
import { Flashcard } from "../types";
import { SuperMemoGrade } from "supermemo";
import { DRAG_TRIGGER } from "../constants/constants";

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
        background: radial-gradient(at center, white, whitesmoke);
        height: calc(100vh - ${$navbarHeight});
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .card-area {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
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
