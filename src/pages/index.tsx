import * as React from "react";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";
import { CardNode } from "../types";

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  return (
    <>
      <CardViewer cards={cards as CardNode[]} />
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
