import React, { useEffect } from 'react';
import { useDespatch, useSelector } from 'react-redux';
import { fetchPostsAC } from '../../redux/actionCreators';
import Post from '../Post/Post'

function Blog(props) {
  const dispatch = useDespatch();
  const posts = useSelector((store) => store.post.posts);
  useEffect(() => {
    dispatch(fetchPostsAC(posts));
  });
  return <div>
    {posts && posts.map(el => <Post el={el}/>)}
  </div>;
}

export default Blog;
