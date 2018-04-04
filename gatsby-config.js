module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    test: 'testing siteMetaData',
    test2: 'testing siteMetaDataaa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
