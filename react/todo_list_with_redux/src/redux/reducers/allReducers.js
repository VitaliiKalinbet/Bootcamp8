import {combineReducers} from 'redux'; 
import tasksReducer from './tasksReducer';
import text from './textReducer';
import showModalReducer from './showModalReducer';
import paintReducer from './paintReducer';

const rootReducer = combineReducers(
    {
    text: text,
    tasks: tasksReducer,
    showModal: showModalReducer,
    paint: paintReducer,
    }
)

export default rootReducer;