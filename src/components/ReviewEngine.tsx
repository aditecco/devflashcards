/* ---------------------------------
ReviewEngine
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { supermemo, SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { CardNode, Flashcard, SupermemoProcessor } from "../types";

type OwnProps = {
  cards: CardNode[];
};

export default function ReviewEngine({
  cards,
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  // Initializes cards with
  // supermemo's default values
  function initCard(card: CardNode): Flashcard {
    return {
      ...card,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueDate: dayjs(Date.now()).toISOString(),
    };
  }

  // Passes cards through the algo and updates relevant values
  // based on the given grade.
  function practice(flashcard: Flashcard, grade: SuperMemoGrade): Flashcard {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);

    const dueDate = dayjs(Date.now()).add(interval, "day").toISOString();

    console.log({ ...flashcard, interval, repetition, efactor, dueDate });

    return { ...flashcard, interval, repetition, efactor, dueDate };
  }

  return (children as (
    c: Flashcard[],
    cb: SupermemoProcessor
  ) => React.ReactElement)(cards.map(initCard), practice);
}
