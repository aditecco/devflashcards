/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useRef } from "react";
import CardWithFlip from "./CardWithFlip";
import { css } from "@emotion/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Card from "./Card";

type OwnProps = {
  cards: unknown[];
};

export default function CardViewer({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  return (
    <div
      className="card-viewer"
      // ref={containerRef}
      css={css`
        background: radial-gradient(at center, white, whitesmoke);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .card-container {
          position: relative;
          width: 300px;
          height: 400px;
        }
      `}
    >
      <div className="card-container" ref={containerRef}>
        {cards?.map?.((card, i, cards) => {
          const zIndexes = [];

          for (let j = cards.length; j > 0; j--) {
            zIndexes.push(j);
          }

          return (
            <motion.div
              key={card?.node?.id}
              drag="x"
              dragConstraints={containerRef}
              data-card={"card__" + i}
              style={{
                ...x,
                position: "absolute",
                inset: 0,
                zIndex: zIndexes[i],
              }}
              dragElastic={0.7}
              onDragEnd={(event, info) => {
                console.log(event, info);
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
      </div>
    </div>
  );
}
