export default function films (state = [], action) {
    switch (action.type) {
        case 'getFilms': 
            return [...action.films];
        case 'addFilms':
            return [...state, action.newFilmObj];
        case 'deleteFilms': 
            return state.filter(el => el.id !== action.id);
        default: 
            return state;
    }
}