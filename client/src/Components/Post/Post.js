import React, { useEffect } from 'react';

function Post(posts) {
  return (
    <div>
      {posts.authorID}
      {posts.coord}
      {posts.description}
      <img src={posts.photo} />
      {posts.comments}
    </div>
  );
}

export default Post;
