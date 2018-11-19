'use strict'

// Теория PROMISE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// resolve = ok , reject = fatal - в эти параметры попадают обычные колбеки с такими названиями ф-ий
// результат работы промиса записался в obj
// let obj = new Promise(function(ok, fatal) {
//     let i = 1;
//     let arr = [];
//     while (i < 1000000) {
//         arr.push(i);
//         i++;
//     }
//     if (arr.length === 999999) {
//         ok(arr);
//     } else {
//         fatal('Error');
//     }
// });
// obj
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ====================================================================================
// аналог fetch();
// function asyncLoop (number) {
//     return new Promise(function(ok, fatal) {
//         let i = 1;
//         let arr = [];
//         while (i <= number) {
//             arr.push(i);
//             i++;
//         }
//         if (arr.length === number) {
//             ok(arr);
//         } else {
//             fatal('Error');
//         }
//     })
// };
// asyncLoop(5)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// ===========================================================================================
// Promise.all( [promiseA, promiseB] )
// const makePromise = (text, delay) =>
//   new Promise(resolve => setTimeout(() => resolve(text), delay));

// const promiseA = makePromise("promiseA", 1000);
// const promiseB = makePromise("promiseB", 3000);

// // выполнится спустя 3 секунды,
// // когда выполнится второй промис с задержкой в 3c.
// // Первый выполнится через секунду и просто будет готов
// Promise.all( [promiseA, promiseB] )
//   .then(result => console.log(result)) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));


// ????????????????????????????????????????????????????????????????????????????????????????????????????
// Работа в Local STORAGE
// console.log(localStorage);
// localStorage.setItem('favorite', JSON.stringify(5));
// let result = localStorage.getItem('favorite');
// let a = JSON.parse(result);
// console.log(a);
// localStorage.removeItem('favorite');


// ======================================================================================================
// Задача в классе по WEB STORAGE
// let fontSizeSelect = document.querySelector('#fontSize');
// let colorSelect = document.querySelector('#color');
// let fontFamilySelect = document.querySelector('#fontFamily');
// let form = document.querySelector('#form');

// function readValue (e) {
//     e.preventDefault();
//     localStorage.setItem('settings', JSON.stringify({
//         fontSize: fontSizeSelect.value, 
//         fontColor: colorSelect.value, 
//         fontFamily: fontFamilySelect.value
//     }));
//     getDataFromStorage();
// }

// function getDataFromStorage() {
//     let result = JSON.parse(localStorage.getItem('settings'));
//     let allp = [...document.querySelectorAll('p')];
//     for (let el of allp) {
//         el.style.color = result.fontColor;
//         el.style.fontSize = result.fontSize + 'px';
//         el.style.fontFamily = result.fontFamily;
//     }
// }

// window.addEventListener('DOMContentLoaded', getDataFromStorage);
// form.addEventListener('submit', readValue);


// =====================================================================
// Модуль 9 Допзадание 4
/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/
const DELAY = 1000;

let goodsAmount = 100;

function processOrder(amount) {
    return new Promise( (ok, fatal) => {
        setTimeout(() => {
            if (!isNaN(amount)) {
                if (amount <= goodsAmount) {
                    ok("Ваш заказ готов!");
                } else {
                    ok("К сожалению на складе не достаточно товаров!");
                }
            } else {
                fatal('Некорректный ввод!');
            }
        }, 500)
    })
    //скобка промиса
};

// Вызовы функции для проверки
processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(500)
  .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder("qwe")
  .then(x => console.log(x))
  .catch(err => console.log(err)); // Некоректный ввод!
