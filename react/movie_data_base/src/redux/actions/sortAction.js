export const sortForAlphabet = (films) => {
    return {
        type: 'sortForAlphabet',
        films,
    }
}

export const sortForYear = (films) => {
    return {
        type: 'sortForYear',
        films,
    }
}

export const sortForBudget = (films) => {
    return {
        type: 'sortForBudget',
        films,
    }
}

export const clearSort = (films) => {
    return {
        type: 'clearSort',
        films,
    }
}