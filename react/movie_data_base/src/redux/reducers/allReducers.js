import { combineReducers } from 'redux';
import films from './filmsReducer';
import sort from './sortReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    films: films,
    form: formReducer,
    sortFilms: sort,
})

export default rootReducer;