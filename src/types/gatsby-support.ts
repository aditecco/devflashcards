/* ---------------------------------
types
--------------------------------- */

export type GraphQLnode<T = unknown> = {
  node: T;
};

export type GraphQLedges = {
  edges: GraphQLnode[];
};

export type CardFrontmatter = {
  order?: number;
  timestamp?: string;
  deck?: string;
  topic?: string;
  contentSource?: string;
  title?: string;
  answer?: string;
};

export type Card = {
  id?: string;
  html?: string;
  frontmatter?: CardFrontmatter;
};

export type CardNode = GraphQLnode<Card>;
