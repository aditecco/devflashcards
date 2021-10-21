/* ---------------------------------
ReviewEngine
--------------------------------- */

import * as React from "react";
import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState
} from "react";
import { supermemo, SuperMemoGrade } from "supermemo";
import dayjs from "dayjs";
import { CardNode, DateObject, Flashcard } from "../types";
import { SessionContext } from "../context";
import { PERSISTED_SESSION_KEY, US_DATE_FORMAT } from "../constants/constants";

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

  // currentTime mock
  // Also set the variable as `let`
  // currentTime = dayjs().add(1, "day");

  useEffect(() => {
    setSession((s) => ({
      ...s,
      activeCard: s.activeCard ?? [...cards].shift(),
    }));
  }, []);

  useEffect(() => {
    /**
     * get all the reviews
     *
     * if reviews include today => prepend today
     *
     * if reviews include day before today => prepend day before today
     *
     * if reviews include today & day before today => prepend [day before today].concat(today)
     */

    const { reviews } = session ?? {};
    const reviewKeys = Object.keys(reviews);
    const toReviewToday = [];

    if (reviewKeys?.length) {
      for (const reviewDate of reviewKeys) {
        if (
          currentTime.isSame(reviewDate, "day") ||
          currentTime.isAfter(reviewDate, "day")
        ) {
          toReviewToday.push(reviews[reviewDate]);
        }
      }
    }

    console.log(toReviewToday);

    if (toReviewToday?.length) {
      setCards((cards) => toReviewToday.flat().concat(cards));

      setSession((session) => {
        if (reviewKeys?.length) {
          for (const k of reviewKeys) {
            delete session.reviews[k];
          }
        }

        return session;
      });
    }
  }, [cards]);

  // TODO move to hook
  useEffect(() => {
    sessionStorage?.setItem?.(PERSISTED_SESSION_KEY, JSON.stringify(session));
  }, [session]);

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
      US_DATE_FORMAT
    );

    setSession((s) => ({
      ...s,
      activeCard: cards[i + 1],
      reviews: {
        ...s.reviews,
        [simplifiedDueDate]: [
          ...(s.reviews[simplifiedDueDate] ?? []),
          reviewedCard,
        ],
      },
      grades: {
        ...s.grades,
        [grade]: [...(s.grades[grade] ?? []), reviewedCard.id],
      },
    }));

    setCards((cards) => [...cards.slice(0, i), ...cards.slice(i + 1)]);
  }

  return render(cards, reviewCard);
}
