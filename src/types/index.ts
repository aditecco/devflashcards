/* ---------------------------------
types
--------------------------------- */

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
