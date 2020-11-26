import { GET_POSTS, ADD_POST } from '../actionTypes';
const initialState = {
  posts: [],
  
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return  action.payload;
    case ADD_POST:
      return [...state,action.payload];
      case 'ADD_COMMENT':
        // console.log(action);
        const updatedPostArr = state.map(el => {
 
          if(el._id === action.payload.postId){
            el.comments.push(action.payload.comment)
            return el
          }else{
            return el
          }})
          // console.log(updatedPostArr);
     return updatedPostArr;
    default:
      return state;
  }
}
