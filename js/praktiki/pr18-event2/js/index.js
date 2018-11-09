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
let btn = [...document.querySelectorAll('.btn')];
console.log(btn);
function changePositionButton () {
    let activeBtn = event.target;
    activeBtn.style.top = `${(Math.random()*(window.innerHeight - activeBtn.clientHeight)).toFixed(0)}px`;
    console.log(activeBtn.style.top);
    activeBtn.style.left = `${(Math.random()*(window.innerWidth - activeBtn.clientWidth)).toFixed(0)}px`;
    activeBtn.style.backgroundColor = `rgb(${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)}, ${(Math.random()*255).toFixed(0)})`;
    console.log(activeBtn.style.left);
    console.log(event.target);
};
for (let el of btn) {
    el.addEventListener('mouseenter', changePositionButton);
}
