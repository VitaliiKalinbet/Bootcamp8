'use strict'

// Это мы писал все функцией конструктором
// const Video = function (size, duration, title, format, hd, author) {
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
//   }
  
//   Video.prototype.getFullInfo = function () {
//     return `${this.author} ${this.title} ${this.duration}`;
//   }
  
//   Video.prototype.archive = function (num) {
//     this.size = parseFloat(this.size) / num + 'gb';
//   }
  
//   Video.prototype.changeAuthor = function (newAuthor) {
//     this.author = newAuthor;
//   }
  
//   Video.prototype.changeTitle = function (newTitle) {
//     this.title = newTitle;
//   }
  
//   const Stream = function(size, duration, title, format, hd, author, status) {
//     Video.call(this, size, duration, title, format, hd, author);
//     this.status = status;
//   }
  
//   Stream.prototype = Object.create(Video.prototype);
//   Stream.prototype.constructor = Stream;
  
//   Stream.prototype.changeStatus = function() {
//     this.status = !this.status;
//   }




//   Как все это записать через классы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// class - зарезервированное слово в js
// class Video{
//     constructor(size, duration, title, format, hd, author) {
//         this.size = size;
//         this.duration = duration;
//         this.title = title;
//         this.format = format;
//         this.hd = hd;
//         this.author = author;
//     }

//     // этот метод будет использоваться только с этим классом и в 
//     // прототипы детей они не попадут вообще 
//     static greet () {
//         console.log('Hello I`m a static method');
//     }

//     getFullInfo() {
//         return `${this.author} ${this.title} ${this.duration}`;
//     }

//     archive(num) {
//         this.size = parseFloat(this.size) / num + 'gb';
//     }

//     changeAuthor(newAuthor) {
//         this.author = newAuthor;
//     }

//     changeTitle(newTitle) {
//         this.title = newTitle;
//     }
// } 

// let movie = new Video('25gb', '120min', 'Movie 43', 'MPG4', true, 'WB');
// console.log(movie.getFullInfo()); //WB Movie 43 120min
// console.log(movie); //Video {size: "25gb", duration: "120min", title: "Movie 43", format: "MPG4", hd: true, …}
// Video.greet(); //'Hello I`m a static method'


// /* extends Video - это вместо криейт обжект и конструктор(те две строки) */
// class Stream extends Video {  
//     constructor(size, duration, title, format, hd, author) {
//         super(size, duration, title, format, hd, author);  /*работает только с extends - мы вызываем конструктор родительского класса, это заменитель call. ПОКА МЫ НЕ НАПИШЕМ super НЕ БУДЕТ ДОСТУПА К ОБЪЕКТУ  this (super активирует this)  */
//         this.status = status;
//     }

//     changeStatus() {
//         this.status = !this.status;
//     }

//     // тут super - это обращение к родительской функции, иногда так пишут, может быть несколько super.super.x()
//     getFullStreamInfo() {
//         super.getFullInfo() + this.status;
//         // this.getFullInfo() + this.status; - тоже что и выше, просто сам пробежится по прототипам родителей и найдет то что нужно
//     }
// }





// ?????????????????????????????????????????????????????????
// ?????????????????????????????????????????????????????????????
// ?????????????????????? Допзадание 3. Модуль 6. ??????????????????????????
/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//     constructor(speed = 0,maxSpeed, running = false, distance = 0) {
//         /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, 
//             возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//         this.speed = speed;
//         this.maxSpeed = maxSpeed;
//         this.running = running;
//         this.distance = distance;
//     }

//     static getSpecs(arr) {
//         console.log(`${arr.maxSpeed} ${arr.running} ${arr.distance}`);
//     }
  
//     turnOn() {
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       return this.running = true;
//     }
  
