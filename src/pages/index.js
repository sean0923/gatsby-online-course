import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h1>Post</h1>
    {/* <h2>{data.site.siteMetadata.title}</h2> */}
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return <PostListing key={node.id} post={node} />;
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
          excerpt
        }
      }
    }
  }
`;
