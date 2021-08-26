/* ---------------------------------
Home
--------------------------------- */

import * as React from "react";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";
import Layout from "../components/Layout";
import ReviewEngine from "../components/ReviewEngine";
import { CardNode } from "../types";
import SessionInfo from "../components/SessionInfo";
import DebugInfo from "../components/DebugInfo";
import CurrentTime from "../components/CurrentTime";

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  return (
    <Layout>
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
};

export default IndexPage;

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
