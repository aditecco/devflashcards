/* ---------------------------------
Home
--------------------------------- */

import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { slugify, truncate } from "../utils";
import { Container } from "../components/Container";
import { Grid } from "../components/Grid";
import SimpleCard from "../components/SimpleCard";
import { MutedText } from "../components/MutedText";
import { Heading } from "../components/Heading";

const Home = ({ data }) => {
  const {
    allDirectory: { edges: decks },
  } = data ?? {};

  return (
    <Layout>
      <Container>
        <Heading style={{ textAlign: "center" }}>Pick a deck</Heading>

        <Grid as={"ul"} style={{ padding: "1.5rem 0" }}>
          {decks?.map?.((deck, i) => {
            const displayIndex = i + 1;

            return (
              <li key={i}>
                <SimpleCard>
                  <Link to={`/decks/` + slugify(deck?.node?.name)}>
                    <MutedText size={16} style={{ marginRight: 8 }}>
                      {displayIndex < 10 ? "0" + displayIndex : displayIndex}
                    </MutedText>

                    {truncate(deck?.node?.name)}
                  </Link>
                </SimpleCard>
              </li>
            );
          })}
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
          id
        }
      }
    }
  }
`;
