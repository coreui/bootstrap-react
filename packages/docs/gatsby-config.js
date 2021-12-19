/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require(`./package.json`)

module.exports = {
  siteMetadata: {
    title: `Bootstrap React`,
    titleTemplate: `%s · Bootstrap React`,
    description: `Bootstrap React is Bootstrap 5 UI Component library written in TypeScript, and ready for your next React.js project.`,
    author: `@coreui_io`,
    url: `https://coreui.io/bootstrap-react/`,
    siteUrl: `https://coreui.io/bootstrap-react/`,
    image: ``, // Path to your image you placed in the `static` folder
    twitterUsername: `@coreui_io`,
  },
  pathPrefix: `bootstrap-react/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `${__dirname}/src/assets/images/brand/icon.png`,
        name: `Bootstrap React`,
        short_name: `Bootstrap React`,
        start_url: `https://coreui.io/bootstrap-react/`,
        background_color: `#fff`,
        theme_color: `#321fdb`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/${pkg.config.version_short}/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          docs: require.resolve(`./src/templates/Docs.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./src/plugins/gatsby-remark-import-markdown`),
            options: {
              directory: `${__dirname}/content/${pkg.config.version_short}/api/`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-link`,
              icon: `<span>#</span>`,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          '/api/*', // you can also pass valid RegExp to exclude internal tags for example
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `UA-118965717-1`, // Google Analytics / GA
        ],
      },
    },
  ],
}
