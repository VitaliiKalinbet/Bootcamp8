import { combineReducers } from 'redux';
import now from '../reducers/nowReducers';
import days from '../reducers/daysReducer';

const rootReducer = combineReducers({
    now: now,
    days: days,
})

export default rootReducer;