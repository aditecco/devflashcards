/* ---------------------------------
SessionInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useContext } from "react";
import { DateObject, Flashcard } from "../types";
import dayjs from "dayjs";
import { css, useTheme } from "@emotion/react";
import { Container } from "./Container";
import { SmallHeading } from "./SmallHeading";
import { DateContext, SessionContext } from "../context";
import { SuperMemoGrade } from "supermemo";

type OwnProps = {
  cards: Flashcard[];
};

export default function SessionInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();
  const [session] = useContext(SessionContext);
  const { sessionStart: initDate, reviews, grades } = session ?? {};
  const { current: currentDate } = useContext(DateContext);

  // Get how many cards are in the review buckets
  function getReviewedCards() {
    return Object.values(reviews)?.flat?.()?.length;
  }

  // Get how many cards are passed, correct, or incorrect
  function getGradedItems(grade: SuperMemoGrade | SuperMemoGrade[]) {
    if (Array.isArray(grade)) {
      return grade.flatMap?.((g) => grades?.[g] ?? [])?.length;
    }

    return grades?.[grade]?.length;
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
            <span>{dayjs(initDate)?.format("DD/MM/YYYY HH:mm:ss")}</span>
          </li>

          <li>
            <SmallHeading>Due today</SmallHeading>
            <span>{cards?.length || "No cards for today"}</span>
          </li>

          <li>
            <SmallHeading>Reviewed</SmallHeading>
            <span>{getReviewedCards() || "-"}</span>
          </li>

          <li>
            <SmallHeading>Correct</SmallHeading>
            <span>{getGradedItems([5, 4, 3]) || "-"}</span>
          </li>

          <li>
            <SmallHeading>Incorrect</SmallHeading>
            <span>{getGradedItems([2, 1]) || "-"}</span>
          </li>

          <li>
            <SmallHeading>Passed</SmallHeading>
            <span>{getGradedItems(0) || "-"}</span>
          </li>
        </ul>
      </Container>
    </div>
  );
}
