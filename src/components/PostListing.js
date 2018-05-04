import React from 'react';

const PostListing = ({post}) => {
  console.log('post: ', post);
  return (
    <article>
      <h3>{post.frontmatter.title}</h3>
      <span>{post.frontmatter.date}</span>
      <p>{post.excerpt}</p>
    </article>
  );
};

export default PostListing;