import {GET_COORDS} from '../actionTypes';

export const coordsReducer = (state =[], action) => {
  switch (action.type) {
    case GET_COORDS:
      return action.payload
    default:
      return state
  }
}
