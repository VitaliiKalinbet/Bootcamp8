import moment from 'moment';

export default function now (state = moment(), action) {
    switch (action.type) {
        case 'showNextMonth': 
            let today = state.clone();
            return today.add(1, 'M');
        case 'showPrevMonth': 
            let tod = state.clone();
            return tod.subtract(1, 'M');
        default: 
            return state;
    }
}