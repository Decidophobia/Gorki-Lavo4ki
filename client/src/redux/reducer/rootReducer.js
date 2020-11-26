
import {combineReducers} from 'redux';
import {signupReducer} from './signupReducer';
import {loginReducer} from './loginReducer';
import {chatReducer} from './chatReducer';
import {postReducer} from './postReducer';
import {accountReducer} from './accountReducer';
import {voteReducer} from './voteReducer';
import {coordsReducer} from './coordsReducer';


export const rootReducer = combineReducers({
	signup: signupReducer,
	login: loginReducer,
	chat: chatReducer,
	posts: postReducer,
	account: accountReducer,
	vote: voteReducer,
	coords: coordsReducer,
});
