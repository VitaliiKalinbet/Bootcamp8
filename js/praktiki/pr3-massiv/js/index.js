'use strict'

// МАССИВЫ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let arr = [52, 23, 12, 10];
// let arr2 = new Array(2, 5, 10);
// console.log(arr);

// let emptyArr = [];
// console.log(emptyArr);

// let firstArray = [1, 2, 3, 4, 8, 5, 10, 7, 9];
// console.log(firstArray);
// console.log(firstArray[1]);

// let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];
// // console.log(arr[2]);
// // console.log(arr[1]);
// // console.log(arr[4][6][2]);
// console.log(arr[4][6][4][3][0]);

// let firstArray = [1, 2, 3];
// console.log(firstArray[0]);
// firstArray[0] = 100;
// console.log(firstArray);
// firstArray[25] = 12;
// console.log(firstArray);
// console.log(firstArray[20]);

// let firstArray = ['Іван', 'Вася', 'Сергій'];
// firstArray.push('Петро','Іраклій');
// firstArray.push(10, 11);
// firstArray.push(11);
// console.log(firstArray);

// let class1 = ['Іван', 'Вася', 'Сергій'];
// let class2 = ['Персей', 'Дарій', 'Наполеон'];
// class1.push('Петро','Іраклій');
// let user = class1.pop();
// console.log(user);
// console.log(class1);
// class2.push(user);
// console.log(class2);


// // СТУЧИМСЯ К ПОСЛЕДНЕМУ ЭЛЕМЕНТУ МАССИВА
// let firstArray = [5, 8, 13, 14, 25, 26, 98, 75];
// let lengthArr = firstArray.length;
// console.log(firstArray[lengthArr - 1]);


// let firstArray = ['abc', 'h', 'b', 'd','f','h','j'];
// console.log(firstArray.indexOf('b'));
// console.log(firstArray.indexOf('abc'));
// console.log(firstArray.indexOf('h'));
// console.log(firstArray.indexOf("q"));
// console.log(firstArray.indexOf('y'));

// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23));
// console.log(firstArray.includes(150));


// ЗАДАЧА ??????????????????????????????????????????????????????
// 1) Запитати логін через prompt
// 2) Перевірити чи існує логін в масиві logins
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 
// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']
// let login = prompt('Введите Ваш логин');
// if (logins.includes(login)) {
//     alert('Такий логін вже існує');
// } else {
//     alert('Вітаємо Ви зареестровані');
//     logins.push(login);
//     alert(`Ваш логин добавлен в базу ${login}`);
// }

// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col'];
// login = prompt('Введите Ваш логин'); 
// logins.includes(login) ? 'Такий логін вже існує' : 'Вітаємо Ви зареестровані';


// concat - МЕТОД !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// обьединение массивов
// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(secondArr,newArray, 100);
// console.log(result);
// console.log(firstArray);
// console.log(newArray);


// возможность вырезать что то из массива
// slice and splice
// slice start index and end index do not includes
// splice start index and how many

// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice(2,4);
// // let arr3 = arr.slice(3);
// console.log(arr);
// console.log(newArr);


// slice and splice
// slice start index and end index do not includes
// splice start index and how many
// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice(0,2);
// let arr3 = arr.slice(3);


// let arr = [1, 5, 9, 8, 7, 10];
// console.log(arr);
// // // delete
// let x = arr.slice();
// x.splice(2,1); //вырезаем 9 из х 
// console.log('вырезаем 9 из массива');
// console.log(x);
// x.splice(2,0,999); /*двигаем 8 вправо на 1 и вставляем 999, 
// причем можно несколько элементов вставлять */
// console.log('двигаем 8 вправо на 1 и вставляем 999, причем можно несколько элементов вставлять');
// console.log(x);
// x.splice(2,2,13,12,34,45); /*вырезаем включая со второго два элемента,
// и вместо них вставляем то что напишем в любом количестве */
// console.log('вырезаем включая со второго два элемента,и вместо них вставляем то что напишем в любом количестве');
// console.log(x);

