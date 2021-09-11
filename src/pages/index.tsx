/* ---------------------------------
Home
--------------------------------- */

import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { slugify } from "../utils";

const Home = ({ data }) => {
  const {
    allDirectory: { edges: decks },
  } = data ?? {};

  return (
    <Layout>
      <ul>
        {decks?.map?.((deck) => (
          <li>
            <Link to={`/decks/` + slugify(deck?.node?.name)}>
              {deck?.node?.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    allDirectory(filter: { name: { nin: ["pages", "decks"] } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
