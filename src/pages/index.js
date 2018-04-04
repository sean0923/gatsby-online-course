import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Img sizes={data.caveLightImg.sizes} />
    <Img sizes={data.seaForestImg.sizes} />
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
    caveLightImg: imageSharp(id: { regex: "/cave-light.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    seaForestImg: imageSharp(id: { regex: "/sea-forest.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
