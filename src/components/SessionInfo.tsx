/* ---------------------------------
SessionInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { css, useTheme } from "@emotion/react";

type OwnProps = {
  cards: Flashcard[];
};

export default function SessionInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    cards?.length && setCurrentDate(dayjs());
  }, [cards]);

  // Get how many cards are due in the same date as `currentDate`
  function computeTodaysCards(c: Flashcard) {
    return (
      dayjs(c.dueDate).format("DD/MM/YYYY") === currentDate.format("DD/MM/YYYY")
    );
  }

  // Get how many cards are not due in the same date as `currentDate`
  function computeNextUpCards(c: Flashcard) {
    return (
      dayjs(c.dueDate).format("DD/MM/YYYY") !== currentDate.format("DD/MM/YYYY")
    );
  }

  return (
    <div
      css={css`
        border-bottom: 1px solid ${theme?.colors?.stroke?.[2]};

        ul {
          display: flex;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        li {
          padding: 1rem 1.5rem;

          &:first-child {
            padding-left: 1rem;
          }

          &:last-child {
            padding-right: 1rem;
          }

          + li {
            //padding-left: 1rem;
            border-left: 1px solid ${theme?.colors?.stroke?.[2]};
          }

          h6 {
            margin: 0 0 0.5rem;
            font-size: 0.7rem;
            font-weight: normal;
            color: ${theme?.colors?.typography?.[2]};
            text-transform: uppercase;
          }
        }
      `}
    >
      <ul>
        <li>
          <h6>Your session</h6>
          <span>{currentDate?.format("DD/MM/YYYY")}</span>
        </li>

        <li>
          <h6>Due today</h6>
          <span>
            {cards?.filter?.(computeTodaysCards)?.length ||
              "No cards for today"}
          </span>
        </li>

        <li>
          <h6>Next up</h6>
          <span>{cards?.filter?.(computeNextUpCards)?.length || "-"}</span>
        </li>

        <li>
          <h6>Correct</h6>
          <span></span>
        </li>

        <li>
          <h6>Incorrect</h6>
          <span></span>
        </li>

        <li>
          <h6>Passed</h6>
          <span></span>
        </li>
      </ul>
    </div>
  );
}
