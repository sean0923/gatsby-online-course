import React from 'react';

const PostListing = ({post}) => {
  return (
    <article>
      <h3>{post.frontmatter.title}</h3>
      <span>{post.frontmatter.date}</span>
    </article>
  );
};

export default PostListing;