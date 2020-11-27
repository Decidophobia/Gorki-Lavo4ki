import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAddCommentsAC} from '../../redux/actionCreators';
import style from './CommentForm.module.css'

const regexp = new RegExp(/"/gm);

function CommentForm(props) {
	// console.log(props.id);

	const commentBody = useRef();
	const dispatch = useDispatch();

	const sendComment = (event) => {
		event.preventDefault();

		const commentText = {
			postId: props.id,
			user: localStorage.getItem('name').replace(regexp, ''),
			text: commentBody.current.value,
		};
		dispatch(fetchAddCommentsAC(commentText));
		commentBody.current.value = '';
	};
	return (
		<div className={style.container}>
			<form onSubmit={ sendComment } action="" className={style.form}>
				<textarea ref={ commentBody } name="commentText" placeholder="Комментарий..." cols="30" rows="6" className={style.text}/>
				<button className={style.btn}>Отправить</button>
			</form>
		</div>
	);
}

export default CommentForm;
