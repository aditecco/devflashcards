/* ---------------------------------
Home
--------------------------------- */

import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { slugify } from "../utils";
import { Container } from "../components/Container";
import { Grid } from "../components/Grid";
import SimpleCard from "../components/SimpleCard";

const Home = ({ data }) => {
  const {
    allDirectory: { edges: decks },
  } = data ?? {};

  return (
    <Layout>
      <Container>
        <Grid as={"ul"} style={{ padding: "1.5rem 0" }}>
          {decks?.map?.((deck, i) => (
            <li key={i}>
              <SimpleCard>
                <Link to={`/decks/` + slugify(deck?.node?.name)}>
                  {deck?.node?.name}
                </Link>
              </SimpleCard>
            </li>
          ))}
        </Grid>
      </Container>
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
