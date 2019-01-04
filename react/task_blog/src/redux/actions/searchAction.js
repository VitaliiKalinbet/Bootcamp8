export const searchForTitle = (title, post) => { 
    return {
        type: 'searchForTitle',
        title: title,
        post: post,
    }
}

export const clear = () => {
    return {
        type: 'clearSearchArr',
    }
}