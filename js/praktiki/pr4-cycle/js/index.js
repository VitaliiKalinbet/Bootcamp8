'use strict'

// let number = 0;
// let arr = [];
// while (number < 4) {
//     let userNumber = +prompt('Enter number');
//     arr.push(userNumber);
//     number+=1; //+= лучше работает чем ++, быстрее 
// }
// console.log

// let number = 0;
// let arr = [];
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if (userNumber !== null && userNumber !== '') {
//         if (Number(userNumber) === 9) {
//             alert('9 погане число');
//             continue;
//         } else {
//         arr.push(Number(userNumber));
//         number+=1; //+= лучше работает чем ++, быстрее 
//         }
//     } else {
//         break;
//     }
// }
// console.log(arr);

// let count = 1;
// do {
//     console.log(count);
//     number+=1;
// }
// while (count < 5);

// let arr = [];
// for (let i = 0; i < 10; i+=1) {
//     let number = prompt('Enter number');
//     arr.push(number);
// }
// console.log(arr);

// let arr = [5, 10, 25, 68, 78, 95];
// for (let i = 0, max = arr.length; i < max; i+=1) {
//     console.log((arr[i]*1.1).toFixed(2));
// }

// let arr = [5, 10, 25, 68, 78, 95];
// let arrTenPrc = [];
// for (let i = 0, max = arr.length; i < max; i+=1) {
//     arrTenPrc.push(Number((arr[i])*1.1).toFixed(2)));
// }
// console.log(arrTenPrc);

// let arr = [5, 10, 25, 68, 78, 95];
// let arrTenPrc = [];
// for (let element of arr) {
//     arrTenPrc.push(Number(element*1.1).toFixed(2));
// }
// console.log(arr);
// console.log(arrTenPrc);


// Задача1???????????????????????????????????????????????????????
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/
// let string = prompt('Введите любое словосочетание');
// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// let arr = string.split(' ');
// console.log(arr);
// // Вывести в консоли общую длину массива arr
// console.log(arr.length);
// // Используя цикл, вывести в консоль все индексы массива arr
// for (let i=0; i<arr.length; i+=1) {
//     console.log(i);
// }
// // Используя цикл, вывести в консоль все элементы массива arr
// for (let i=0; i<arr.length; i+=1) {
//     let element = arr[i];
//     console.log(element);
// }
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let i=0; i<arr.length; i+=1) {
//     let element = arr[i];
//     console.log(`Индекс: ${i} элемент: ${element}`);
// }
// console.log();


// Задача2???????????????????????????????????????????????????????
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let x;
// do {
//     x = prompt('Введите число больше 100');
//     if (x < 100) {
//         alert('Внимание! Введите пожалуйста число большее 100');
//     } else if (isNaN(x)) {
//         alert('ОШИБКА! Введите число!');
//     } else {
//         alert('Поздравляем число больше 100');
//     }
// }
// while (x < 100);


// Задача3???????????????????????????????????????????????????????
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
  PS: используйте цикл for
*/
// const min = 1;
// const max = 100;
// for (let i = min; i<=max; i+=1) {
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


// Задача4???????????????????????????????????????????????????????
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.     
  В результате в массиве newArray будут все подходяшие числа.   
  PS: используйте цикл for или for...of и оператор ветвления if
*/
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
// for (let element of numbers) {
//     if (element > num) {
//         newArray.push(element);
//     }
// }
// console.log(newArray);


// Задача5???????????????????????????????????????????????????????
/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/
// const string = "May the force be with you";
// let longestWord;
// let x = string.split(' ');
// console.log(x);
// let lengthElement = 0;
// for (let i = 0; i < x.length; i+=1) { 
//     if (lengthElement < x[i].length) {
//         lengthElement = x[i].length;
//         longestWord = x[i];
//     }  
// }
// console.log(`Самое длинное слово: ${longestWord}`); // 'force'


// Задача6???????????????????????????????????????????????????????
/*
  Напишите скрипт который: 
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let arr = [];
// let x;
// do {
//     x = prompt('Введите число');
//     if (x !== null && !isNaN(x)) {
//         arr.push(Number(x));
//     }
// }
// while (x !== null && !isNaN(x));
// console.log(arr);
// if (arr.length > 0) {
//     let sum = 0;
//     for (let element of arr) {
//         sum+=+element;
//     }
//     console.log(sum);
// }


// Задача7???????????????????????????????????????????????????????
/* Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/
// const numbers = [12, 15, 25, 37, 41];
// let x = prompt ('Игра! Введите число в диапазоне от 10 до 50');
// if (isNaN(+x)) {
//     alert('Введено не число!');
// } else if (numbers.includes(+x)) {
//     alert('Поздравляем, Вы угадали!');
// } else {
//     alert('Сожалеем, Вы не угадали!');
// }