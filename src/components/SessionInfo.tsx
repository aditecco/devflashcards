/* ---------------------------------
SessionInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { Flashcard, TimeObject } from "../types";
import dayjs from "dayjs";
import { css, useTheme } from "@emotion/react";
import { Container } from "./Container";
import { SmallHeading } from "./SmallHeading";

type OwnProps = {
  cards: Flashcard[];
  time: TimeObject;
};

export default function SessionInfo({
  cards,
  time,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  const { current: currentDate, initial: initDate } = time;

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
        border-top: 1px solid ${theme?.colors?.stroke?.[2]};
        overflow-x: auto;

        ul {
          display: flex;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        li {
          padding: 1rem 1.5rem;
          font-size: 0.9rem;
          white-space: nowrap;

          &:first-child {
            padding-left: 1rem;
            min-width: 200px; // TODO
          }

          &:last-child {
            padding-right: 1rem;
          }

          + li {
            //padding-left: 1rem;
            border-left: 1px solid ${theme?.colors?.stroke?.[2]};
          }
        }
      `}
    >
      <Container>
        <ul>
          {/*<li>*/}
          {/*  <SmallHeading>Current session</SmallHeading>*/}
          {/*  <span>{currentDate?.format("DD/MM/YYYY HH:mm:ss")}</span>*/}
          {/*</li>*/}

          <li>
            <SmallHeading>Session start</SmallHeading>
            <span>{initDate?.format("DD/MM/YYYY HH:mm:ss")}</span>
          </li>

          <li>
            <SmallHeading>Due today</SmallHeading>
            <span>
              {cards?.filter?.(computeTodaysCards)?.length ||
                "No cards for today"}
            </span>
          </li>

          <li>
            <SmallHeading>Up next</SmallHeading>
            <span>{cards?.filter?.(computeNextUpCards)?.length || "-"}</span>
          </li>

          <li>
            <SmallHeading>Correct</SmallHeading>
            <span>-</span>
          </li>

          <li>
            <SmallHeading>Incorrect</SmallHeading>
            <span>-</span>
          </li>

          <li>
            <SmallHeading>Passed</SmallHeading>
            <span>-</span>
          </li>
        </ul>
      </Container>
    </div>
  );
}
