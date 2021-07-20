/* ---------------------------------
ReviewEngine
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useState } from "react";
import { supermemo, SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { CardNode, Flashcard } from "../types";

type OwnProps = {
  cards: CardNode[];
};

export default function ReviewEngine({
  cards: rawCards,
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const [cards, setCards] = useState(rawCards?.map?.(initCard) ?? []);

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

    return { ...flashcard, interval, repetition, efactor, dueDate };
  }

  // Replaces a card in the card pool when the user reviews it
  // via the card buttons.
  function reviewCard(flashcard: Flashcard, grade: SuperMemoGrade) {
    const i = cards.findIndex((c) => c?.node?.id === flashcard?.node?.id);

    setCards((cards) => [
      ...cards.slice(0, i),
      practice(flashcard, grade),
      ...cards.slice(i + 1),
    ]);
  }

  return (children as (
    c: Flashcard[],
    cb: (flashcard: Flashcard, grade: SuperMemoGrade) => void
  ) => React.ReactElement)(cards, reviewCard);
}
