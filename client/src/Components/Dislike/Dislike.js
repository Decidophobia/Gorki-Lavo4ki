import React from 'react';
import {fetchDislikesAC} from '../../redux/actionCreators'
import { useDispatch } from 'react-redux';

function Dislike({id}) {
  const regexp = new RegExp(/"/gm);
  const userId = localStorage.getItem('userId').replace(regexp, '')
  const dispatch = useDispatch()
  const disliked = () => {
    dispatch(fetchDislikesAC({id, userId}))
  }
  return (
    <div>
      <button onClick={disliked}>dislike</button>
    </div>
  );
}

export default Dislike;
