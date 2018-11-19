'use strict'

// 'Асинхронный код' 

// function sayHello() {
//     console.log('Hello!');
// }

// let timeOutId = setTimeout(sayHello, 2000);

// let intervalId = setInterval(sayHello, 1000);

// console.log('intervalId', intervalId);

// console.log('timeOutId', timeOutId);

// clearInterval(intervalId);
// clearTimeout(timeOutId);

// ================================================================================
// Работа со временем
// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

// промо акция интернет магазина
// let date = new Date('4, 2017, April');
// console.log(date);

// ==========================================================================================
// Практическая работа в классе 
// начало скидок 
// let deadLine = new Date(2018, 10, 23, 0, 0);
// console.log(deadLine);
// let today = Date.now();
// console.log(today);

// let delta = deadLine - today;
// console.log(delta);

// console.log(Math.floor(delta / 1000 % 60));
// console.log(Math.floor(delta / 1000  / 60 % 60));
// console.log(Math.floor(delta / 1000 / 60 / 60 % 60));
// console.log(Math.floor(delta / 1000 / 60 / 60 / 24));


// ===============================================================================================
// Таймер
// let deadline = new Date(2018, 10, 23, 0, 0);
// let daysContainer = document.querySelector('.days');
// let hoursContainer = document.querySelector('.hours');
// let minutesContainer = document.querySelector('.minutes');
// let secondsContainer = document.querySelector('.seconds');
// function timer() {
//     let today = Date.now();
//     let delta = deadline-today;
//     let seconds = Math.floor(delta/1000%60);
//     let minutes = Math.floor(delta/1000/60%60);
//     let hours = Math.floor(delta/1000/60/60%24);
//     let days = Math.floor(delta/1000/60/60/24);
//     console.log(`Days:${days}  hours:${hours}  minutes:${minutes}  seconds:${seconds}`);

//     daysContainer.textContent = days < 10 ?  `0${days}` : days;
//     hoursContainer.textContent = hours < 10 ?  `0${hours}` : hours;
//     minutesContainer.textContent = minutes < 10 ?  `0${minutes}` : minutes;
//     secondsContainer.textContent = seconds < 10 ?  `0${seconds}` : seconds;
// }
// let start = setInterval(timer, 1000);

// ================================================================================================
// Модуль 9 - Задания  
// Задание 1
/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/
// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// let jsStart = document.querySelector('.js-start');
// let jsStop = document.querySelector('.js-stop');
// let start;
// jsStart.addEventListener('click', () => {
//     start = setInterval(backgrColorChange, 1000);
//     function backgrColorChange() {
//     document.body.style.backgroundColor = colors[Math.floor(Math.random()*6)];
//     }
// });
// jsStop.addEventListener('click', () => {
//     let stop = clearInterval(start);
// })


// ================================================================================================
// Модуль 9 - Задания  
// Задание 2
/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/
// function getFormattedTime(time) {
//     let minutes = Math.floor(time / 1000 / 60 % 60);
//     let seconds = Math.floor(time / 1000 % 60);
//     let miliseconds = Math.floor(time / 100 % 10);
//     minutes = minutes < 10 ?  `0${minutes}` : minutes;
//     seconds = seconds < 10 ?  `0${seconds}` : seconds;
//     return `${minutes}:${seconds}.${miliseconds}`;
//   }
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   

// ================================================================================================
// Модуль 9 - Задания  
// Задание 3
/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");
const sectionTimer = document.querySelector(".timer");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};
let minutes;
let seconds;
let miliseconds;

/* * Вспомогательные функции  */

  function startTimer() {
    let dateNow = Date.now();
    timer.startTime = dateNow;
    let dateNowId = setInterval(x, 100);
    timer.id = dateNowId;
  };

  function stopTimer() {
    let resultLoup = document.createElement('p');
    resultLoup.textContent = `Время круга: ${minutes}:${seconds}.${miliseconds}`;
    sectionTimer.append(resultLoup);
    clearInterval(timer.id);
    clockface.textContent = '00:00.0';
};

    function x() {
        timer.deltaTime = Date.now() - timer.startTime;
        updateClockface(clockface, timer.deltaTime);
    }

  startBtn.addEventListener('click', startTimer);
  stopBtn.addEventListener('click', stopTimer);

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  // elem.textContent = getFormattedTime(time);
    minutes = Math.floor(time / 1000 / 60 % 60);
    seconds = Math.floor(time / 1000 % 60);
    miliseconds = Math.floor(time / 100 % 10);
    minutes = minutes < 10 ?  `0${minutes}` : minutes;
    seconds = seconds < 10 ?  `0${seconds}` : seconds;
    elem.textContent = `${minutes}:${seconds}.${miliseconds}`;
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
