/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `zephyr ASBL - Visé`,
    description: `Site internet de l'ASBL Zephyr à Visé`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", `gatsby-plugin-styled-components`, "gatsby-plugin-sitemap",
  'gatsby-plugin-postcss',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx","gatsby-plugin-netlify", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Montserrat",
            variants: ["400", "500", "600", "800"],
            useMinify: true,
            usePreload: true,
            fontDisplay: "swap",
            strategy: "selfHosted", // 'base64' || 'cdn'
          },
          {
            family: "Roboto",
            variants: ["400", "500", "600", "800"],
            useMinify: true,
            usePreload: true,
            fontDisplay: "swap",
            strategy: "selfHosted", // 'base64' || 'cdn'
          },
        ],
      },
    },
  },
  {
    resolve: `gatsby-source-datocms`,
    options: {
      // You can find your read-only API token under the Settings > API tokens
      // section of your administrative area. Make sure to grant both CDA and CMA permissions.
      apiToken: `dd215a179fbcd9ba676cd92d0ea7e7`,

      // The project environment to read from. Defaults to the primary environment:
      environment: `main`,

      // If you are working on development/staging environment, you might want to
      // preview the latest version of records instead of the published one:
      previewMode: false,

      // Disable automatic reloading of content when some change occurs on DatoCMS:
      disableLiveReload: false,

      // Custom API base URL (you probably don't need this!)
      // apiUrl: 'https://site-api.datocms.com',

      // Limits page size and can be used to avoid build timeouts.
      // Default is 500 (also the maximum)
      pageSize: 500,
    },
  },

  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `roboto`,
        `montserrat` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};