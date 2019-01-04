export const showCompleteTasks = (tasks) => { 
    return {
        type: 'showCompleteTasks',
        tasks: tasks,
    }
}

export const showNotCompleteTasks = (tasks) => {
    return {
        type: 'showNotCompleteTasks',
        tasks: tasks,
    }
}

export const clearPaint = () => {
    return {
        type: 'clearPaint',
    }
}