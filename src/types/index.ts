/* ---------------------------------
types
--------------------------------- */

import dayjs from "dayjs";
import { SuperMemoGrade } from "supermemo";
import { Card } from "./gatsby-support";

export * from "./theme";
export * from "./gatsby-support";

export type TimeObject = {
  initial: dayjs.Dayjs;
  current: dayjs.Dayjs;
};

export type ReturnVoid = () => void;

export type SuperMemoDefaults = {
  interval: number;
  repetition: number;
  efactor: number;
  dueDate: string;
};

export type SupermemoProcessor = (
  flashcard: Flashcard,
  grade: SuperMemoGrade
) => Flashcard;

export type Flashcard = Card & SuperMemoDefaults;
