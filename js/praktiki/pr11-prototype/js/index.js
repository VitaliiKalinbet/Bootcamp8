'use strict'

// let life = {
//     isLife: true,
//     breathe: true,
// }

// let animal = Object.create(life);
// animal.canEat = true,
// animal.canSleep = true,
// animal.canWalk = true,
// animal.canJump = function () {
//     return 'I can jump';
// }

// // let dog = {
// //     canBark: true,
// //     canSwim: true,
// // };

// // Чтобы связать два обьекта используется метод обьекта

// let dog = Object.create(animal);
// dog.canBark = true,
// dog.canSwim = true,
// console.log(dog);
// console.log(dog.canSwim);
// console.log(dog.canEat);

// console.log(animal);
// console.log(dog);


// Взаимодействие с помощью конструкторов !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // [[Prototype]] - это запись __proto__ в документации екма скрипт (это рассказывается про клюбч прото)

// function Human (name, age, gender) {
//     // this = {} 

//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     // this.breathe = function() {
//     //     console.log(`${this.name} can breathe`);
//     // };
//     // this.walk = function () {
//     //     console.log(`${this.name} can walk`);
//     // };
//     // this.speak = function (words) {
//     //     console.log(`${this.name} say ${words}`);
//     // };
//     // this.fullInfo = function () {
//     //     console.log(`I am ${this.name} ${this.age} ${this.gender}`);
//     // };
// };
// let vasya = new Human('Вася', 1, 'female');
// let petya = new Human('Петя', 2, 'male');
// console.log(vasya);
// console.log(petya);

// // vasya.__proto__ = speak;

// console.log(Human.construcor);
// console.log(Human.prototype);


// Human.prototype.fullInfo = function () {
//     console.log(`I am ${this.name} ${this.age} ${this.gender}`);
// };

//             // // ВОТ ТАК НИКОГДА НЕ ДЕЛАЕМ, В ОБЬЕКТ НИЧЕГО НЕ ЗАПИСЫВАЕМ
//             // Object.prototype.fullInfo = this.fullInfo = function () {
//             //     console.log(`I am ${this.name} ${this.age} ${this.gender}`);
//             // };

// Human.prototype.speak = function (words) {
//     console.log(`${this.name} say ${words}`);
// };

// Human.prototype.walk = function () {
//     console.log(`${this.name} can walk`);
// };

// Human.prototype.breathe = function() {
//     console.log(`${this.name} can breathe`);
// };

// vasya.speak('Hello');
// petya.speak('Hi');



// // Создаем еще один конструктор который будет наследовать все свойсат человека!!!!!!!!!!!!!!!!!!!!
// Human.prototype.friends = ['Bob', 'Dan', 'Bill'];
// vasya.friends.pop();
// console.log(vasya.friends);

// function Ukrainian (name, age, gender, national) {
//     // this = {}
//     Human.call(this, name, age, gender);
//     this.national = national;
// };

// Ukrainian.prototype = Object.create(Human.prototype);
// // связываем прототипы украинцев и человека
// Ukrainian.prototype.constructor = Ukrainian;

// const uk = new Ukrainian ('Petro', 25, 'male', 'ukrainian');
// console.log(uk);


// ???????????????????Задачи!!!!!!!!!!!!!!!!!!!!!???????????????????????????
// ??????????????????????????????????????????????????????????????????????????????
// 1) Створити конструктор User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити конструктор Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

// function User (name, surname) {
//     this.name = name;
//     this.surname = surname;
// };

// User.prototype.getFullName = function() {
//     return `${this.name} ${this.surname}`;
// };

// function Student (name, surname, yearIn) {
//     User.call(this, name, surname);
//     this.yearIn = yearIn;
// };
// Student.prototype = Object.create(User.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.getCourse = function () {
//     return `курс ${2018-this.yearIn}`;
// };

// Student.prototype.getFullInfo = function () {
//     console.log(`${this.getFullName()} ${this.getCourse()}`);
// };



// let vasya = new User ('Vasya', 'Voronin');
// console.log(vasya.getFullName()); 
// let st = new Student('Vasya', 'Voronin', 2015);
// console.log(st.getCourse()); 
// st.getFullInfo();

// let petya = new User ('Petya', 'Klimkin');
// console.log(petya.getFullName()); 
// let st2 = new Student('Petya', 'Klimkin', 2011);
// console.log(st2.getCourse());
// st2.getFullInfo();

// console.log(st);


