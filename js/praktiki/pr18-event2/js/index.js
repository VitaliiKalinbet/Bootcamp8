/* Создать логику программы, которая будет реагировать на любые изменения внутри формы
1) Через квери селектор привязаться к форме
    1.1) Через квери селекторы привязатся к инпутам обоим и к результирующему спану
2) Форма будет реагировать на событие инпут (т.е. любые изменения инпутов в себе)
3) Создать функцию которая в зависимости от цены мяса и положения ползунка во втором
инпуте (к-ва мяса), будет перемноржать одно на другое и выводить результат в параграф */

// let form = document.querySelector('.form');
// let price = document.querySelector('#price');
// let quantity = document.querySelector('#quantity');
// let amount = document.querySelector('.amount');
// let total = document.querySelector('.total');
// function Calculate () {
//     total.textContent = `${(Number(price.value) * Number(quantity.value)).toFixed(2)} грн`;
//     amount.textContent = quantity.value;
// };
// form.addEventListener('input', Calculate);
// window.addEventListener('DOMContentLoaded', Calculate);

// =======================================================================================
// Задание 2
/* Чтобы когда прокрутили хедер добавляем класс чтобы хедер прилипал сверху
1) Достучаться к хедеру, навигатору
2) На событие в виндоу привязать событие скрол которое запускает функцию добавления класса
3) Создать функцию в которой
    3.1) Определяется высота хедера с помощью clientHeight
    3.2) Если значение pageYOffset больше или равно     */
// let header = document.querySelector('.header');
// let navigation = document.querySelector('#navigation');
// function Nav () {
//     if (header.clientHeight <= pageYOffset) {
//         navigation.classList.add('fixed-nav');
//     } else {
//         navigation.classList.remove('fixed-nav');
//     }
// };
// window.addEventListener('scroll', Nav);


// =======================================================================================
// Задание 3
/* 1) Створити в HTML 5 кнопок
2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
    2.1) Сделать ивент при наведении mouseenter на каждую кнопку запускать одну общую функцию, которая будет менять их месторасположение сразу, так чтобы нельзя было на них нажать
3) Нова позиція кнопок має бути випадковою
4) Кнопки не повинні виїжати за межі екрану
5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
6) Переміщення кнопок зробити плавним за допомогою transition
7) Визначати кнопку на якій відбулася подія можна двома способами:
7.1) event
7.2) this
8) Корисні команди:
window.innerWidth
window.innerHeight
clientHeight
clientWidth
mouseenter */

// let btnBlue = document.querySelector('.blue');
// let btnGreen = document.querySelector('.win');
// let btnRed = document.querySelector('.faill');
// let btnBrown = document.querySelector('.danger');
// let btnYellowGreen = document.querySelector('.atention');
// let btn1 = document.querySelector('.btn');
// console.log(btn1);
// // console.log(Math.random()*window.innerHeight);
// let container = document.querySelector('.container');

// function changePositionButton () {
//     let activeBtn = event.target;
//     activeBtn.style.top = `${(Math.random()*(window.innerHeight - activeBtn.clientHeight)).toFixed(0)}px`;
//     console.log(activeBtn.style.top);
//     activeBtn.style.left = `${(Math.random()*(window.innerWidth - activeBtn.clientWidth)).toFixed(0)}px`;
//     console.log(activeBtn.style.left);
// };
// container.addEventListener('mouseover', changePositionButton);

// ======================
// let btn = [...document.querySelectorAll('.btn')];
// console.log(btn);
// function changePositionButton () {
//     let activeBtn = event.target;
//     activeBtn.style.top = `${(Math.random()*(window.innerHeight - activeBtn.clientHeight)).toFixed(0)}px`;
//     console.log(activeBtn.style.top);
//     activeBtn.style.left = `${(Math.random()*(window.innerWidth - activeBtn.clientWidth)).toFixed(0)}px`;
//     activeBtn.style.backgroundColor = `rgb(${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)})`;
//     console.log(activeBtn.style.left);
//     console.log(event.target);
// };
// for (let el of btn) {
//     el.addEventListener('mouseenter', changePositionButton);
// }

