-'use strict'

// let x = 5;
// ;(function (){

// })

// IIFE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let x = 5;
// ;(function () {
//     let x = 10;
//     let y = 20;

//     console.log(x);
//     console.log(y);

//     function add (a, b) {
//         return a + b
//     }

//     console.log(add(5,10));
// })();


// console.log(x);
// console.log(y);

// Anonymous closure !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const globalVar = 'I am a global variable!';

// (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const average = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Аverage grade is ${Math.round(total / grades.length)}.`;
//     };

//     console.log(average());
//     console.log(globalVar);
// })();

// console.log(average());


// Global import !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Для интерфейса используется, выделяем нужные в интерфейсе функции пользователю

// const globalVar = {};

// (function (gv) {
//     // Приватная функция, доступная только внутри замыкания
//     const privateFn = () => console.log("Shhhh, this is private!");

//     const movieFetch =() => {
//          return fetch(url)
//         .then(response => response.json())
//         .then(data => data.sort())
//     }

//     // Откроем методы через интерфейс globalVariable,
//     // закрыв имплементацию внутри замыкания
//     gv.books = () => {
//         privateFn();
//         console.log("Hello, I am a global variable");
//     };

//     gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

//     gv.movies = () => {
//         movieFetch()
//     }
// })(globalVar);
// console.log('global',globalVar);
// console.log(globalVar.music);
// // Shhhh, this is private!
// // Hello, I am a global variable

// privateFn();


// Object interface !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* ПРЯЧЕМ функции которые не нужны пользователю до ретерна, 
а возвращаем результат работы сразу пяти  или скольки нужно функций*/

// const GRADES_MODULE = (function () {
//     // Это будет приватная переменная внутри замыкания
//     const grades = [80, 45, 75, 64, 53, 82];

//     return {
//         average() {
//             const total = grades.reduce((acc, grade) => acc + grade, 0);

//             return `Average grade is ${Math.round(total / grades.length)}.`;
//         },

//         failing() {
//             const failingGrades = grades.filter(item => item < 70);
//             return 'You failed ' + failingGrades.length + ' times.';
//         }
//     }
// })();
// console.log(GRADES_MODULE);
// console.log(GRADES_MODULE.average());
// console.log(GRADES_MODULE.failing());

// Revealing module pattern !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const calcGrades = (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const calcAverage = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Average grade is ${Math.round(total / grades.length)}.`;
//     };

//     const failingGrades = ()=> {
//         const failingGrades = grades.filter(item => item < 70);

//         return 'You failed ' + failingGrades.length + ' times.';
//     }

//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         average: calcAverage,
//         failing: failingGrades
//     };
// })();

// console.log(calcGrades);

// console.log(calcGrades.average());
// console.log(calcGrades.failing());


// Задача 1 от Вовы Мельника ??????????????????????????????????????????????????????????????????????
/* Написати модуль який на основі останього патерну буде мати 3 
ф-ї інтерфейсу:
1) Знаходить суму всіх аргументів
2) Знаходить різницю всіх аргументів
3) Знаходить добуток всіх аргументів
4) Викликати всі 3 метода і перевірити чи вони працюють  */

// const calc = (function () {
//     const sum = (...rest) => {
//         return rest.reduce((acc, grade) => acc + grade, 0);
//     };
//     const minus = (...rest)=> {
//         return rest.reduce((acc, grade) => acc - grade);
//     }
//     const multip = (...rest)=> {
//         return rest.reduce((acc, grade) => acc * grade, 1);
//     }
//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         sum: sum,
//         minus: minus,
//         multip: multip,
//     };
// })();
// console.log(calc);
// console.log(calc.sum(2,3,5467));
// console.log(calc.minus(2,3));
// console.log(calc.multip(2,3,6,7,8,9));


// Задача 2 от Вовы Мельника ??????????????????????????????????????????????????????????????????????
/* За допомогою шаблона Global import створити дві IIFE наповнити глобальний обєкт методами які:
1) Перетворюють метри в см,дм, км, мм
2) Перетворюють метри в Ярди, Дюйми, Фути, Милі
Після наповнення обєкта викликати 2 метода з першої категорії і 2 метода з 2-ї категорії

Сайт для перевірки https://www.rapidtables.com/convert/length/index.html */
const gvo = {};
(function (gv) {
    gv.sm = (meter) => meter * 100;
    gv.dm = (meter) => meter * 10;
    gv.km = (meter) => meter / 1000;
    gv.mm = (meter) => meter * 1000;
})(gvo);
(function (gv) {
    gv.yards = (meter) => meter * 1.093613;
    gv.inches = (meter) => meter * 39.37008;
    gv.feet = (meter) => meter * 3.28084;
    gv.miles = (meter) => meter * 0.0006213712;
})(gvo);
console.log(gvo);
console.log(gvo.sm(1));
console.log(gvo.km(1));
console.log(gvo.yards(1));
console.log(gvo.feet(1));