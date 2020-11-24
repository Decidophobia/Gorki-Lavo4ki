import React, {useEffect} from 'react';
import Comment from '../Comment/Comment';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGetCommentsAC} from '../../redux/actionCreators'
import {store} from '../../redux/store';


function CommentsList(props) {
  const dispatch = useDispatch()
	const comment = useSelector(store => store.post.posts.comments);
useEffect(() => {
  dispatch(fetchGetCommentsAC())
},[dispatch])

	return (
		<div>
			CommentList
			{ comment && comment.map(el => <Comment key={ el.id } el={ el }/>) }
		</div>
	);
}

export default CommentsList;