// ======================
// то же самое с this
// let btn = [...document.querySelectorAll('.btn')];
// console.log(btn);
// function changePositionButton () {
//     let activeBtn = this;
//     activeBtn.style.top = `${(Math.random()*(window.innerHeight - activeBtn.clientHeight)).toFixed(0)}px`;
//     console.log(this.style.top);
//     this.style.left = `${(Math.random()*(window.innerWidth - activeBtn.clientWidth)).toFixed(0)}px`;
//     this.style.backgroundColor = `rgb(${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)})`;
//     console.log(this.style.left);
//     console.log(this);
// };
// for (let el of btn) {
//     el.addEventListener('mouseenter', changePositionButton);
// }

// =======================================================================================
// Задание 4    КАЛЬКУЛЯТОР
/* 1) Створити калькулятор за допомогою класа
2) Клас має мати такі методи:
2.1) getValue - запитати 2 числа в користувача і зберегти їх 
2.2) sum - метод що додає 2 числа;
2.3) minus - метод що віднімає 2 числа;
2.4) mult -метод що перемножує 2 отриманих числа
2.5) devide - метод ділить число а на b
2.6) pow - метод що підносить а до степеня b
3 ) створити в розмітці 6 кнопок кожна з яких буде запускати свій метод калькулятора
4 ) Вивести на екран резльтат роботи кожного метода калькулятора після натискання відповідної кнопки 
(Наприклад при натисканні на створену кнопку + вивести на екран фразу 
"Сума = і результат робити метода sum") */

// class Calculator {
//     constructor() {
//         this.oneNumber = null;
//         this.secondNumber = null;
//         this.resultPlace = document.querySelector('.result');
//         this.getValue = this.getValue.bind(this);
//         this.sum = this.sum.bind(this);
//         this.minus = this.minus.bind(this);
//         this.mult = this.mult.bind(this);
//         this.divide = this.divide.bind(this);
//         this.pow = this.pow.bind(this);
//     }

//     getValue() {
//         console.log(this);
//         let x = prompt('Введите первое число');
//         let y = prompt('Введите второе число');
//         if (x === null || y === null) {
//             alert('Пока!');
//         } else if (isNaN(x) || isNaN(y)) {
//             alert('Внимание, вводите числа!');
//         } else {
//         this.oneNumber = Number(x);
//         this.secondNumber = Number(y);
//         let numOne = document.createElement('p');
//         let numTwo = document.createElement('p');
//         numOne.textContent = `Первое число: ${this.oneNumber}`;
//         numTwo.textContent = `Второе число: ${this.secondNumber}`;
//         this.resultPlace.append(numOne, numTwo);
//         }
//     }

//     sum() {
//         let sumPlace = document.createElement('p');
//         sumPlace.textContent = `Результат сложения: ${this.oneNumber + this.secondNumber}`;
//         this.resultPlace.append(sumPlace);
//     }

//     minus() {
//         let minusPlace = document.createElement('p');
//         minusPlace.textContent = `Результат вычитания: ${this.oneNumber - this.secondNumber}`;
//         this.resultPlace.append(minusPlace);
//     }

//     mult() {
//         let multPlace = document.createElement('p');
//         multPlace.textContent = `Результат умножения: ${this.oneNumber * this.secondNumber}`;
//         this.resultPlace.append(multPlace);
//     }

//     divide() {
//         let dividePlace = document.createElement('p');
//         dividePlace.textContent = `Результат деления: ${this.oneNumber / this.secondNumber}`;
//         this.resultPlace.append(dividePlace);
//     }

