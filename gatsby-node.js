const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const FormationTemplate = path.resolve("./src/templates/formation.js");

  // Individual blogs pages
  const blog = graphql(`
    {
      allDatoCmsActualite{
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create product pages
    result.data.allDatoCmsActualite.edges.forEach(({ node }) => {
      createPage({
        path: `actu/${node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  });

  // Formations
  const actu = graphql(`
    {
      allDatoCmsListesFormation {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create atelier pages
    result.data.allDatoCmsListesFormation.edges.forEach(({ node }) => {
      createPage({
        path: `formations/${node.slug}`,
        component: FormationTemplate,
        context: { slug: node.slug },
      });
    });
  });

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([blog, actu]);
};
