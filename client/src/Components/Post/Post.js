import React, { useEffect } from 'react';

function Post({post}) {
  return (
    <div style={{ border: 'solid black', width: '30%', height: '40%'}}>
      <div>Автор: {post.authorID}</div>
      <div>Координаты: {post.coord}</div>
      <div>Описание: {post.description}</div>
      <img src={post.photo} style={{width: '50%', heigh: '35%'}}/>
      <div>Комментарии: {post.comments}</div>
    </div>
  );
}

export default Post;
