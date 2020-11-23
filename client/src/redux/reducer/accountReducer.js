import { GET_USER } from '../actionTypes';


export function accountReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      console.log("reducer");
      return { ...action.payload };
    default:
      return state
  }
}