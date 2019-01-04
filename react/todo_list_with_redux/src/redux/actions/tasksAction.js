export const createObj = (text) => {
    return {
        type: 'createObj',
        text: text,
    }
}

export const toggleComplete = (evt) => {
    return {
        type: 'toggleComplete',
        evt: evt.target.id,
    }
}

export const deleteLi = (evt) => {
    return {
        type: 'deleteLi',
        evt: evt.target.dataset.id,
    }
}