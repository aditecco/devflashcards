import * as React from "react";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";
import Layout from "../components/Layout";
import ReviewEngine from "../components/ReviewEngine";
import { CardNode, Flashcard, SupermemoProcessor } from "../types";

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  return (
    <>
      <Layout>
        <ReviewEngine cards={cards as CardNode[]}>
          {(flashcards: Flashcard[], onCardReview: SupermemoProcessor) => (
            <CardViewer cards={flashcards} onCardReview={onCardReview} />
          )}
        </ReviewEngine>
      </Layout>
    </>
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
