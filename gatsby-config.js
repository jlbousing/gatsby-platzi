
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

console.log("probando dotenv",process.env.STRIPE_SK);

module.exports = {
  siteMetadata: {
    title: `PlatziSWAG`,
    description: `El mejor swag de platzi disponible para ti`,
    author: `@jlbousing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product","Price"],
        secretKey: process.env.STRIPE_SK
      }
    }
  ],
}
