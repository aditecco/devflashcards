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
  // grade ref: https://github.com/Maxvien/supermemo
  // 5: perfect response.
  // 4: correct response after a hesitation.
  // 3: correct response recalled with serious difficulty.
  // 2: incorrect response; where the correct one seemed easy to recall.
  // 1: incorrect response; the correct one remembered.
  // 0: complete blackout.

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
