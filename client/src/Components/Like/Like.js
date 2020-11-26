import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchLikesAC } from '../../redux/actionCreators';

function Like({ id }) {
  const regexp = new RegExp(/"/gm);
  const userId = localStorage.getItem('userId').replace(regexp, '')
  const dispatch = useDispatch();
  const likeClicked = () => {
    dispatch(fetchLikesAC({ id, userId }));
  };

  return (
    <div>
      <button onClick={likeClicked}>Like</button>
    </div>
  );
}

export default Like;
