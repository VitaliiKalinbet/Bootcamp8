'use strict'

// let str = 'Hello world';
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.includes('world'));
// console.log(str[6]);
// console.log(str.indexOf('world'));
// console.log(str.split(' '));
// let arr = str.split(' ');
// console.log(arr);
// let strNew = arr.join(' ');
// console.log(strNew);

// console.log(Math.floor(Math.random()*100));

// let a = 5;
// let b = '5';
// console.log(a === b);
// console.log(a == b);


// // Программа будем ли смотреть футбол
// let time = prompt ('Enter time');
// console.log (time);
// if (Number(time)) {
//     if (time <= 21) {
//         alert ('Включи футбол 1');
//     } else {
//         alert ('Можешь идти спать');
//     }
// } else {
//     alert ('Введи число');


// // программа про месяц года
// let month = prompt ('Enter month').toLowerCase();
// if  (month === 'грудень' || month === 'січень' || month === 'лютий'){ 
//     alert('Winter');
// } else if (month === 'березень' || month === 'квітень' || month === 'травень'){
//     alert('Spring');
// } else if (month === 'червень' || month === 'липень' || month === 'серпень'){
//     alert('Summer');
// } else if (month === 'вересень' || month === 'жовтень' || month === 'листопад'){
//     alert('Autumn');
// } else {
//     alert ('Помилка вводу');
// }


// let month = prompt ('Enter month').toLowerCase();
// switch (month) {
//     case 'грудень':
//         alert('Winter');
//         break;
//     case 'січень':
//         alert('Winter');
//         break;
//     case 'лютий':
//         alert('Winter');
//         break;
//     case 'березень':
//     case 'квітень':
//     case 'травень':
//         alert('Spring');
//         break;
//     case 'червень':
//     case 'клипень':
//     case 'серпень':
//         alert('Summer');
//         break;
//     case 'вересень':
//     case 'жовтень':
//     case 'листопад':
//         alert('Autumn');
//         break;
//     default:
//         alert('Помилка вводу');
//         break;
// }


// // Тернарный оператор
// let age = prompt ('Enter age');
// // let result = age > 15 ? 'Студент' : 'Учень';
// // alert(result);

// let result = age > 21 ? 'Дорослий' : age < 21 && age > 15 ? 'Студент' : age < 15 && age > 8 ? 'Учень' : 'Дитина';
// alert(result);


// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';
// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;
// console.log(message); 
// // Mango прибывает на отдых 14/08/2031 в люкс.


// ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ МОДУЛЬ №1 1-10штук
// №1
/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
// let name = 'Mango';
// let guest = name;
// console.log(guest);

// №2
/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/
// const day = 2;
// const month = 10;
// const year = 2017;
// const date = `0${day}\\${month}\\${year}`
// console.log(date); // 02\10\2017

// №3
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/
// let name = prompt('Введите Ваше имя');
// alert(name);

// №4
/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';
// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;
// console.log(message); 
// // Mango прибывает на отдых 14/08/2031 в люкс.

// №5
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/
// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";
// let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + "px";
// console.log(totalWidth); 
// // '125px'

// №6
/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 
// let year = prompt('Какой сейчас год?');
// if (year === '2018') {
//     alert('Все верно!');
// } else {
//     alert('Но ведь на вдоре 2018!');
// }

// №7
/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 
// let x = prompt('Введите произвольное целое число');
// if (x === null) {
//     alert('Приходите еще!');
// } else if (Number.isInteger(Number(x))) {
//     alert('Спасибо!');
// } else {
//     alert('Необходимо было ввести целое число!');
// }

// №8
/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/
// const num = Number.parseInt(Math.random() * 100);
// let type = num % 2 === 0 ? 'even' : 'odd';
// console.log(`${num} is ${type}`);
// alert(`${num} is ${type}`);

// №9
/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/
// let hours = 7;
// let minutes = 3;
// let seconds = 42;
// hours = hours < 10 ? `0${hours}` : hours;
// minutes = minutes < 10 ? `0${minutes}` : minutes;
// seconds = seconds < 10 ? `0${seconds}` : seconds;
// const time = `${hours}:${minutes}:${seconds}`;
// console.log('Time is: ', time);

// №10
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// let y = prompt ('Введите число от 1 до 5');
// if (y === null) {
//     alert ('очень жаль, приходите еще!')
// } else if (y < 1 || y > 5) {
//     alert('Неверный ввод, возможные варианты 1-5!');
// } 
// else {
//     switch (+y) {
//         case 1:
//         alert('Каталог хостелов');
//             break;
//         case 2:
//         alert('Каталог бюджетных отелей');
//             break;
//         case 3:
//         alert('Каталог отелей ***');
//             break;
//         case 4:
//         alert('Каталог отелей ****');
//             break;
//         case 5:
//         alert('Каталог лучших отелей');
//             break;
//         default:
//             break;
//     }
// }

