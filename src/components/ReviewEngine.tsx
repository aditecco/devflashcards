/* ---------------------------------
ReviewEngine
--------------------------------- */

import * as React from "react";
import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { supermemo, SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { CardNode, DateObject, Flashcard } from "../types";
import { SessionContext } from "../context";
import { DEFAULT_DATE_FORMAT } from "../constants/constants";

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
  let { initial: initialTime, current: currentTime } = time ?? {};
  const [cards, setCards] = useState(rawCards?.map?.(initCards) ?? []);
  const [session, setSession] = useContext(SessionContext);

  useEffect(() => {
    const timeKey = currentTime.format(DEFAULT_DATE_FORMAT);
    const cardsToReview = session?.reviews?.[timeKey];

    if (cardsToReview?.length) {
      // @ts-ignore
      setSession((session) => {
        delete session.reviews[timeKey];

        return session;
      });

      setCards((cards) => cardsToReview.concat(cards));
    }
  }, [cards]);

  // Initializes cards with supermemo's default values
  function initCards(card: CardNode): Flashcard {
    return {
      ...card?.node,
      interval: 0,
      repetition: 0,
      dueDate: initialTime.toISOString(),
      efactor: 2.5,
    };
  }

  // Passes cards through the algo and updates
  // relevant values based on the given grade.
  function practice(flashcard: Flashcard, grade: SuperMemoGrade): Flashcard {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);
    const dueDate = dayjs().add(interval, "day").toISOString();

    return {
      ...flashcard,
      interval,
      repetition,
      efactor,
      dueDate,
    };
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
