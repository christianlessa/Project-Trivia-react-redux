import { combineReducers } from 'redux';
import token from './token';
import player from './player';
import answers from './answers';

const rootReducer = combineReducers({ token, player, answers });

export default rootReducer;
