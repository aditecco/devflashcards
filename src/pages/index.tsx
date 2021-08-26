import * as React from "react";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";
import Layout from "../components/Layout";
import ReviewEngine from "../components/ReviewEngine";
import { CardNode, Flashcard } from "../types";
import { SuperMemoGrade } from "supermemo";
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
        render={(time) => (
          <ReviewEngine
            cards={cards as CardNode[]}
            currentDate={time}
            render={(flashcards, onCardReview, currentDate) => (
              <>
                <DebugInfo cards={flashcards} />

                <CardViewer cards={flashcards} onCardReview={onCardReview}>
                  <SessionInfo cards={flashcards} currentDate={currentDate} />
                </CardViewer>
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
