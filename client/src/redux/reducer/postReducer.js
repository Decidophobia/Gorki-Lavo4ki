import { GET_POSTS, ADD_POST, ADD_COMMENT, ADD_LIKE, ADD_DISLIKE } from '../actionTypes';

export function postReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return  action.payload;
    case ADD_POST:
      return [...state,action.payload];
      case ADD_COMMENT:      
        const updatedPostArr = state.map(el => {
          if(el._id === action.payload.postId){
            el.comments.push(action.payload.comment)
            return el
          }else{
            return el
          }})
        return updatedPostArr;
      case ADD_LIKE: 
      return state.map(el => {
        if(el._id === action.payload._id){
          el.likes = [...action.payload.likes]
          return el
        }else{
          return el
        }})
        case ADD_DISLIKE:
          return state.map(el => {
            if(el._id === action.payload._id){
              el.dislikes = [...action.payload.dislikes]
              return el
            }else{
              return el
            }})
    default:
      return state;
  }
}
