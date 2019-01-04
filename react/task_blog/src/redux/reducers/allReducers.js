import { combineReducers } from 'redux';
import post from './blogReducer';
import searchArr from './searchReducer';

const rootReducer = combineReducers({
    post: post,
    searchArr: searchArr,
})

export default rootReducer;