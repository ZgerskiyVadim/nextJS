import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { appReducer } from './app';

const reducers = combineReducers({
    Posts: postsReducer,
    App: appReducer
});

export default reducers;