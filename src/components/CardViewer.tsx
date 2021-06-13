/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useRef, useState } from "react";
import CardWithFlip from "./CardWithFlip";
import { css } from "@emotion/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CARD_HEIGHT, CARD_WIDTH } from "../constants/css-vars";
import { CardNode } from "../types";

type OwnProps = {
  cards: CardNode[];
};

export default function CardViewer({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const [cardStackingOrder, setCardStackingOrder] = useState(
    createStackingOrderMap(cards)
  );
  const containerRef = useRef(null);

  function createStackingOrderMap(items: CardNode[]) {
    const zIndexes = items.map((_, i) => i).reverse();

    return items.reduce((acc, _, i) => {
      acc[i] = zIndexes[i];

      return acc;
    }, {});
  }

  console.log(cardStackingOrder);

  // const x = useMotionValue(0);
  // const background = useTransform(
  //   x,
  //   [-100, 0, 100],
  //   ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  // );

  // console.log("x", x);

  return (
    <motion.div
      className="card-viewer"
      ref={containerRef}
      css={css`
        background: radial-gradient(at center, white, whitesmoke);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .card-container {
          position: relative;
          width: ${CARD_WIDTH};
          height: ${CARD_HEIGHT};
        }
      `}
      // style={{ background }}
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
              onDragEnd={(_, info) => {
                const dragMax = info.point.x;

                if (dragMax > 200 || dragMax > -200) {
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
              }}
            >
              <CardWithFlip
                card={card?.node}
                noShadow={i !== 0}
                // style={{
                //   ...(i !== cards.length - 1 ? { boxShadow: "none" } : {}),
                // }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
