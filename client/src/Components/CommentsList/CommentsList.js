import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

function CommentsList(props) {
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
  }, [props]);

  return (
    <div>
      {state.comments.length >= 1
        ? state.comments.map((el) => <Comment key={el._id} el={el} />)
        : null}
    </div>
  );
}

export default CommentsList;
