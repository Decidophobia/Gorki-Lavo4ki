import { GET_POSTS, ADD_POST } from '../actionTypes';
const initialState = {
  posts: []
}

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: action.payload };
    default:
      return state
  }
}
