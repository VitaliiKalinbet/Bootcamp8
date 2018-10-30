'use script'

// function addToNumbers () {
//     console.log(5 + 6);
// }
// addToNumbers();

// // ВВОДИШЬ ГОД - ПОКАЗЫВАЕТ СТОЛЕТИЕ
// const century = function (year) {
//     return Math.ceil(year / 100);
// }
// let number = +prompt('введите год, скажу столетие');
// console.log(century(number));
// // console.log(century(1958));
// // console.log(century(2018));
// // console.log(century(1548));


// function add () {
//     let arr = Array.from(arguments);
//     let total = 0;
//     for (let el of arr) {
//         total += el;
//     }
//     return total;
// }
// console.log(add(5,10,20));
// console.log(add(4,));
// console.log(add(34,14,24.5));


// // Когда нужно запустить функцию и пропустить один аргумент
// function connect (par1, par2) {
//     return par1 + par2;
// }
// connect(5,6);
// connect(null,2);
// connect();
// connect(5);


// ОБЛАСТЬ ВИДИМОСТИ ФУНКЦИИ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let a = 10;
// let b = 20;

// function showNumber () {
//     let a = 50;
//     console.log(a);
//     console.log(b);

//     function secondLog () {
//         let a = 30;
//         let b = 120;
//         console.log(a);
//         console.log(b);

//         function threeLog () {
//             let a = 4;
//             let b = 1;
//             console.log(a);
//             console.log(b);
//         }
//         threeLog();
//     }
//     secondLog();
// }
// showNumber();



// ЗАДАЧА1 ??????????????????????????????????????????????????????????????????
/*
  Напишите функцию checkNumberType(num)
    Функция получает число num как аргумент и возвращает 
    строку "Even" если число четное и строку "Odd" если не четное.
*/
// function checkNumberType(num) {
//     if (num % 2 === 0){
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'
// console.log( checkNumberType(46) ); // 'Even'
// console.log( checkNumberType(3) ); // 'Odd'
// console.log( checkNumberType(17) ); // 'Odd'


// ЗАДАЧА2 ??????????????????????????????????????????????????????????????????
/*
  Напишите функцию formatString(str)
    - Функия принимает на вход строку str
   - Если длина строки не превышает 40 символов, функция возвращает ее. 
   - Если длина больше 40 символов, то функция обрезает строку до 40-ти
     символов и добавляет в конец строки троеточие '...', после чего 
     возвращает укороченную версию.
*/
// function formatString(str) {
//     if (str.length <= 40) {
//         return str;
//     } else {
//         return str.slice(0,40) + '...';
//     }
// }
// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка


// ЗАДАЧА3 ??????????????????????????????????????????????????????????????????
/*
  Напишите функцию checkForSpam(str)
 
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли запрещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// function checkForSpam(str) {
//     if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
// console.log( checkForSpam('Get best SALE offers now!') ); // true


// ЗАДАЧА4 ??????????????????????????????????????????????????????????????????
/*  
  Написать функцию, getPx(str) 
  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// function getPx(str) {
//     if (typeof str === 'string') {
//         return Number.parseFloat(str);
//     } else {
//         return null;
//     }
// }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


// ЗАДАЧА5 ??????????????????????????????????????????????????????????????????
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/
// function findLongestWord(str) {
//     let arr = str.split(' ');
//     let longestWord;
//     let lengthElement = 0;
//     for (let i = 0; i < arr.length; i+=1) { 
//         if (lengthElement < arr[i].length) {
//             lengthElement = arr[i].length;
//             longestWord = arr[i];
//         }  
//     }
//     return longestWord;
// }
// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'


// ЗАДАЧА6 ??????????????????????????????????????????????????????????????????
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// function findLargestNumber(numbers) {
//     let largNumber = 0;
//     for (let i = 0; i < numbers.length; i+=1) { 
//         if (largNumber < numbers[i]) {
//             largNumber = numbers[i];
//         }  
//     }
//     return largNumber;
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27 
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128


// ЗАДАЧА7 ??????????????????????????????????????????????????????????????????
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers () {
//     let arr = Array.from(arguments);
//     for (let element of arr) { 
//         if (!uniqueNumbers.includes(element)) {
//             uniqueNumbers.push(element);
//         }
//     }
//     return uniqueNumbers;
// }
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]
// addUniqueNumbers(12, 2, 3, 19);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]
// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


// ЗАДАЧА8 ??????????????????????????????????????????????????????????????????
/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr. 
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.   
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/
// function removeFromArray(arr) {
//     let newArr = Array.from(arguments).splice(1);
//     for (let element of newArr) {
//         if (arr.includes(element)) {
//             let index = arr.indexOf(element);
//             arr.splice(index,1);
//         }
//     }
//     return arr;
// }
// // Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
//   ); // [1, 3, 5] 
//   console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
//   ); // [12, 8, 17]


// ЗАДАЧА9 ??????????????????????????????????????????????????????????????????
// ================================ 1 ==========================
/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
console.log('16px'); // 1rem
console.log('24px'); // 1.5rem
console.log('0px'); // 0rem
*/
// function convertToRem (str) {
//     let convertPxToRem = parseFloat(str);
//     return +convertPxToRem / 16 + "rem";
// }
// console.log(convertToRem('16px')); // 1rem
// console.log(convertToRem('24px')); // 1.5rem
// console.log(convertToRem('0px')); // 0rem

// =============================== 2 ===================================
/*
Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо результат дробовий округлювати до двох знаків після коми.
console.log('1000px', '100px'); //10%
console.log('950px', '150px'); // 15.79%
*/
// function convertToPrc(container, block) {
//     let newBlock = parseFloat(block);
//     let newContainer = parseFloat(container);
//     return ((newBlock / newContainer)*100).toFixed(2) + '%';
// }
// console.log(convertToPrc('1000px', '100px')); //10%
// console.log(convertToPrc('950px', '150px')); // 15.79%

// =============================== #3 ===================================
/*
Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
 from - одиниці з яких конвертувати, 
 to - одиниці в які конвертувати, 
 block - розміри блока для конвертації, 
 container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
   console.log('px', 'rem', 16); // 1rem
   console.log('px', 'rem', 24); // 1.5rem
   console.log('px','%', 100px', '1000px'); //10%
   console.log('px', '%', '150px', '950px'); // 15.79%
*/
// function pxConvertor (from, to, block, container) {
//     if (from === 'px' && to === 'rem') {
//         return block / 16 + "rem";
//     }
//     if (from === 'px' && to === '%') {
//         let newBlock = parseFloat(block);
//         let newContainer = parseFloat(container);
//         return ((newBlock / newContainer)*100).toFixed(2) + '%';
//     }
// }
// console.log(pxConvertor('px', 'rem', 16)); // 1rem
// console.log(pxConvertor('px', 'rem', 24)); // 1.5rem
// console.log(pxConvertor('px', '%', '100px', '1000px')); //10%
// console.log(pxConvertor('px', '%', '150px', '950px')); // 15.79%


// ЗАДАЧА9 ??????????????????????????????????????????????????????????????????
/* Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів медіана – це середнє значення двох чисел, які знаходяться в середині масиву. Вам потрібно нвписати ф-ю яка приймає аргументом масив, знаходить  медіану даного масиву і повертає її.
console.log(median([1, 2, 3, 4, 5])) // 3;
console.log(median([1, 2, 3, 3, 5])); // 3
console.log(median([1, 1, 2,  200, 300])) // 2;
console.log(median([3, 6, 10, 15, 20, 99])); */
