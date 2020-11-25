import { GET_POSTS, ADD_POST } from '../actionTypes';
const initialState = {
  posts: [],
  
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return  action.payload ;
    case ADD_POST:
      return action.payload;
    default:
      return state;
  }
}
