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
    allMarkdownRemark {
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
