// gatsby-node.js
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/Product.js`);
  const result = await graphql(`
    query GET_PRICES {
        allStripePrice {
            edges {
              node {
                product {
                  metadata {
                    descripcion
                    img
                    wear
                    name
                  }
                  id
                  description
                }
                unit_amount_decimal
              }
            }
          }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allStripePrice.edges.forEach(({ node }) => {
      console.log("probando nodo ",JSON.stringify(node.product.id));
    createPage({
      path: `${node.product.id}`,
      component: productTemplate,
      context: {
          data: node
      }
    });
  });
}