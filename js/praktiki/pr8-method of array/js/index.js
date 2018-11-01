'use strict'

// ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ

// // Стандартный шаблон 
// let result = arr.method(function(num, index, arr)) {
// num arr[index - 1]
// code
// code
// code
// }


// !!!!!!!!!!!!!!!!! МЕТОД map !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let money = [500, 800, 100, 400, 1000];
// let result = [];
// for (let el of money) {
//     result.push(el*0.7);
// }
// console.log(result);
// тоже самое только через метод map!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let result = money.map(function(el){
//     return el*0.7;
// })
// console.log(result);
// тоже самое только через метод map и стрелочную функцию!!!!!!!!!!!!!!!!
// let result = money.map(el => {
//     return el*0.7;
// });
// тоже самое только через метод map и стрелочную функцию - сокращенно!!!!!!!!!!!!!!!!
// let result = money.map(el => el*0.7);
// если только больше 500!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let result = money.map(el => el > 500? el*0.7: el);


// Массив состоящий из обьектов 
// выбираем только имена
// const inventors = [{

//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];
// let result = [];
// for (let el of inventors) {
//     result.push(el.first);
// }
// console.log(result);
// то же самое только методом map!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let result = inventors.map(function(el) {
//     return el.first;
// });
// console.log(result);
// то же самое только методом map и стрелочной функцией!!!!!!!!!!!!!!!!!!!!!!!!
// let result = inventors.map(el => el.first);
// console.log(result);



// !!!!!!!!!!!!!! Метод filter !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// выбрать массив цифер которые меньше или равны 10
// let result = [];
// for (let el of numbers) {
//     if (el <= 10) {
//         result.push(el);
//     }
// }
// console.log(result);
// то же самое методом filter !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let result = numbers.filter(function(el){
//     if (el <= 10) {
//         return el;
//     }
// });
// console.log(result);
// то же самое методом filter и стрелочной функцией!!!!!!!!!!!
// let result = numbers.filter(el => {
//     if (el <= 10) {
//         return el;
//     }
// });
// console.log(result);
// то же самое методом filter и стрелочной функцией - тернарником!!!!!!!!!!!
// let result = numbers.filter(el => el <= 10 ? el: null);
// console.log(result);
// то же самое методом filter и стрелочной функцией - тернарником - сокращенным!!!!!!!!!!!
// let result = numbers.filter(el => el <= 10);
// console.log(result);

// ???????????????????????????????? вывести только с рожденными в 16 столетии
// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];
// let result = inventors
//     .filter(el => el.year >= 1500 && el.year < 1600)
//     .map(el => ({name: el.first, lastName: el.last}));
// console.log(result);



/* !!!!!!!!!!!!!!!!!!!!!!!!!!! метод find !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// let result = numbers.find(el => el >5);
// console.log(result);



/* !!!!!!!!!!!!!!!!!!!!!!!!!!! метод every !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// const temperature = [25, 15, 0, 28, 5];
// let result = temperature.every(el => el >= 0);
// console.log(result); // true or false



/* !!!!!!!!!!!!!!!!!!!!!!!!!!! метод some !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// const temperature = [-25, -15, -10, -28, -5];
// let result = temperature.some(el => el >= 0);
// console.log(result); // true or false



/* !!!!!!!!!!!!!!!!!!!!!!!!!!! метод reduce !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// const numbers = [250, 1, 10, 3];
// // // найти сумму всего
// // let result = numbers.reduce(function(acc, element) {
// //     return acc + element;
// // }, 0);
// // console.log(result);
// // !!!!!!!!!!!!!!!!!!!!!!!! то же самое стрелочной функцией
// let result = numbers.reduce((acc,el) => acc + el, 0);
// console.log(result);

// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
//     ];
// let result = hoursWorkedPerWeek.reduce((acc,el) => acc + el.number, 0);
// console.log(result);


/* !!!!!!!!!!!!!!!!!!!!!!!!!!! метод sort !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// const numbers = [1, 250, 10, 3, 25, 5, 60, 7, 12, 9];
// numbers.sort(function (a,b) {
//     if (a>b) {
//         return 1500;
//     } else {
//         return -100;
//     }
// });
// console.log(numbers);

// const numbers = [1, 250, 10, 3, 25, 5, 60, 7, 12, 9];
// numbers.sort(function(a,b) {
//     return b-a;   // это от большего к меньшему, а  'a-b' будет от меньшего к большему
// });
// console.log(numbers);

// const numbers = [1, 250, 10, 3, 25, 5, 60, 7, 12, 9];
// numbers.sort((a,b) => a-b);
// console.log(numbers);

// const words = ['a', 'q', 'b', 's', 'z'];
// words.sort();
// console.log(words);

// const words = ['a', 'q', 'b', 's', 'z'];
// words.sort().reverse();
// console.log(words);

// const words = ['a', 'q', 'b', 's', 'z'];
// words.sort((a,b) => a>b);
// console.log(words);

// const words = ['a', 'q', 'b', 's', 'z'];
// words.sort((a,b) => a > b ? 1 : -1); // a > b будет от А до Я; a < b будет от Я до А
// console.log(words);

// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];
// inventors.sort((a,b) => a.first < b.first ? 1 : -1);
// console.log(inventors);


// let numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// let x = numbers.forEach(el => el*2); //undefined
// console.log(x);


/*???????????????????????????????????????????????????????????
???????????????????????????????????????????????????????????
???????????????????????????????????????????????????????????
???????????????????????? ЗАДАЧИ ???????????????????????????????????
???????????????????????????????????????????????????????????
???????????????????????????????????????????????????????????*/
// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
// },
// {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
// },
// {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
// },
// {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
// },
// {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
// },
// {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
// },
// {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
// },
// {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
// },
// {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
// },
// {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
// },
// {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
// },
// {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
// }
// ];
// 1) отримати масив вчених що народилися в 19 ст
// let arr1 = scientist.filter(el => el.year >= 1800 && el.year < 1900);
// console.log(arr1);
// 2) знайти суму років скільки прожили всі вченні
// let allYear = scientist.reduce((acc,el) => acc + (el.passed - el.year), 0);
// console.log(allYear);
// 3) Відсортувати вчених по алфавіту
// let arr3 = scientist.sort((a,b) => a.first > b.first ? 1: -1);
// console.log(arr3);
// 4) Відсортувати вчених по даті народження
// let arr4 = scientist.sort((a,b) => a.year > b.year ? 1: -1);
// console.log(arr4);
// 5) Відсортувати вчених по кількості прожитих років
// let arr5 = scientist.sort((a,b) => (a.passed-a.year) > (b.passed-b.year) ? 1: -1);
// console.log(arr5);
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// let arr6 = scientist.filter(el => el.year <= 1400 || el.year > 1700);
// console.log(arr6);
// 7) Знайти вченого який народився найпізніше.
// let arr7 = scientist
//     .sort((a,b) => a.year < b.year ? 1: -1)
//     .find(el => Math.max(el.year));
// console.log(`${arr7.first} ${arr7.last}`);
// 8) Знайти рік народження Albert Einstein
// let arr8 = scientist.find(el => el.first === 'Albert' && el.last === 'Einstein' ?el.year : null);
// console.log(arr8.year);
// 9) Знайти вчених прізвище яких починається на літеру С
// let arr9 = scientist.filter(el => el.last[0] === 'C');
// console.log(arr9);
// 10) Видалити з масива всіх вчених імя яких починається на A
// let arr10 = scientist.filter(el => el.first[0] !== 'A');
// console.log(arr10);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 1 !!!!!!!!!!!!!!!!!!!!!
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */
/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => arr.filter(el => el > num);
//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5]
  /* 
    Функция multiplyBy принимает два аргумента - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */
