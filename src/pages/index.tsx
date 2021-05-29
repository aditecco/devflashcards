import * as React from "react";
import CardWithFlip from "../components/CardWithFlip";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  const {
    allMdx: { edges: cards },
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
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            topic
            timestamp
          }
        }
      }
    }
  }
`;
