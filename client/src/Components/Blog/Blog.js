import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetPostsAC } from '../../redux/actionCreators';
import Post from '../Post/Post'
import style from './Blog.module.css'

function Blog(props) {
  const dispatch = useDispatch();
  const {posts} = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchGetPostsAC());
  },[dispatch]);
  
  return <div className={style.container}>
    {posts?.length && posts.map(post => <Post key={post._id} post={post}/>).reverse()}
  </div>;
}

export default Blog;
