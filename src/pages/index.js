import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.test}</p>
    <p>{data.site.siteMetadata.test2}</p>
  </div>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        test
        test2
      }
    }
  }
`;
