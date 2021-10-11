/* ---------------------------------
ReviewEngine
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { supermemo, SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { CardNode, DateObject, Flashcard } from "../types";

type OwnProps = {
  cards: CardNode[];
  time: DateObject;
  render: (
    flashcards: Flashcard[],
    onReview: (flashcard: Flashcard, grade: SuperMemoGrade) => void
  ) => ReactElement;
};

export default function ReviewEngine({
  cards: rawCards,
  time,
  render,
}: PropsWithChildren<OwnProps>): ReactElement {
  const [cards, setCards] = useState(
    rawCards?.map?.(initCards)?.sort?.(sortDates) ?? []
  );

  useEffect(() => {
    const matches = cards
      ?.filter?.((c) => {
        const cardTimestamp = dayjs(c.dueDate).unix();

        return (
          cardTimestamp > time.initial.unix() &&
          cardTimestamp === time.current.unix()
        );
      })
      ?.map?.((c) => c.id);

    if (matches?.length) {
      setCards(
        cards.sort((a, b) => {
          if (matches.includes(b.id)) {
            return 1;
          }
        })
      );
    }
  }, [time, cards]);

  // Initializes cards with supermemo's default values
  function initCards(card: CardNode): Flashcard {
    return {
      ...card?.node,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueDate: time.initial.toISOString(), // TODO keep it as unix, convert to string only for parsing
    };
  }

  // Sorts cards by date
  function sortDates(card: Flashcard, nextCard: Flashcard) {
    const date = dayjs(card.dueDate).unix();
    const nextDate = dayjs(nextCard.dueDate).unix();

    if (date > nextDate) {
      return 1;
    }

    if (date < nextDate) {
      return -1;
    }

    return 0;
  }

  // Passes cards through the algo and updates
  // relevant values based on the given grade.
  function practice(flashcard: Flashcard, grade: SuperMemoGrade): Flashcard {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);

    const dueDate = dayjs().add(interval, "day").toISOString();

    // TODO remove
    console.log("UNIX >>> ", dayjs().add(interval, "day").unix());

    return { ...flashcard, interval, repetition, efactor, dueDate };
  }

  // Replaces a card in the card pool when
  // the user  reviews it via the card buttons.
  function reviewCard(flashcard: Flashcard, grade: SuperMemoGrade) {
    const i = cards.findIndex((c) => c?.id === flashcard?.id);
    const reviewedCard = practice(flashcard, grade);
    const simplifiedDueDate = dayjs(reviewedCard?.dueDate).format(
      DEFAULT_DATE_FORMAT
    );

    // @ts-ignore
    setSession((s) => ({
      ...s,
      reviews: {
        ...s.reviews,
        [simplifiedDueDate]: [
          ...(s.reviews[simplifiedDueDate] ?? []),
          reviewedCard,
        ],
      },
    }));

    setCards((cards) => [...cards.slice(0, i), ...cards.slice(i + 1)]);
  }

  return render(cards, reviewCard);
}
