/* ---------------------------------
types
--------------------------------- */

import { SuperMemoGrade } from "supermemo";

export type CardFrontmatter = {
  order?: number;
  timestamp?: string;
  deck?: string;
  topic?: string;
  contentSource?: string;
  title?: string;
  answer?: string;
};

export type GraphQLnode<T> = {
  node: T;
};

export type _Card = {
  id?: string;
  html?: string;
  frontmatter?: CardFrontmatter;
};

export type CardNode = GraphQLnode<_Card>;

export type SuperMemoDefaults = {
  interval: number;
  repetition: number;
  efactor: number;
  dueDate: string;
};

export type Flashcard = CardNode & SuperMemoDefaults;

export type SupermemoProcessor = (
  flashcard: Flashcard,
  grade: SuperMemoGrade
) => Flashcard;

export type ReturnVoid = () => void;
