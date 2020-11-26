import React, { useLayoutEffect } from 'react';
import Like from '../Like/Like';
import Dislike from '../Dislike/Dislike';
import { useSelector } from 'react-redux';
import { votesOrCount, count } from './votelist.module.css';

function VoteList({ id, post }) {
  let isCheckedIn = false;
  const regexp = new RegExp(/"/gm);
  const userId = localStorage.getItem('userId').replace(regexp, '');

  const dislikeRes = post && post.dislikes.some((id) => id == userId);
  const likeRes = post && post.likes.some((id) => id == userId);

  isCheckedIn = dislikeRes || likeRes;

  const countLikes = post.likes.length;
  const countDisikes = post.dislikes.length;

  return (
    <>
      <div>Likes: {countLikes}</div>
      <div>Dislikes: {countDisikes}</div>
      <div className={isCheckedIn ? count : votesOrCount}>
        <Like id={id} />
        <Dislike id={id} />
      </div>
    </>
  );
}

export default VoteList;
