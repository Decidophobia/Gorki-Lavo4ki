import React from 'react';
import Comment from '../Comment/Comment';
// import {useSelector, useDispatch} from 'react-redux';
// import {fetchGetCommentsAC} from '../../redux/actionCreators';
// import {store} from '../../redux/store';


function CommentsList(props) {
	// console.log(props);
	// const dispatch = useDispatch();
	// const comment = useSelector(store => store.posts);
	// useEffect(() => {
	// 	dispatch(fetchGetCommentsAC(props));
	// }, []);

	return (
		<div>
			{ props.comments.length >= 1 ? props.comments.map(el => <Comment key={el._id} el={ el }/>) : null }
		</div>
	);
}

export default CommentsList;
