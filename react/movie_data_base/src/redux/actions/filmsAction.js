import { getFilmsArrFromServer, postFilmsInServerArrFilms, deleteFilmsFromServer } from '../../api/api';

export const getFilms = (films) => {
    return {
        type: 'getFilms',
        films: films,
    }
}

export const addFilms = (newFilmObj) => {
    console.log(newFilmObj);
    return {
        type: 'addFilms',
        newFilmObj: newFilmObj,
    }
}

export const deleteFilms = (id) => {
    return {
        type: 'deleteFilms',
        id: id,
    }
}

export const fetchDataget = () => dispatch => {
    return getFilmsArrFromServer()
    .then(res => dispatch(getFilms(res.data)))
    .catch(err => console.log(err))
}

export const postData = (data) => dispatch => {
    return postFilmsInServerArrFilms(data)
    .then(res => dispatch(addFilms(res.data)))
    .catch(err => console.log(err))
}

export const deleteFilm = (id) => dispatch => {
    return deleteFilmsFromServer(id)
    .then(() => dispatch(deleteFilms(id)))
    .catch(err => console.log(err))
}