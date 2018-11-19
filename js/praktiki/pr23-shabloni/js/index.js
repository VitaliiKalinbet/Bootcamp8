'use strict'

// // Шаблонизация!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // 1) Получить доступ к шаблону  
// const source = document.querySelector('#addres-template').innerHTML.trim();
// console.log(source);

// // 2) Запустить функцию шаблонизатор 
// // console.log(Handlebars);
// const temp = Handlebars.compile(source);
// console.log(temp);
// // на выходе это функция имеющая шаблон и готовая принять информацию информацию 
// // от внешнего источника

// // 3) Обработать информацию. Передаем в функцию обьект
// const context = {
//     city: "London",
//     street: "Baker Street",
//     number: "221B"
// };
// const mark = temp(context);
// console.log(mark);

// // 4) Готовую разметку вставить на экран 
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark;

/* ============================================================================================
Задача от Вовы №1*/

// // 1) Получить доступ к шаблону  
// const source = document.querySelector('#addres').innerHTML.trim();
// // console.log(source);

// // 2) Запустить функцию шаблонизатор 
// // console.log(Handlebars);
// const temp = Handlebars.compile(source);
// // console.log(temp);
// // на выходе это функция имеющая шаблон и готовая принять информацию информацию 
// // от внешнего источника

// // 3) Обработать информацию. Передаем в функцию обьект
// const info = {
//     title: 'Handlebars',
//     helpers: 'Each and if',
//     func: 'compile'
// }
// const mark = temp(info);
// // console.log(mark);

// // 4) Готовую разметку вставить на экран 
// const container = document.querySelector('.content');
// container.innerHTML = mark;


/* ============================================================================================
Задача от Вовы №2*/

// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ],
//     temp: ['a', 'b', 'c', 'd']
// // так при массиве будет в html
// //     <template id="example-template-arr">
// //         {{#each temp}}
// //         <p>{{this}}</p>
// //         {{/each}}
// // </template>
// };

// // 1) Получить доступ к шаблону  
// const source = document.querySelector('#example-template').innerHTML.trim();
// // console.log(source);
// // 2) Запустить функцию шаблонизатор 
// const templateFunc = Handlebars.compile(source);
// // 3) Обработать информацию. Передаем в функцию обьект
// const markup = templateFunc(data);
// // 4) Готовую разметку вставить на экран 
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;


/* ============================================================================================
// Задача от Вовы №3*/
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };

// // 1) Получить доступ к шаблону  
// const source = document.querySelector('#example-template').innerHTML.trim();
// console.log(source);

// // 2) Запустить функцию шаблонизатор 
// // console.log(Handlebars);
// const temp = Handlebars.compile(source);
// console.log(temp);
// // на выходе это функция имеющая шаблон и готовая принять информацию информацию 
// // от внешнего источника

// // 3) Обработать информацию. Передаем в функцию обьект
// const mark = temp(menuData);
// console.log(mark);

// // 4) Готовую разметку вставить на экран 
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark;


/* ============================================================================================
Задача от Вовы №4*/
// const data = {
//     animals: [
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };
// let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
// let tmp = Handlebars.compile(source);
// let mark = tmp(data);
// let container = document.querySelector('.content-placeholder');
// container.innerHTML = mark;


/* ============================================================================================
Задача от Вовы №5*/
const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};
// 1) Получить доступ к шаблону template - несуществующий тег 
const source = document.querySelector('#example-template').innerHTML.trim();
// 2) Запустить функцию шаблонизатор 
// console.log(Handlebars);
const temp = Handlebars.compile(source);
// на выходе это функция имеющая шаблон и готовая принять информацию информацию 
// от внешнего источника
// 3) Обработать информацию. Передаем в функцию обьект
const mark = temp(gallery);
// 4) Готовую разметку вставить на экран 
const container = document.querySelector('.gallery-content');
container.innerHTML = mark;
