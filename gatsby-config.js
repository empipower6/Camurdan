module.exports = {
  siteMetadata: {
    title: `Camurdan Atolye`,
    description: `Camurdan Atolye'nin websitesidir.`,
    author: `Emre Kelleci`,
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
   `gatsby-plugin-manifest`,
   {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/content`,
      // supported language
      languages: [`en`, `tr`],
      // language file path
      defaultLanguage: `tr`,
      // option to redirect to `/ko` when connecting `/`
      redirect: false,
    },
  },
   
  ],
}
