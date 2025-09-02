module.exports = {
  siteMetadata: {
    title: `Lara Ercoli`,
    description: `Docente di Matematica a Brescia. Insegnante di matematica nella scuola secondaria di secondo grado. Esercitatrice del corso di Algebra e Geometria presso la facoltà di Ingegneria`,
    author: `@davidebrognoli`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    `gatsby-plugin-remove-generator`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato:300,400,500,700`,
          `Lora:700`
        ],
        display: 'swap',
        preconnect: true,
        crossOrigin: 'anonymous',
      },
    },
    `gatsby-plugin-sass`,
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
  ],
}