//   const multiplyBy = (num, arr) => arr.map(el => el*num);
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
//   /* 
//     Функция summAllNumbers принимает любое число аргументов.
//     Возвращает число - сумму всех аргументов.
//   */
// const summAllNumbers = (...args) => args.reduce((acc,el) => acc+el,0);
//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
//   /* 
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */
//   const findEvery = (num, arr) => arr.every(el => el >= num);
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 2 !!!!!!!!!!!!!!!!!!!!!
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  Функция должна возвращать массив всех значений этого ключа из arr.
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// const getPropValues = (arr, prop) => arr.map(el => el[prop]);
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 3 !!!!!!!!!!!!!!!!!!!!!
  /*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен. 
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];
// const setGuestState = (guests, period) => guests.map(el => el.inactiveDays > period ? el.isActive = false : el.isActive = true);
//   // Вызовы функции для проверки
//   console.log(
//     setGuestState(guests, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
//   console.log(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
//   console.log(
//     setGuestState(guests, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 4 !!!!!!!!!!!!!!!!!!!!!
/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.        
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// const getActiveGuests = (guests) => guests.filter(el => el.isActive === true);
//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 5 !!!!!!!!!!!!!!!!!!!!!
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// const getGuestsOlderThan = (guests, age) => guests.filter(el => el.age > age);
//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
//   console.log(getGuestsOlderThan(guests, 55)); // []


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 6 !!!!!!!!!!!!!!!!!!!!!
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];
// const getGuestById = (guests, id) => {
//     let result = guests.filter(el => el.id === id);
//     return result.length === 0 ? undefined : result;
// }
//   // Вызовы функции для проверки
//   console.log(getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}
//   console.log(getGuestById(guests, 1)); // {id: 1, name: 'Mango', age: 20}
//   console.log(getGuestById(guests, 5)); // undefined


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 7 !!!!!!!!!!!!!!!!!!!!!
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
//   };
// const sum = Object.values(order).reduce((acc, el) => acc +el, 0);
//   console.log(sum); // 150


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 8 !!!!!!!!!!!!!!!!!!!!!
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  PS: используйте метод reduce
*/
// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
//   };
//   const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
//   };
//   const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 3
//   };
// const getTotalPrice = (products, order) => {
//     let x = [];
//     for (let key in order) {
//         x.push(products[key]*order[key]);
//     }
//     return x.reduce((acc, el) => acc+el, 0);
// }
//   // Вызовы функции для проверки
//   console.log(getTotalPrice(products, orderA)); // 140
//   console.log(getTotalPrice(products, orderB)); // 130


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Модуль 5!!! Допзадание 9 !!!!!!!!!!!!!!!!!!!!!
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  PS: используйте метод every или some, никаких for!
*/
// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
//   ];
//   const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
//   ];
// const allGuestsActive = (guests) => guests.every(el => el.isActive === true);
//   // Вызовы функции для проверки
//   console.log(allGuestsActive(guestsA)); // false
//   console.log(allGuestsActive(guestsB)); // true
