/* ---------------------------------
ReviewEngine
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { supermemo, SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { CardNode, Flashcard } from "../types";

type OwnProps = {
  cards: CardNode[];
  time: { initial: dayjs.Dayjs; current: dayjs.Dayjs };
  render: (
    cards: Flashcard[],
    onReview: (flashcard: Flashcard, grade: SuperMemoGrade) => void,
    date: dayjs.Dayjs
  ) => ReactElement;
};

export default function ReviewEngine({
  cards: rawCards,
  time,
  render,
}: PropsWithChildren<OwnProps>): ReactElement {
  const [cards, setCards] = useState(
    rawCards?.map?.(initCard)?.sort?.(sortDates) ?? []
  );

  useEffect(() => {}, [cards]);

  // Initializes cards with
  // supermemo's default values
  function initCard(card: CardNode): Flashcard {
    return {
      ...card,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueDate: dayjs().toISOString(),
    };
  }

  //
  function sortDates(a, b) {
    const x = dayjs(a.dueDate).unix();
    const y = dayjs(b.dueDate).unix();

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    return 0;
  }

  // Passes cards through the algo and updates relevant values
  // based on the given grade.
  function practice(flashcard: Flashcard, grade: SuperMemoGrade): Flashcard {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);

    const dueDate = dayjs(flashcard.dueDate).add(interval, "day").toISOString();

    return { ...flashcard, interval, repetition, efactor, dueDate };
  }

  // Replaces a card in the card pool when the user reviews it
  // via the card buttons.
  function reviewCard(flashcard: Flashcard, grade: SuperMemoGrade) {
    const i = cards.findIndex((c) => c?.node?.id === flashcard?.node?.id);

    setCards((cards) =>
      [
        ...cards.slice(0, i),
        practice(flashcard, grade),
        ...cards.slice(i + 1),
      ].sort(sortDates)
    );
  }

  return render(cards, reviewCard, time.current);
}
