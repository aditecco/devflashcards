/* ---------------------------------
Deck
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";
import CurrentTime from "../components/CurrentTime";
import SessionInfo from "../components/SessionInfo";
import ReviewEngine from "../components/ReviewEngine";
import DebugInfo from "../components/DebugInfo";

type OwnProps = { data };

export default function Deck({
  data,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  return (
    <Layout bare>
      <CurrentTime
        render={(time) => (
          <ReviewEngine
            {...{ cards, time }}
            render={(flashcards, onCardReview) => (
              <>
                <CardViewer cards={flashcards} onCardReview={onCardReview}>
                  <SessionInfo {...{ cards: flashcards, time }} />
                </CardViewer>

                <DebugInfo cards={flashcards} />
              </>
            )}
          />
        )}
      />
    </Layout>
  );
}

// `$name` is forwarded from gatsby-node's context
export const query = graphql`
  query ($name: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { deck: { eq: $name } } }
      sort: { fields: frontmatter___order }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            order
            timestamp
            deck
            topic
            contentSource
            title
            answer
          }
        }
      }
    }
  }
`;
