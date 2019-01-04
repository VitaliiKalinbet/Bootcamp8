import uuid from 'uuid';

export default function tasks (state = [], action) {
    switch (action.type) {
        case 'createObj': 
            let item = {
                    id: uuid(),
                    text: action.text,
                    complete: false,
                }
            return [item, ...state];
        case 'toggleComplete': 
            let id = action.evt;
            return state.map(el => el.id === id ? {...el, complete: !el.complete}: el);
        case 'deleteLi': 
            let id2 = action.evt;
            return state.filter(el => el.id !== id2);
        default: 
            return state;
    }
}