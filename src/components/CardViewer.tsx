/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useRef, useState } from "react";
import CardWithFlip from "./CardWithFlip";
import { css } from "@emotion/react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { $navbarHeight, CARD_HEIGHT, CARD_WIDTH } from "../constants/css-vars";
import { Flashcard } from "../types";
import { SuperMemoGrade } from "supermemo";
import {DRAG_TRIGGER} from "../constants/constants";

type OwnProps = {
  cards: Flashcard[];
  onCardReview: (flashcard: Flashcard, grade: SuperMemoGrade) => void;
};

export default function CardViewer({
  cards,
  onCardReview,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const [cardStackingOrder, setCardStackingOrder] = useState(
    createStackingOrderMap(cards)
  );
  const containerRef = useRef(null);
  const dragControls = useDragControls();

  // createStackingOrderMap
  function createStackingOrderMap(items: Flashcard[]): Record<string, number> {
    const zIndexes = items.map((_, i) => i).reverse();

    return items.reduce((acc, _, i) => {
      acc[i] = zIndexes[i];

      return acc;
    }, {});
  }

  console.log(cardStackingOrder); // TODO

  // const x = useMotionValue(0);
  // const background = useTransform(
  //   x,
  //   [-100, 0, 100],
  //   ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  // );

  // console.log("x", x);

  function startDrag(event) {
    dragControls.start(event, { snapToCursor: true });
  }

  return (
    <div
      className="card-viewer"
      css={css`
        background: radial-gradient(at center, white, whitesmoke);
        height: calc(100vh - ${$navbarHeight});
        display: flex;
        justify-content: center;
        align-items: center;

        .card-container {
          position: relative;
          width: ${CARD_WIDTH};
          height: ${CARD_HEIGHT};
        }
      `}
    >
      <motion.div className="card-container" ref={containerRef}>
        {cards?.map?.((card, i) => {
          return (
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              // dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              // dragConstraints={containerRef}
              data-card={"card__" + (i + 1)}
              dragElastic={0.8}
              dragControls={dragControls}
              onDragEnd={(_, info) => {
                const dragMax = info.point.x;

                if (Math.abs(dragMax) > DRAG_TRIGGER) {
                  setCardStackingOrder((order) => {
                    return Object.values(order).reduce((acc, curr, j) => {
                      acc[j] = j === i ? 0 : curr + 1;

                      return acc;
                    }, {});
                  });
                }
              }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: cardStackingOrder[i],
                cursor: "grab",
              }}
            >
              <CardWithFlip
                card={card}
                noShadow={i !== 0}
                onCardReview={onCardReview} // TODO avoid drilling
                onCardDrag={startDrag}
                // style={{
                //   ...(i !== cards.length - 1 ? { boxShadow: "none" } : {}),
                // }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
