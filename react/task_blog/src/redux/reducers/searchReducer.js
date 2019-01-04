export default function searchArr (state = [], action) {
    switch (action.type) {
        case 'searchForTitle': 
            return action.post.filter(el => el.title.includes(action.title));
        case 'clearSearchArr': 
            return [];
        default: 
            return state;
    }
}