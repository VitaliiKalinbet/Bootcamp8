'use strict'

// const HOTEL_NAME = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100;
// let hotel = ['Resort Hotel', 5, 'LUX', 100];

/*Создаем объект 
пишем ключ и значение в произвольном порядке, 
браузер сам расставит потом все по алфавиту*/
// const HOTEL = {
//     name: 'Resort Hotel',
//     stars: 5,
//     status: 'LUX',
//     capacity: 100,
//     personal: ['Bob', 'Bender', 'Homer'],
// };
// console.log(HOTEL);

// // считываем информацию из объекта
// console.log(HOTEL.name);
// console.log(HOTEL.personal);
// console.log(HOTEL.stars);
// console.log(HOTEL['status']);
// console.log(HOTEL.key); // undefined

// // добавление новой информации в обьект
// HOTEL.manager = 'Chack Norris';
// console.log(HOTEL);
// // такой синтаксис и создаст новый ключ и перезапишет данные в указанном ключе
// HOTEL.stars = 10;
// console.log(HOTEL);
// // так же можем и удалять ключи по значению
// delete HOTEL.personal;
// console.log(HOTEL);




// // новая ФИШКА JAVA SCRIPT
// // если название ключа совпадает с название переменной, можно записать вот так сокращенно
// let name = 'Resort Hotel';
// let stars = 5;
// const hotel = {
//     name: name,
//     stars: stars,
//     pool: {
//         volume: '50m',
//         temp: '25C',
//     }
// }
// // или сокращенно можно вот так
// let stars = 5;
// const hotel = {
//     name,
//     stars,
// }
// // старый способ проверки на наличие элемента (ключ значение)
// let hasPool = hotel.hasOwnProperty('pool');  //true or false
// // новый способ проверки на наличие элемента (ключ значение)
// let hasPool2 = 'pool' in hotel;   //true or false





// /* можно записывать функцию как элемент объекта
// и в этом случае она будет называться методом объекта */
// const BMW = {
//     wheels: 4,
//     color: 'red',
//     year: 2018,
//     model: 'X5',
//     fullComplect: false,
//     move: function () {
//         console.log(`I'm move`);
//     },
//     stop() {
//         console.log('Stoped');
//     },
//     // это тоже самое что и stop: function() {console.log('Stoped');},

//     // также можно и через стрелочную функцию, но могут быть лаги - 
//     // НЕ РЕКОМЕНДУЕТСЯ ЭТО ДЕЛАТЬ
//     start: () => console.log('start'),
//     getColor: () => console.log(BMW.color),
// }
// BMW.move();
// BMW.stop();
// console.log(console);
// BMW.start();
// BMW.getColor();




// // Передача по значению у примитивов
// let a = 5;
// let b = a;
// a = 10;
// console.log(a);
// console.log(b);

// // Передача по значению у обьектов
// const obj1 = {
//     name: "chack",
// }
// let obj2 = obj1;
// obj1.age = 50;
// console.log(obj1);
// console.log(obj2);
// obj2.late = 12;
// console.log(obj1);
// console.log(obj2);



// // ДЕЛАЕМ КОПИИ ОБЪЕКТОВ
// let user = {
//     name: 'Bob',
//     age: 45,
//     isHappy: true,
// }
// let user2 = Object.assign({}, user);
// user.age = 40;
// console.log(user2);
// console.log(user);

// const first = {name: 'Tony'};
// const last = {lastName: 'Starck'};
// Object.assign(first,last); // в обьект first добавили обьект last 
// console.log(first); // {name: "Tony", lastName: "Starck"}
// console.log(last); // {lastName: "Starck"}




// // СПРЕД ОПЕРАТОРЫ ... 
// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
// // const c = Object.assign({}, a, b);
// const c = {...a,...b,d: 2000,};




// // Перебрать объекты for in
// let hotel = {
//     name: '7 Days',
//     stars: 4,
//     rooms: 150,
// }
// for (let key in hotel) {
//     if (hotel.hasOwnProperty(key)) {
//         console.log(`${key}: ${hotel[key]}`);
//     }
// }


// Получить только ключи или значения из обьектов
// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);
// console.log(keys);
// console.log(values);
// console.log(entries);





// // Деструктуризация обьектов 
// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// // let name = hotel.name;
// // let stars = hotel.stars;
// // let capacity = hotel.capacity; 
// // или краткая запись того же:
// const { name, stars, capacity } = hotel;
// console.log(name);



// // Деструктуризация обьектов
// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };
// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }
// showObjVal(dog);
// function showObjVal({name, age, isHappy}) {
//     console.log(name);
//     console.log(age);
//     console.log(isHappy);
//     // return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
// //
// showObjVal(dog);



// // Деструктуризация массива
// let strNum = ['one', 'two', 'three'];
// // console.log(strNum[0],strNum[1],strNum[2]);
// let [a,b,c,d] = strNum;
// console.log(a); // one
// console.log(b); // two 
// console.log(c); // three
// console.log(d); // undefined
// // также можно передать все как параметры функции [a,b,c,d] и 
// // преобразовывать прямо при передаче 


// Задача 1 ????????????????????????????????????????????????????????????????????????
/*  Напишите скрипт, который, для объекта user, последовательно: 
      - добавляет поле mood со значением 'happy'
        - заменяет значение hobby на 'javascript'
        - удаляет свойство premium
        - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
        - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
        - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of */
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
// function fn1 () {
//     user.mood = 'happy';
//     user.hobby = 'javascript';
//     delete user.premium;
//     console.log(user);
//     for (let elem in user) {
//         console.log(`${elem}: ${user[elem]}`);
//     }
//     console.log(' ');
//     const userKeys = Object.keys(user);
//     for (let elem of userKeys) {
//         console.log(`${elem}: ${user[elem]}`);
//     }
//     console.log(' ');
//     const userEntries = Object.entries(user);
//     for (let elem of userEntries) {
//         console.log(`${elem[0]}: ${elem[1]}`);
//     }
// }
// fn1();

// Задача 2 ????????????????????????????????????????????????????????????????????????
/* Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.
  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"*/
// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
//   function maxTaskWork () {
//     let x = 0;
//     let name;
//     for (let key in tasksCompleted) {
//         if (x < tasksCompleted[key]) {
//             x = tasksCompleted[key];
//             name = key;
//         }
//     }
//     return console.log(`${name}: ${x}`);
//   }
//   maxTaskWork();
  
// Задача 3 ???????????????????????????????????????????????????????????????????????
/*  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств. */
// Вызовы функции для проверки
// function countProps(obj) {
//     let x = Object.keys(obj);
//     return x.length;
// }
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

// Задача 4 ???????????????????????????????????????????????????????????????????????
/*  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  Возвращает true если объект пустой, false если не пустой. */
// function isObjectEmpty(obj) {
//     let x = Object.keys(obj);
//     if (x.length !== 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
//   // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false

// Задача 5 ???????????????????????????????????????????????????????????????????????
/*  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  Функция возвращает общую сумму зарплаты. */
// function countTotalSalary(salaries) {
//     let salarySum = Object.values(salaries);
//     let sum = 0;
//     for (let key of salarySum) {
//         sum+=key;
//     }
//     return sum;
// }
//   // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330

// Задача 6 ???????????????????????????????????????????????????????????????????????
/*  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве */
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
// function getAllPropValues(arr, prop) {
//     let mass = [];
//     for (let elem of arr) {
//         if (prop in elem) {
//             mass.push(elem[prop]);
//         } 
//     }
//     return mass;
// }
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []