import {ADD_COMMENT} from '../actionTypes';

export function commentReducer(state = {}, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return {...state, comments: action.payload};
		default:
			return state;
	}
}
