import React  from 'react';
import Like from '../Like/Like';
import Dislike from '../Dislike/Dislike';
import { useSelector } from 'react-redux';

function VoteList({id}) {
  const regexp = new RegExp(/"/gm);
  const likesDislikes = useSelector(store => store.posts)
  const userId = localStorage.getItem('userId').replace(regexp, '')
  //результат сравнения по юзер айди в массиве лайков/дизлайков всех постов - выводит тру или фолс
  const dislikeRes = likesDislikes.map(el =>  el.dislikes.some(id => id == userId));
  const likeRes = likesDislikes.map(el => el.likes.some(id => id == userId))
//подсчет длины массивов лайков/дизлайков - выводит массив с цифрами по всем постам
  const countLikes = likesDislikes.map(el => el.likes.length)
  console.log(countLikes);

  const countDislikes = likesDislikes.map(el => el.dislikes.length)
  console.log(countDislikes);

  //тут должна быть проверка на повторяющегося юзера в конкретном посте


  //
	return (
		<div>
			Vote list

<Like id={id}/>
<Dislike id={id}/>
			{/* { vote && vote.map(el => <Like el={ el.like }/>, <Dislike el={ el.dislike }/>) } */}

		</div>
	);
}

export default VoteList;
