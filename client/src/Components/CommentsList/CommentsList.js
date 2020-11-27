import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import style from './CommentsList.module.css'

function CommentsList(props) {
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
  }, [props]);

  return (
    <div className={style.container}>
      {state.comments.length >= 1
        ? state.comments.map((el) => <Comment key={el._id} el={el} />)
        : null}
    </div>
  );
}

export default CommentsList;
