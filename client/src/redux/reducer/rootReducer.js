import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { chatReducer } from './chatReducer';
import { postReducer } from './postReducer';
import { accountReducer } from './accountReducer';
import { voteReducer } from './voteReducer';
<<<<<<< HEAD
import {commentReducer} from './commentReducer';

=======
import {coordsReducer} from './coordsReducer';
>>>>>>> af1271176936773f5462ccc716b35f782e9b2646

export const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  chat: chatReducer,
  post: postReducer,
  account: accountReducer,
  vote: voteReducer,
  comment: commentReducer,
  coords: coordsReducer,
});
