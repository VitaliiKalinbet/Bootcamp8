export default function sort (state = [], action) {
    switch (action.type) {
        case 'sortForAlphabet': 
            return [...action.films].sort((a, b) => a.title > b.title ? 1 : -1);
        case 'sortForYear':
            return [...action.films].sort((a,b) => b.year - a.year);
        case 'sortForBudget':
            return [...action.films].sort((a,b) => parseFloat(b.budget) - parseFloat(a.budget));
        case 'clearSort':
            return [];
        default:
            return state;
    }
};