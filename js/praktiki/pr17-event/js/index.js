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
