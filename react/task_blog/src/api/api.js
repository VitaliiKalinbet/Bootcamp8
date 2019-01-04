import axios from 'axios';

export default function getArrOfObjectForBlog () {
    return Promise.all([axios.get('https://jsonplaceholder.typicode.com/posts'), axios.get('https://jsonplaceholder.typicode.com/comments'), axios.get('https://jsonplaceholder.typicode.com/users')])
    .then( arrOfData => {
        let posts =  arrOfData[0].data;
        let comments = arrOfData[1].data;
        let users = arrOfData[2].data;
        return posts.map(el => ({
            title: el.title, 
            body: el.body,
            quantityComments: (comments.filter(coment => coment.postId === el.id)).length,
            author: users.find(item => item.id === el.userId).name,
        }))
    }
)}