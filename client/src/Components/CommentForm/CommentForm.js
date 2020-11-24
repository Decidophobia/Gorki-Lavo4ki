import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAddCommentsAC} from '../../redux/actionCreators';

const regexp = new RegExp(/\"/gm);

function CommentForm(props) {

	const commentBody = useRef();
	const dispatch = useDispatch();

	const sendComment = (event) => {
		event.preventDefault();

		const commentText = {
			user: localStorage.getItem('name').replace(regexp, ''),
			text: commentBody.current.value,
		};
		dispatch(fetchAddCommentsAC(commentText));
	};

	return (
		<div>
			<form onSubmit={ sendComment } action="">
				<textarea ref={ commentBody } name="commentText" id="" cols="30" rows="10"/>
				<button>Отправить</button>
			</form>
		</div>
	);
}

export default CommentForm;
