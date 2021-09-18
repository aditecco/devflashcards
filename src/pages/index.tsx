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
import { useTheme } from "@emotion/react";

const Home = ({ data }) => {
  const {
    allDirectory: { edges: decks },
  } = data ?? {};

  const theme = useTheme();

  return (
    <Layout>
      <Container>
        <Heading
          style={{ textAlign: "center", marginTop: 48, marginBottom: 0 }}
        >
          Pick a deck
        </Heading>

        <Grid as={"ul"} style={{ padding: "1.5rem 0" }}>
          {decks?.map?.((deck, i) => {
            const displayIndex = i + 1;
            const { node } = deck ?? {};
            const { name, id } = node ?? {};

            return (
              <li key={i}>
                <SimpleCard>
                  <Link to={`/decks/` + slugify(name)} title={name}>
                    <div
                      style={{
                        padding: "1.8rem 1rem",
                        background: theme?.colors?.background?.gray?.[1],
                        borderTopLeftRadius: theme?.radii?.card,
                        borderTopRightRadius: theme?.radii?.card,
                      }}
                    >
                      <MutedText
                        size={16}
                        style={{
                          marginRight: 10,
                          borderBottom:
                            "2px solid " + theme?.colors?.typography?.[2],
                        }}
                      >
                        {displayIndex < 10 ? "0" + displayIndex : displayIndex}
                      </MutedText>

                      {truncate(name, 24)}
                    </div>

                    <footer
                      style={{
                        padding: ".5rem 1rem 1.25rem",
                      }}
                    >
                      <MutedText>{id.substring(0, 5)}</MutedText>
                    </footer>
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
