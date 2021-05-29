import * as React from "react";
import CardWithFlip from "../components/CardWithFlip";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: cards },
  } = data ?? {};

  console.log(data);

  return (
    <main>
      {cards?.map?.((card) => (
        <CardWithFlip key={card?.node?.id} card={card?.node} />
      ))}
    </main>
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
          headings {
            depth
            value
          }
          frontmatter {
            timestamp
            topic
            title
            question
            answer
          }
        }
      }
    }
  }
`;
