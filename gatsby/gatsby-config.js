module.exports = {
  siteMetadata: {
    title: `Lara Ercoli`,
    description: `Docente di Matematica a Brescia. Insegnante di matematica nella scuola secondaria di secondo grado. Esercitatrice del corso di Algebra e Geometria presso la facoltà di Ingegneria`,
    author: `@davidebrognoli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Lato`,
              variants: [`300`, `400`, `500`, `700`],
            },
            {
              family: `Lora`,
              variants: [`700`],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "xg5ljnpz",
        dataset: "production",
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KRLR2M4",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-cookiebot",
      options: {
        cookiebotId: "c2f6a2fe-df03-498c-971e-dba917c7838b",
        manualMode: false,
        blockGtm: true,
        includeInDevelopment: true,
        pluginDebug: false,
      },
    },
  ],
}