//     turnOff() {
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       return this.running = false;
//     }
    
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if (spd <= this.maxSpeed) {
//         return this.speed = spd;
//       }
//     }
    
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if (spd <= this.maxSpeed && spd > 0) {
//         return this.speed = spd;
//       } else {
//           console.log('speed is not correctly');
//       }
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if (this.running) {
//         return this.distance = hours * this.speed;
//       } else {
//           console.log('car turnOff');
//       }
//     }
//   }

//   let mercedes = new Car (50, 300, false, 80);
//   console.log(mercedes.turnOn());
//   console.log(mercedes.turnOff());
//   console.log(mercedes.turnOn());
//   console.log(mercedes.accelerate(110));
//   console.log(mercedes.decelerate(80));
//   console.log(mercedes.drive(3));

// // ?????????????????????????????????????????????????????????
// // ?????????????????????????????????????????????????????????????
// // ?????????????????????? Допзадание 4. Модуль 6. ??????????????????????????
// /*
//   Добавьте к классу Car из предыдущего задания статический
//   метод getSpecs, который получает объект-машину как аргумент
//   и выводит в консоль значения полей maxSpeed, running и distance.
  
//   Использование будет выглядеть следующим образом:
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
// */
 
// const someCar = new Car(100, 100, true, 200);
// console.log(someCar.turnOn());
// console.log(someCar.drive(2));
// Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!Геттеры и сеттеры !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// class User {
//   // собственные свойства класса желателно размещать в конструкткоре
//   constructor (name, surname) {
//     this._name = name;
//     this._surname = surname;
//   }

//   // но есть возможноть размещать вне конструктора
//   // С ПОМОЩЬЮ get МОЖНО ТОЛЬКО ПРОЧИТАТЬ, ПЕРЕЗАПИСАТЬ НЕЛЬЗЯ. Используется без аргументов всегда.
//   get name () {
//     return this._name;
//   }

//   // использует только один аргумент, записывает информацию но не прочитать, использовать только в паре с  get  иначе не прочитает пользователь его. НЗВАНИЕ get и set ДОЛЖНЫ БЫТЬ ОДИНАКОВЫМИ ЧТОБЫ ОБРАЩАЛИСЬ К ОДНОЙ И ТОЙ ЖЕ ПЕРЕМЕННОЙ
//   set name (value) {
//     this._name = value;
//   }

//   set age(num) {
//     this._age = num;
//   }
  
//   get age() {
//     return this._age;
//   }
// }

// const mango = new User('Mango', 7, 26);

// // обращение к get и set не требует вызова - т.е. без ()
// console.log( mango.name ); // Mango

// mango.name = "Mango the Fluffy";
// console.log( mango.name ); // Mango the Fluffy
// User.age = 25;
// console.log(User.age);


// // ?????????????????????????????????????????????????????????
// // ?????????????????????????????????????????????????????????????
// // ?????????????????????? Допзадание 5. Модуль 6. ??????????????????????????
/* Добавьте классу Car свойство value - цена автомобиля. 
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value

  Использование выглядит следующим образом:
  const myCar = new Car(50, 2000); 
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000    */

// class Car {
//   constructor(maxSpeed, value) {
//     this.maxSpeed = maxSpeed;
//     this._value = value;
//   }
//   get value () {
//     return this._value;
//   }
//   set value (num) {
//     this._value = num;
//   }
// }
// // Использование выглядит следующим образом:
// const myCar = new Car(50, 2000);
// myCar.value; // 2000
// console.log(myCar.value);
// myCar.value = 4000;
// myCar.value; // 4000
// console.log(myCar.value);



// // ?????????????????????????????????????????????????????????
// // ?????????????????????????????????????????????????????????????
// // ?????????????????????? ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ от Вовы Мельника ??????????????????????????
// Part 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
// name - імя
// life - житя =100
// level - рівень = 1
// хр - досвід = 0
// stamina - витривалість = 100

class Hero {
  constructor(name, life = 100, level = 1, xp = 0, stamina = 100) {
    this.name = name;
    this.life = life;
    this.level = level;
    this.xp = xp;
    this.stamina = stamina;
  }
  // Клас буде мати методи :
  // 1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
  riseLevel () {
    this.xp = 1000;
    if (this.xp === 1000) {
      this.level = this.level + 1;
    }
  }
  // 2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу метод обнуляє поле до 0.
  addXp (xpPlus) {
    this.xp += xpPlus;
    if (this.xp === 1000) {
      this.xp = 0;
    }
  }
  // 3) walk - метод що виводить в консоль фразу "name walking"
  walk () {
    console.log(`'${this.name}' walking`);
  }
  // 4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 
  rest () {
    this.stamina = 100;
    console.log('Recovered');
  }
}
// Створити героя і викликати для нього метод addXp(50) і addXp(950)
let hero1 = new Hero('Superman');
// Далі викликати метод riseLevel() що збільшить рівень до 2.
hero1.riseLevel();
console.log(hero1.level);
// викликати метод walk.
hero1.walk();

// Part 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Написати класи Людина, Гном, Маг які будуть насладувати все від класа Герой.
// Ці 3 класа будуть мати додаткову властивість race - раса.
// Людина додатково матиме поле - strength = 100
// Для людини додати метод - wardenFight - який при кожному запуску зменьшує поле stamina на 20.
// Коли поле stamina стане 0 потрібно викликати метод rest() щоб відновити її значення.
class Human extends Hero {
  constructor(name, life, level, xp, stamina, strength = 100, race = 'Human') {
    super(name, life, level, xp, stamina);
    this.strength = strength;
    this.race = race;
  }
  wardenFight() {
    this.stamina = this.stamina - 20;
    if (this.stamina === 0) {
      this.rest();
    }
  }
}
// Гном матиме додатково поле - rage = 0
// Для гнома додати метод berserk'sFury - який при кожному виклику збільшує поле 
// rage на 30. Якщо rage = 100 обнулити поле stamina і rage та викликати метод rest().
class Gnome extends Hero {
  constructor(name, life, level, xp, stamina, rage = 0, race = 'Gnome') {
    super(name, life, level, xp, stamina);
    this.rage = rage;
    this.race = race;
  }
  berserksFury() {
    this.rage = this.rage + 30;
    if (this.rage >= 100) {
      this.stamina = 0;
      this.rest();
    }
  }
}
// Маг матиме додаткове поле - mana = 100
// Для мага додати метод spell який при виклику зменьшує занчення mana на 25 і stamina на 25.
// Коли значення stamina стає 0 потрібно викликати метод rest(). 
// Додати метод reload() який оновлює поле mana до 100
class Magician extends Hero {
  constructor(name, life, level, xp, stamina, mana = 100, race = 'Human-Magician') {
    super(name, life, level, xp, stamina);
    this.mana = mana;
    this.race = race;
  }
  spell() {
    this.mana = this.mana - 25;
    this.stamina = this.stamina - 25;
    if (this.stamina === 0) {
      this.rest();
    }
  }
  reload() {
    this.mana = 100;
  }
}
// Створити по одному екземпляру кожного класу для кожного з них обнулити показник stamina викликом їхніх спеціальних методів, щоб в консолі зявилося повідомлення 'Recovered' 
let solo = new Human('Captain Solo');
solo.wardenFight();
solo.wardenFight();
solo.wardenFight();
solo.wardenFight();
solo.wardenFight();
let gimli = new Gnome('Gimli');
gimli.berserksFury();
gimli.berserksFury();
gimli.berserksFury();
gimli.berserksFury();
let gendalf = new Magician('Gendalf');
gendalf.spell();
gendalf.spell();
gendalf.spell();
gendalf.spell();
// Part 3 
// Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
// skill - поле де додається навик 'fireball'
// Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();
class FireMag extends Magician {
  constructor(name, skill, life, level, xp, stamina, mana , race) {
    super(name, life, level, xp, stamina, mana, race);
    this.skill = skill;
  }
  shootFireBall() {
    console.log(`Вогняний шар запущений і нанесен шкоди на ${Math.floor(Math.random() * 30) + 1}`);
    this.spell();
  }
}
// Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). після цього в консолі має зявитися напис 'Recovered'.
let fireGendalf = new FireMag ('Gendalf-grey', 'firemag');
fireGendalf.shootFireBall();
fireGendalf.shootFireBall();
fireGendalf.shootFireBall();
fireGendalf.shootFireBall();