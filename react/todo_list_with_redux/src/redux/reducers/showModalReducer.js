export default function showModal (state = false, action) {
    switch (action.type) {
        case 'toggleModal': 
        if (action.evt.target.className === "owerlay" || action.evt.target.className === "close" || action.evt.target.className === "openModal") {
            return !state}
            else break;
        default: 
            return state;
    }
}