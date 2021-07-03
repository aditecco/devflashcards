import * as React from "react";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";
import { CardNode } from "../types";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  return (
    <>
      <Layout>
        <CardViewer cards={cards as CardNode[]} />
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