// МЕТОД РЕВЕРС !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = [1, 5, 9, 8, 7, 10];
// let newArr = arr.slice().reverse();
// console.log(arr);
// console.log(newArr);


// ЗАДАЧА??????????????????????????????????????????????????????????
// ПРОВЕРИТЬ ПОЛИНДРОМ ЛИ СТРОКА
// 1) Записываем в переменную строку из промта
// 2) Сделать строку массивом
// 3) Скопировать массив
// 4) Реверснуть массив
// 5) Из массива делаем строки
// 6) Сравнить две строки и вывысти результат в консоль
// let string = prompt ('Введите слово, на проверку полиндром ли это');
// // let stringArray = string.split('');
// let copyStringArray = string.split('').slice().reverse().join('');
// if (string === copyStringArray) {
//     alert('Это полиндром');
// } else {
//     alert('Это не полиндром');
// }


// ЗАДАЧА2??????????????????????????????????????????????????????????
// создать код, который случайно выберет слово и покажет алертом на экране
// 1) Выбираем случайное число (от 0 до длины массива)
// 2) Записываем в переменную обращение типа массив[индекс]
// 3) Вывести на экран переменную 2 
// let animals = ["cat","dog","rabbit","bird","fish"];
// let random = Math.floor((Math.random()*animals.length));
// alert(animals[random]);


// ЗАДАЧА3??????????????????????????????????????????????????????????
// игра в угадалки с компьютером
// 1) Через промпт ввести вариант животного своего
// 2) Вариант компьютера записать в переменную
// 3) Сравнить наш вариант с компютером
//  3.1) Если варианты совпали алерт вы выиграли
//  3.2) Если вариант не совпал вы проиграли
// let animals = ["cat","dog","rabbit","bird","fish"];
// let myChoice = prompt ('Выберите ваш вариант животного: cat, dog, rabbit, bird, fish');
// let random = Math.floor((Math.random()*animals.length));
// let compChoice = animals[random];
// console.log(compChoice);
// if (myChoice === compChoice) {
//     alert('You win');
// } else {
//     alert(`You lose, comp choice ${compChoice}`);
// }


// ЗАДАЧА4??????????????????????????????????????????????????????????
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.length); // 4
// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax


// // ЗАДАЧА5??????????????????????????????????????????????????????????
// /* Есть массив имен пользователей */
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// /* Используя методы массива, последовательно выполнить следующие операции */
// // Удалить из начала массива нулевой элемент
// console.log(users.shift()); 
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// // Удалить из конца массив последний элемент
// console.log(users.pop()); 
// console.log(users); // ["Poly", "Ajax"]
// // Добавить в начало массива любое имя
// console.log(users.unshift('добавленное имя'));
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users.push('имя 1','имя 2'));
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


// // ЗАДАЧА6??????????????????????????????????????????????????????????
// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.
// let option = ["камінь","ножиці","папір"];
// let myChoice = prompt ('Выберите ваш вариант: камінь, ножиці, папір');
// let random = Math.floor((Math.random()*option.length));
// let compChoice = option[random];
// console.log(compChoice);
// if (myChoice === compChoice) {
//     alert('nobody win - draw');
// } else  if (myChoice === 'камінь' && compChoice === 'ножиці') {
//     alert('You win');
// } else  if (myChoice === 'камінь' && compChoice === 'папір') {
//     alert('Comp win');
// } else  if (myChoice === 'ножиці' && compChoice === 'камінь') {
//     alert('Comp win');
// } else  if (myChoice === 'ножиці' && compChoice === 'папір') {
//     alert('You win');
// } else  if (myChoice === 'папір' && compChoice === 'камінь') {
//     alert('You win');
// } else  if (myChoice === 'папір' && compChoice === 'ножиці') {
//     alert('You win');
// } else {
//     alert('Введите правильное слово на выбор: камінь, ножиці, папір')
// }
