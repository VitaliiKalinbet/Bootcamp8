'use strict'

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!КОНТЕКСТ ВЫПОЛНЕНИЯ!!!!!!!!!!!!!!!!!!!!

// const motel = {
//     name: '7 Days',
//     stars: 4,
//     rooms: 150,
//     hasSwPool: true,
//     hasCort: false,
//     showName() {
//         console.log(`${this.name}`);
//         // при запуске функции будем показывать в строке название гостиницы
//     },
//     changeRooms (number) {
//         return this.rooms = this.rooms - number;
//     },
//     openCort() {
//         return this.hasCort = !this.hasCort;
//         // при запуске функции будем значение менять на противоположное
//     },
//     // showThis: () => {
//     //     console.log(this);
//     // },
//     wrapper() {
//         // this = motel
//         const showThis = () => {
//             console.log('Show this context', this);
//         };
//         showThis();
//     }
// }

// // function showThis() {
// //     console.log(this);
// // };

// // console.log(motel.stars);
// // motel.showName();
// // motel.changeRooms(10);
// // console.log(motel.rooms);
// // motel.openCort();
// // console.log(motel.hasCort);
// // // motel.showThis();
// // showThis();


// motel.wrapper();



// Методы функций call/apply/bind!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Метод call
// const hotel = {
//     name: 'Resort Hotel',
//     price: 2500,
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
//     price: 500,
// };
// const hotel3 = {
//     name: '7 days Hotel',
//     price: 700,
// };

// // function showInfo() {
// //     console.log(`${this.name} and ${this.price}`);
// // };

// // showInfo.call(hotel);
// // showInfo.call(hotel3);
// // showInfo.call(hotel2);

// // если еще аргументы нужны, будут через запятую
// function showInfo(name, age) {
//     console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// };

// showInfo.call(hotel, 'Homer', 25);
// showInfo.call(hotel3, 'Fry', 32);


// Метод apply!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function showInfo(name, age) {
//     console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// };
// showInfo.apply(hotel, ['Homer', 25]);
// showInfo.apply(hotel3, ['Fry', 32]);



// Метод bind!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function showInfo(name = 'User', age = 18) {
//     console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// };
// const boundShowInfo = showInfo.bind(hotel);
// boundShowInfo();



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Конструктор!!!!!!!!!!!!!!!!!!!!!!!!!!
// const Tank = {
//     speed: 100,
//     armor: 50,
//     life: 100,
//     damage: 20,
//     name: 'Tiger',
//     nickName: 'Tankist',
//     amunition: 10,
//     x: 0,
//     y: 0,
//     move (a,b) {
//         this.x = a;
//         this.y = b;
//     },
//     fire () {
//         this.amunition > 0 ? this.amunition-=1 : alert('Enter card number');
//     },
//     heal(size) {
//         this.life + size > 100 ? this.life = 100 : this.life+=size;
//     },
// };

// Tank.move(50,150);
// Tank.fire();
// Tank.fire();
// Tank.fire();
// Tank.life = 50;
// Tank.heal(25);
// console.log(Tank);

// function Tank (speed, amunition, armor, nickName, x, y) {
//     // this = {}

//     this.speed = speed;
//     this.armor = armor;
//     this.life = 100;
//     this.damage = 20;
//     this.name = 'Tiger';
//     this.nickName = nickName;
//     this.amunition = amunition;
//     this.x = x;
//     this.y = y;
//     this.move = function(a,b) {
//         this.x = a;
//         this.y = b;
//     };
//     this.fire = function() {
//         this.amunition > 0 ? this.amunition-=1 : alert('Enter card number');
//     };
//     this.heal = function(size) {
//         this.life + size > 100 ? this.life = 100 : this.life+=size;
//     };

//     // return this
// }
// console.log(Tank);
// let tiger = new Tank(50,8,20, 'Tester', 10, 20);
// console.log(tiger);
// let scorpion = new Tank(45,10,5,'SC',52,10);
// console.log(scorpion);



// !!!!!!!!!!!!!!!!!!!!!!!МОДУЛЬ 4 ДОПЗАДАНИЕ 7!!!!!!!!!!!!!!!!!!
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
// function User (name, isActive, age, friends) {
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;
//     this.getUserInfo = function() {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//     }
// };
// let user1 = new User('Richard',true,18,5);
// user1.getUserInfo();
// let user2 = new User('Oleg',false,24,3);
// user2.getUserInfo();


// !!!!!!!!!!!!!!!!!!!!!!!МОДУЛЬ 4 ДОПЗАДАНИЕ 8!!!!!!!!!!!!!!!!!!
/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/
// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//       this.managers.push(manager);
      
//       console.log(this.managers);
//     },
//     removeManager(manager) {
//       const idx = this.managers.indexOf(manager);
      
//       this.managers.splice(idx, 1);
      
//       console.log(this.managers);
//     },
//     getProducts() {
//       console.log(this.products);
      
//       return this.products;
//     }
//   }
//   store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
//   store.removeManager('mango'); // ['poly', ajax', 'chelsey']
//   store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']


// !!!!!!!!!!!!!!!!!!!!!!!МОДУЛЬ 4 ДОПЗАДАНИЕ 9!!!!!!!!!!!!!!!!!!
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//         this.password = newPassword;
  
//       console.log(this.password);
//     };
  
//     this.getAccountInfo = function() {
//       console.log(`
//         Login: ${this.login}, 
//         Pass: ${this.password}, 
//         Type: ${this.type}
//       `);
//     };
// }
  
// const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
// });
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
// account.changePassword("asdzxc"); // 'asdzxc'
  
// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  



// !!!!!!!!!!!!!!!!!!!!!!!МОДУЛЬ 4 ДОПЗАДАНИЕ ОТ ВОВЫ МЕЛЬНИКА!!!!!!!!!!!!!!!!!!
// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонал який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();

// function Calculator() {
//   this.numbers = [];
//   this.read = function() {
//     let number;
//     do {
//       number = prompt('Введите число');
//       if (number !== null && !isNaN(number)) {
//       this.numbers.push(Number(number));
//     } 
//     }
//     while (number !== null);
//   }
//   this.sum = function () {
//     return this.numbers.reduce((acc, el) => acc + el, 0);
//   }
//   this.mul = function () {
//     return this.numbers.reduce((acc,el) => acc*el, 1);
//   }
//   this.addMethod = function (name, fun) {
//     this[name] = fun;
//   }
// }

// function minus () {
//   return this.numbers.reduce((acc, el) => acc - el);
// };

// let mass = new Calculator();
// mass.read();
// console.log(`Наш массив из чисел: ${mass}`);
// console.log(`Сумма всех чисел ${mass.sum()}`);
// console.log(`Произведение всех числе: mass.mul()`);
// mass.addMethod('m',minus);
// console.log(`Результат вычитания всех чисел: ${mass.m()}`);

// console.log(calculator.read()); // вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу

// console.log(calculator.sum()) // 15

// console.log(calculator.mul()) // 120

// calculator.addMethod(minus, function) // додається метод на віднімання

// console.log(calculator.minus()) // -13
