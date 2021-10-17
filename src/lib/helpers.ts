/* ---------------------------------
Helpers
--------------------------------- */

// Sorts cards by date
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { SuperMemoGrade } from "supermemo";

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

export function getSuperMemoGradeDescriptions(n: SuperMemoGrade) {
  switch (n) {
    case 0:
      return "Complete blackout.";
    case 1:
      return "Incorrect response; the correct one remembered.";
    case 2:
      return "Incorrect response; where the correct one seemed easy to recall.";
    case 3:
      return "Correct response recalled with serious difficulty.";
    case 4:
      return "Correct response after a hesitation.";
    case 5:
      return "Perfect response.";
    default:
      return "No label";
  }
}
