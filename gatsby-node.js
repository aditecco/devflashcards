/* ---------------------------------
gatsby-node
--------------------------------- */

const path = require("path");
// const { slugify } = require("./src/utils");

function slugify(str) {
  if (str.indexOf(" ") === -1) return str;

  return str.toLowerCase().replace(/\s/g, "-");
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allDirectory(filter: { name: { nin: ["pages", "decks"] } }) {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const component = path.resolve(`src/templates/deck.tsx`);

  result.data.allDirectory.edges.forEach(({ node }) => {
    const { name } = node;
    const path = `/decks/` + slugify(name);

    createPage({
      path,
      component,
      context: {
        ...node,
      },
    });
  });
};
