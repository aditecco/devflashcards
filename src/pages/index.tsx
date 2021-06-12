import * as React from "react";
import { graphql } from "gatsby";
import CardViewer from "../components/CardViewer";

// markup
const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  console.log(data);

  return (
    <>
      <CardViewer cards={cards} />
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
          headings {
            depth
            value
          }
          frontmatter {
            order
            timestamp
            topic
            deck
            contentSource
            title
            answer
          }
        }
      }
    }
  }
`;
