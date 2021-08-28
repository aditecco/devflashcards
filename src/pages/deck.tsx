/* ---------------------------------
Deck
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import Layout from "../components/Layout";
import ReviewEngine from "../components/ReviewEngine";
import { CardNode } from "../types";
import CardViewer from "../components/CardViewer";
import SessionInfo from "../components/SessionInfo";
import DebugInfo from "../components/DebugInfo";
import CurrentTime from "../components/CurrentTime";
import { graphql } from "gatsby";

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
        render={(initial, current) => (
          <ReviewEngine
            cards={cards as CardNode[]}
            time={{ initial, current }}
            render={(flashcards, onCardReview) => (
              <>
                <CardViewer cards={flashcards} onCardReview={onCardReview}>
                  <SessionInfo cards={flashcards} time={{ initial, current }} />
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

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
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
