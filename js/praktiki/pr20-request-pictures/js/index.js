'use strict'

// Ajax and XMLHttpRequest !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // =======================================================
// Синхронный запрос через XMLHttpRequest

// https://jsonplaceholder.typicode.com/
// const req = new XMLHttpRequest();
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');
// // // req.send([body])
// req.send();

// // req.abort()

// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status

// if (req.status !== 200) {
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
        // тут результат запроса только доступен и тут с ним работаем
// }
// console.log(`test`);

// // =======================================================
// Асинхронный запрос через XMLHttpRequest

// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }

//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//         // тут результат запроса только доступен и тут с ним работаем
//     }
// };

// ============================================================
// Запрос fetch по средствам Web Api, он всегда асинхронный, по дефолту метод GET используется
// .then() - в параметре передаем функцию с параметрами в которые попадет информация с сервера 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then(data => nameList(data));

// function nameList(massiv) {
//     let root = document.querySelector('.root');
//     let list = document.createElement('ul');
//     root.append(list);
//     for (let el of massiv) {
//     let listItem = document.createElement('li');
//     listItem.textContent = el.name;
//     list.append(listItem);
//     }
// }


// JSON.parse(); // информацию которую хотим превратить из строки в тип данных по умолчанию, типо архиватор
// JSON.stringify(); // информацию которую хотим превратить в строку, типо архиватор

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! СОБЕСЕДОВАНИЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CRUD
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
API - инструкция о том как с сайта можно достучатся и стянуть информацию 

https://pixabay.com/api/docs/

Общий принцип работы с API:
endpoint - Точка входу (сайт откуда тянуть инфу)
resourse - ресурс к которому ми обращаэмся  (тип даныых, картинии, видео и тд)
? - параметры запроса
& - перечисление нескольких параметров запроса


*/
// let URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=9';

// fetch(URL)
// .then((response) => response.json())
// .then(data => ListImg(data));

// function ListImg(obj) {
//     let root = document.querySelector('.root');
//     let list = document.createElement('ul');
//     list.style.display = 'flex';
//     list.style.flexWrap = 'wrap';
//     list.style.justifyContent = 'space-between';
//     list.style.listStyle = 'none';
//     root.append(list);
//     for (let el of obj.hits) {
//     let listItem = document.createElement('li');
//     listItem.style.marginBottom = '30px';
//     let listImg = document.createElement('img');
//     listImg.setAttribute('src', el.largeImageURL);   
//     listImg.setAttribute('width', '300');  
//     listImg.setAttribute('height', '300'); 
//     listItem.append(listImg);
//     list.append(listItem);
//     }
// }

// ==================================================================================
/* Задача - динамические картинки 
1) Користувач може ввести в інпут слово по якому буде здійснюватися пошук
2) Потрібно отримати значення з інпута і підставити його в параметр q
3) З допомогою сформованої силки потрібно зробити запит на сайт pixabay
4) Отримати картинки і намалювати галерейку на екрані
5) При повторному запиті картинки повинні замінятися. */
let box = document.querySelector('.box');
let inputText = document.querySelector('.input');
let submitBtn = document.querySelector('.btn');
let container = document.querySelector('#container');

window.addEventListener('DOMContentLoaded', createSomeImg);

box.addEventListener('submit', createSomeImg);

function createSomeImg() {
    event.preventDefault();
    let URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${inputText.value}&order=popular&per_page=9`;
    console.log(URL);
    fetch(URL)
    .then((response) => response.json())
    .then(data => arrOfImg(data));
}

function arrOfImg(obj) {
    container.innerHTML = '';
    for (let el of obj.hits) {
    let divOne = document.createElement('div');
    divOne.classList.add('one');
        let pText = document.createElement('p');
        pText.textContent = el.user;
        let img = document.createElement('img');
        img.setAttribute('src', el.webformatURL); 
        divOne.append(pText, img);
    container.append(divOne);
    }   
}

