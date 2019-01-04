import axios from 'axios';

export function getFilmsArrFromServer () {
    return axios.get('http://localhost:3001/films');
}

export function postFilmsInServerArrFilms (data) {
    return axios.post('http://localhost:3001/films', data);
}

export function deleteFilmsFromServer (id) {
    return axios.delete(`http://localhost:3001/films/${id}`)
}