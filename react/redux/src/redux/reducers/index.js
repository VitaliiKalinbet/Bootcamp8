import {combineReducers} from 'redux'; // объединяет все поля в один объект
import count from '../reducers/counterReducer';

const rootReducer = combineReducers({
    count: count,
})

export default rootReducer;