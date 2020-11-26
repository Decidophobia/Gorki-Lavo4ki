import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import { useSelector, useDispatch } from 'react-redux';
// import {fetchGetCommentsAC} from '../../redux/actionCreators';
// import {store} from '../../redux/store';

function CommentsList(props) {
  // console.log(props);
  // const dispatch = useDispatch();
  const comment = useSelector(store => store.posts);
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
    
  }, []);

  return (
    <div>
      {state.comments.length >= 1
        ? state.comments.map((el) => <Comment key={el._id} el={el} />)
        : null}
    </div>
  );
}

export default CommentsList;