// ??????????????????????????????????Задача 1 дополнительная. Модуль 6???????????????
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// function Account (login, email, friendsCount) {
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function () {
//     console.log(`${this.login} ${this.email} ${this.friendsCount}`);
// }

// let user = new Account('qwerty', '123@i.ua', 34);
// user.getAccountInfo();

// let user2 = new Account('qwesdvdfvb', '321@i.ua', 56);
// user2.getAccountInfo();

// let user3 = new Account('gfjdnhdfhb', 'gfew@i.ua', 45643);
// user3.getAccountInfo();


// ??????????????????????????????????Задача 2 дополнительная. Модуль 6???????????????
/*  Напишите функцию-конструктор StringBuilder.
  На вход она получает один параметр string - строку.
  Добавьте следующие методы в prototype функции-конструктора.
    - getValue() - выводит в консоль текущее значение поля value
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value   */
// function StringBuilder(string = "") {
//     this.value = string;
//   };
// StringBuilder.prototype.getValue = function () {
//     console.log(`${this.value}`);
// };
// StringBuilder.prototype.append = function (str) {
//     `${this.value += str}`;
// };
// StringBuilder.prototype.prepend = function (str) {
//     `${this.value = str + this.value}`;
// };
// StringBuilder.prototype.pad = function (str) {
//     `${this.value = str + this.value + str}`;
// };

//   const myString = new StringBuilder('.');
  
//   myString.append('^'); 
//   myString.getValue(); // '.^'
  
//   myString.prepend('^'); 
//   myString.getValue(); // '^.^'
  
//   myString.pad('='); 
//   myString.getValue(); // '=^.^='
  


// ??????????????????????????????????Задача 2 дополнительная от Вовы. Модуль 6???????????????
let books = [];
let order = [];
// Part 1
// Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// Порахувати загальну вартість замовлення з масива order.
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// Всі куплені книги додати в масив books.

function Book (title, author, pages, price) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price; 
    this.curentPage = 0;
}
Book.prototype.buy = function (arr) {
    return arr.push(this.price);
};
Book.prototype.read = function (num) {
    return this.curentPage = num;
};

// Створити 3 обєкта книжки
let b1 = new Book ('Master', 'Bulgakov', 1000, 200);
let b2 = new Book ('Rich', 'Napoleon', 150, 250);
let b3 = new Book ('Think', 'Kiosaki', 300, 300);

// викликати для них методи buy(); 
b1.buy(order);
b2.buy(order);
b3.buy(order);
//все суммы в массиве
console.log(order);
console.log(`Общая сумма ${order.reduce((acc,el)=>acc+el)}`);
// // викликати для них методи read(num); 
b1.read(34);
b2.read(101);
b3.read(251);
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num)
console.log(b1.curentPage);
console.log(b2.curentPage);
console.log(b3.curentPage);
// Всі куплені книги додати в масив books.
books.push(b1);
books.push(b2);
books.push(b3);
console.log(books);

//  Part 2
// Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
function E_Book (title, author, pages, price, fileSize) {
    Book.call(this, title, author, pages, price);
    this.fileSize = fileSize;
}
E_Book.prototype = Object.create(Book.prototype);
E_Book.prototype.constructor = E_Book;

// Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
E_Book.prototype.download = function () {
    console.log(`Book ${this.title} has been dowloaded, app was downloaded ${this.fileSize} kb`); ;
};

// Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
let b4 = new E_Book ('About woman', 'Dothson', 235, 540, 756);
let b5 = new E_Book ('Car', 'Ford', 560, 810, 1023);
// Викликати для них метод download()
b4.download();
b5.download();


// Part 3 
// Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.

function PapperBook (title, author, pages, price, cover) {
    Book.call(this, title, author, pages, price);
    this.cover = cover;
};
PapperBook.prototype = Object.create(Book.prototype);
PapperBook.prototype.constructor = PapperBook;

// Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив order з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива order ту книгу для якої викликаємо цей метод

PapperBook.prototype.burn = function (arr) {
    for (let el of arr) {
        if (el === this.price) {
            arr.splice(arr.indexOf(el),1);
            console.log(`Book '${this.title}' has been burned price '${el}'`);
        }
    }
};

// Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.

// Створити 3 обєкта книжки
let b6 = new PapperBook ('War and Peace', 'Tolstoy', 3426, 555, 10);
let b7 = new PapperBook ('Little prince', 'Ecsupary', 150, 444, 20);
let b8 = new PapperBook ('Potter', 'Rowling', 300, 333, 30);

// викликати для них методи buy(); 
b6.buy(order);
b7.buy(order);
b8.buy(order);

console.log(b6);
console.log(b7);
console.log(b8);
console.log(order);

// Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива order
b6.burn(order);
b7.burn(order);
