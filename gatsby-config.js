module.exports = {
  siteMetadata: {
    title: 'Welcome to post ~',
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
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '--- end ---'
      },
    },
    
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
