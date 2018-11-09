'use strict'

// let btn = document.querySelector('#btn');
// function Hello() {
//     alert('Hello user');
//     btn.removeEventListener('click', Hello);
// };
// btn.addEventListener('click', Hello);


// ==============================================


// let btn = document.querySelector('#btn');
// function eventInfo() {
//     console.log(event);
// }
// // event - объект java scripta, зарезервированное слово, куда все события попадают
// btn.addEventListener('click', eventInfo);
/*
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 21
clientY: 17
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 21
layerY: 17
metaKey: false
movementX: 0
movementY: 0
offsetX: 11
offsetY: 7
pageX: 21                       // РАЗМЕР ЭЛЕМЕНТА НА КОТОРЫЙ НАЖАЛИ!!!!!!!!!
pageY: 17                       // РАЗМЕР ЭЛЕМЕНТА НА КОТОРЫЙ НАЖАЛИ!!!!!!!!!
path: (5) [button#btn, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 21
screenY: 88
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: button#btn
target: button#btn              // поле обьекта ивент который хранит информацию о элементе
timeStamp: 2411.900000006426
toElement: button#btn
type: "click"
view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
which: 1
x: 21
y: 17  */

// =======================================================

// let btn = document.querySelector('#btn');
// function eventInfo() {
//     console.log(event.target);
//     //хватает как querySelector элемент и можно с ним что угодно делать
// }
// // event - объект java scripta, зарезервированное слово, куда все события попадают
// btn.addEventListener('click', eventInfo);

// ==============================================================
// РАБОТА С ФОРМОЙ

// let sendDataBtn = document.querySelector('[type="submit"]');
// let forma = document.querySelector('#forma');
// let name = document.querySelector('#name');
// let lastName = document.querySelector('#lastName');
// function readValue () {
//     event.preventDefault();
//     console.log(name.value);
//     console.log(lastName.value);
//     // name.value = '';
//     // lastName.value = '';
//     forma.reset();
// };
// forma.addEventListener('submit', readValue);


// ====================================================================
// Задание с собеседования
// let list = document.querySelector('#list');
// let listItems = Array.from(list.children);
// console.log(listItems);
// function FindIndex () {
//     let index = event.target;
//     let indexOfElem = listItems.indexOf(index);
//     console.log(indexOfElem + 1);
// }
// list.addEventListener('click', FindIndex);

// ===========================================================================
// Конвертер
// let form1 = document.querySelector('#frm');
// let arr = [...document.querySelectorAll('input')];
// let metr = arr[0];
// function Convert () {
//     event.preventDefault();
//     let arrNumber = [1, 100, 0.001, 0.000621371, 39.370078740157, 3.28084, 1.09361];
//     let m = metr.value;
//     for (let el of arrNumber) {
//         arr[arrNumber.indexOf(el)].value = m * el;
//     }
// };
// form1.addEventListener('submit', Convert);

// =====================================================================================
// Модуль 8. Допзадание 1
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let btn = document.querySelector('.button');
// let  i = 1;
// function NumberOfClicks () {
//     event.preventDefault();
//     btn.textContent = i; 
//     i +=1;
// };
// btn.addEventListener('click', NumberOfClicks);

// =====================================================================================
// Модуль 8. Допзадание 2
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/
// let arrSumArg = [...document.querySelectorAll('input')];
// let btn = document.querySelector('button');
// let spanResult = document.querySelector('.result');
// function SumNumber () {
//     spanResult.textContent = [...document.querySelectorAll('input')].reduce((acc, el) => acc + Number(el.value), 0);
// }
// btn.addEventListener('click', SumNumber); 

// =====================================================================================
// Модуль 8. Допзадание 3
/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.

  1) Связатся с кнопкой плюс, минус, спаном со значением
  2) создать функцию на добавление одного и при клике на кнопку плюс она запускается
  3) создать ф-ю на отнимание 1 и при клике на кнопку минус она запускается
    3.1) сделать так чтобы значение отнимания от значения спана -1 не было меньше чем 0
*/
// let plusOne = document.querySelector('.js-add');
// let minusOne = document.querySelector('.js-sub');
// let spanResult = document.querySelector('.js-value');
// console.log(spanResult.textContent);
// function Plus () {
//     return spanResult.textContent = Number(spanResult.textContent) + 1;
// };
// plusOne.addEventListener('click', Plus);
// function Minus () {
//     if (spanResult.textContent > 0) {
//     return spanResult.textContent = Number(spanResult.textContent) - 1;
//     } else {
//         return;
//     }
// };
// minusOne.addEventListener('click', Minus);

// =====================================================================================
// Модуль 8. Допзадание 4
