/* ---------------------------------
Helpers
--------------------------------- */

// Sorts cards by date
import { Flashcard } from "../types";
import dayjs from "dayjs";

export function sortDates(card: Flashcard, nextCard: Flashcard) {
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
