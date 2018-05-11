import {combineReducers} from 'redux';
import book from './bookReducer';
import user from './userReducer';

export default combineReducers({
    book,
    user
});