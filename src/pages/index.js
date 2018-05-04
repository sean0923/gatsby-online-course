import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allMarkdownRemark.edges.map(({ node }, idx) => {
      console.log('node: ', node);
      return <div key={idx}>test</div>;
    })}
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        test
        test2
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YY ddd")
          }
          html
        }
      }
    }
  }
`;
