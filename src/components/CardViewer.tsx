/* ---------------------------------
CardViewer
--------------------------------- */

import * as React from "react";
import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import CardWithFlip from "./CardWithFlip";
import { css, useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import { CARD_HEIGHT, CARD_WIDTH } from "../constants/css-vars";
import { Flashcard } from "../types";
import { SuperMemoGrade } from "supermemo";
import { DRAG_TRIGGER } from "../constants/constants";
import { flex } from "../lib";
import { Container } from "./Container";
import Logo from "./Logo";
import screenfull from "screenfull";
import MaterialIcon from "./MaterialIcon";
import { Button } from "./Button";
import { Link } from "gatsby";
import { SessionContext } from "../context";

type OwnProps = {
  cards: Flashcard[];
  onCardReview: (flashcard: Flashcard, grade: SuperMemoGrade) => void;
};

export default function CardViewer({
  cards,
  onCardReview,
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();
  const [session] = useContext(SessionContext);
  const { activeCard, reviews } = session ?? {};
  const [isDragging, setIsDragging] = useState(false);
  const dragBoundaries = useRef(null);
  const cardViewerRef = useRef(null);

  // TODO move to hook
  function handleFullScreen(el: HTMLDivElement | null) {
    if (el && screenfull.isEnabled) {
      screenfull
        .toggle(el)
        .then() // TODO show a notif
        .catch((err: Error) => console.error(err?.message, err));
    }
  }

  const reviewedCards = Object.values(reviews ?? {})
    .flat()
    .map((c) => c?.id);

  const reviewFilter = reviewedCards?.length
    ? (card) => !reviewedCards?.includes?.(card?.id)
    : () => true;

  return (
    <div
      className="card-viewer"
      ref={cardViewerRef}
      css={css`
        display: flex;
        flex-direction: column;
        background: radial-gradient(at center, white, whitesmoke);
        height: 100vh;
        position: relative;

        .nav-controls {
          ${flex({ justify: "space-between" })};
          position: relative;
          padding: 0.8rem 1rem;

          a {
            text-decoration: none;
          }

          button,
          a {
            padding: 0.25rem;

            .material-icons {
              margin: 0;
            }
          }
        }

        .card-area {
          ${flex()};
          flex-grow: 1;
          border-top: 1px solid ${theme?.colors?.stroke?.[2]};
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
        {/* TODO props */}
        <Button as={Link} to={"/"}>
          <MaterialIcon icon={"arrow_back"} />
        </Button>

        <Logo />

        {screenfull.isEnabled && (
          <Button
            onClick={() => handleFullScreen(cardViewerRef?.current)}
            title={"Toggle full-screen"}
          >
            <MaterialIcon icon={"fullscreen"} />
          </Button>
        )}
      </Container>

      <div className="card-area">
        <motion.div className="card-container" ref={dragBoundaries}>
          {cards?.filter?.(reviewFilter)?.map?.((card, i, cards) => {
            const first = i === 0;

            return (
              <motion.div
                key={card?.id}
                className={"card-wrapper"}
                data-card={"card__" + (i + 1)}
                drag={first ? "x" : false}
                dragElastic={0.8}
                dragConstraints={dragBoundaries}
                onDragStart={() => {
                  setIsDragging(true);
                }}
                onDragEnd={(_, info) => {
                  const dragMax = info.point.x;

                  if (Math.abs(dragMax) > DRAG_TRIGGER) {
                    // rate the card w/ the lowest grade
                    onCardReview(card, 0);
                  }

                  setIsDragging(false);
                }}
                style={{
                  cursor: first ? "grab" : "pointer",
                }}
                animate={{
                  zIndex: cards.length - i,
                }}
              >
                <CardWithFlip {...{ card, onCardReview, isDragging, i }} />
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