//     pow() {
//         let powPlace = document.createElement('p');
//         powPlace.textContent = `Результат возведения в степень: ${Math.pow(this.oneNumber, this.secondNumber)}`;
//         this.resultPlace.append(powPlace);
//     }
// };
// let calc = new Calculator();
// let start = document.querySelector('.get-Value');
// let sum = document.querySelector('.sum');
// let minus = document.querySelector('.minus');
// let mult = document.querySelector('.mult');
// let divide = document.querySelector('.divide');
// let pow = document.querySelector('.pow');
// start.addEventListener('click', calc.getValue);
// sum.addEventListener('click', calc.sum);
// minus.addEventListener('click', calc.minus);
// mult.addEventListener('click', calc.mult);
// divide.addEventListener('click', calc.divide);
// pow.addEventListener('click', calc.pow);


// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №4    
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
// let result = document.querySelector('.result');
// let form = document.querySelector('.question-form');
// let arr = [...document.querySelectorAll('[type="radio"]')];
// let span = document.createElement('span');

// function ShowChoice(event) {
//     event.preventDefault();
//     span.innerHTML = '';
//     let res = arr.filter(el => el.checked === true);
//     span.append(res[0].value.toUpperCase());
//     result.append(span);
// }
// form.addEventListener('submit', ShowChoice);

// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №5
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/
// let imagesList = document.querySelector('.images');
// function showURL() {
//     alert(event.target.src);
// }
// imagesList.addEventListener('click', showURL);

// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №6
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/
// let list = document.querySelector('.list');
// let buttonList = [...document.querySelectorAll('button')];
// let listItem = [...document.querySelectorAll('li')];
// function deleteListItem (e) {
//     let x;
//     for (let el of buttonList) {
//         if (el === e.target) {
//             x = buttonList.indexOf(el);
//             listItem[x].remove(); 
//         }
//     }  
// }
// list.addEventListener('click', deleteListItem);

// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №7
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/
// let arrOfInputs = [...document.querySelectorAll('input')];
// let input2 = document.querySelector('[data-length="2"]');
// let input4 = document.querySelector('[data-length="4"]');
// let input8 = document.querySelector('[data-length="8"]');
// let input16 = document.querySelector('[data-length="16"]');
// function correctInput () {
//     for (let el of arrOfInputs) {
//         if (el.dataset.length < el.value.length) {
//             el.style.outline = '2px solid green';
//         } else {
//             el.style.outline = '2px solid red';
//         }
//     }
// }
// input2.addEventListener('blur', correctInput);
// input4.addEventListener('blur', correctInput);
// input8.addEventListener('blur', correctInput);
// input16.addEventListener('blur', correctInput);

// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №8
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/
// let input = document.querySelector('[class="input"]');
// let p = document.querySelector('.input-value');
// let span = document.createElement('span');
// let form = document.querySelector('form');
// p.append(span);
// function inputInFocus () {
//   console.log('Input is in focus!');
// };
// function changeInput () {
//   span.textContent = input.value;
// }
// input.addEventListener('focus', inputInFocus);
// input.addEventListener('keyup', changeInput);


// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №9
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
*/
// let openModal = document.querySelector('.js-open-modal');
// let modal = document.querySelector('.modal');
// let btnClose = document.querySelector('.js-close-modal');
// let fonCloseM = document.querySelector('.js-modal-backdrop');

// function openM () {
//   modal.classList.remove('modal-hidden');
// }

// function closeM () {
//   modal.classList.add('modal-hidden');
// }

// function hide () {
//   console.log(event.target);
//   console.log(this);
//   if (this !== event.target) {
//     return
//   } else {
//     closeM();
//   }
// }

// openModal.addEventListener('click', openM);
// btnClose.addEventListener('click', closeM);
// fonCloseM.addEventListener('click', hide);

// =======================================================================================
// МОДУЛЬ 8 Дополнительное Задание №10
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
const menu = document.querySelector('.js-menu');
const links = menu.querySelectorAll('.menu-link');
console.log(links);

function changeFon (event) {
  const nodeName = event.target.nodeName;
  event.preventDefault();
  if (nodeName !== 'A') {
    return;
  }
  change(event, links);
}

function change (event, links) {
  links.forEach(link => {
    if (link === event.target) {
      link.classList.add('menu-link-active');
    } else if (link !== event.target){
      link.classList.remove('menu-link-active');
    }
  })
}

menu.addEventListener('click', changeFon);
