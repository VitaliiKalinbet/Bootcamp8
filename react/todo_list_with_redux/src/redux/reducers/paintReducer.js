export default function paint (state = [], action) {
    switch (action.type) {
        case 'showCompleteTasks':
            return action.tasks.filter(el => el.complete === true);
        case 'showNotCompleteTasks': 
            return action.tasks.filter(el => el.complete === false);
        case 'clearPaint':
            return [];
        default:
            return state;
    }
}