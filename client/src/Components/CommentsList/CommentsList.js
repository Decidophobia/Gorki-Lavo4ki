import React from 'react';
import Comment from '../Comment/Comment';
import {useSelector} from 'react-redux';
import {store} from '../../redux/store';


function CommentsList(props) {

	const comment = useSelector(store => store);


	return (
		<div>
			CommentList
			{ comment && comment.map(el => <Comment key={ el.id } el={ el }/>) }
		</div>
	);
}

export default CommentsList;
