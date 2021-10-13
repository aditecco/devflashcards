/* ---------------------------------
types
--------------------------------- */

import dayjs from "dayjs";
import { SuperMemoGrade } from "supermemo";
import { Card } from "./gatsby-support";
import React from "react";

export * from "./theme";
export * from "./gatsby-support";

export type DateObject = {
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

type ReviewObject = Partial<Record<string, Flashcard[]>>;

export type InitialSessionContext = [
  Partial<SessionObject>,
  React.Dispatch<React.SetStateAction<SessionObject>>
];

export type SessionObject = {
  sessionStart: dayjs.Dayjs;
  activeCard: Flashcard;
  reviews: ReviewObject;
};
