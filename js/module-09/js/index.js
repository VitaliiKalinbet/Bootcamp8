'use strict'

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
   Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/
// let buttonStart = document.querySelector('.js-start');
// let buttonTakeLap = document.querySelector('.js-take-lap');
// let buttonReset = document.querySelector('.js-reset');
// let time = document.querySelector('.js-time');
// let lapsUl = document.querySelector('.js-laps');

// const timer = {
//     startTime: null,
//     deltaTime: null,
//     id: null,
//     minutes: null,
//     seconds: null,
//     miliseconds: null,
//     isActive: false,
// };

// window.addEventListener('DOMContentLoaded', () => buttonReset.setAttribute('disabled', 'true'));

// function startTimer() {
//     if (!timer.isActive && buttonStart.textContent === 'Start') {
//         buttonReset.disabled = false;
//         timer.isActive = true;
//         timer.startTime = Date.now();
//         timer.id = setInterval(nowtimeMinusStarttime, 100);
//         buttonStart.textContent = 'Pause';
//     } else if (timer.isActive) {
//         clearInterval(timer.id);
//         buttonStart.textContent = 'Continue';
//         timer.isActive = false;
//     } else if (buttonStart.textContent === 'Continue') {
//         timer.isActive = true;
//         timer.startTime = Date.now() - timer.deltaTime;
//         timer.id = setInterval(nowtimeMinusStarttime, 100);
//         buttonStart.textContent = 'Pause';
//     } 
// };

// function resetTimer() {
//     clearInterval(timer.id);
//     time.textContent = '00:00.0';
//     timer.startTime = null;
//     timer.deltaTime = null;
//     timer.id = null;
//     timer.minutes = null;
//     timer.seconds = null;
//     timer.miliseconds = null;
//     timer.isActive = false;
//     buttonReset.disabled = true;
//     buttonStart.textContent = 'Start';
// };

// function nowtimeMinusStarttime() {
//     timer.deltaTime = Date.now() - timer.startTime;
//     updateClockface(time, timer.deltaTime);
// };

// function updateClockface(elem, time) {
//     timer.minutes = Math.floor(time / 1000 / 60 % 60);
//     timer.seconds = Math.floor(time / 1000 % 60);
//     timer.miliseconds = Math.floor(time / 100 % 10);
//     timer.minutes = timer.minutes < 10 ?  `0${timer.minutes}` : timer.minutes;
//     timer.seconds = timer.seconds < 10 ?  `0${timer.seconds}` : timer.seconds;
//     elem.textContent = `${timer.minutes}:${timer.seconds}.${timer.miliseconds}`;
// };

// function takeLoap() {
//     let li = document.createElement('li');
//     li.textContent = `Время круга: ${timer.minutes}:${timer.seconds}.${timer.miliseconds}`
//     lapsUl.append(li);
// };

// buttonStart.addEventListener('click', startTimer);
// buttonReset.addEventListener('click', resetTimer);
// buttonTakeLap.addEventListener('click', takeLoap);



/* ===================================================================================================
⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

class Stopwatch {
    constructor (parent) {
        this.parent = parent;
        this.timer = {
            startTime: null,
            deltaTime: null,
            id: null,
            minutes: null,
            seconds: null,
            miliseconds: null,
            isActive: false,
        };
        this.pResult = null;
        this.buttonStart = null;
        this.buttonTakeLap = null;
        this.buttonReset = null;
        this.listLap = null;
        this.time = null;
        this.create = this.create.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.nowtimeMinusStarttime = this.nowtimeMinusStarttime.bind(this);
        this.updateClockface = this.updateClockface.bind(this);
        this.takeLoap = this.takeLoap.bind(this);
    }

    create() {
        // Создание всей разметки:
        let divTimer = document.createElement('div');
        divTimer.classList.add('stopwatch');
                this.pResult = document.createElement('p');
                this.pResult.classList.add('time');
                this.pResult.classList.add('js-time');
                this.pResult.textContent = '00:00.0';
                this.buttonStart = document.createElement('button');
                this.buttonStart.classList.add('js-start');
                this.buttonStart.textContent = 'Start';
                this.buttonTakeLap = document.createElement('button');
                this.buttonTakeLap.classList.add('js-take-lap');
                this.buttonTakeLap.textContent = 'Lap';
                this.buttonReset = document.createElement('button');
                this.buttonReset.classList.add('js-reset');
                this.buttonReset.textContent = 'Reset';
                divTimer.append(this.pResult, this.buttonStart, this.buttonTakeLap, this.buttonReset);
            this.listLap = document.createElement('ul');
            this.listLap.classList.add('laps');
            this.listLap.classList.add('js-laps');
            this.parent.after(this.listLap);
        this.parent.append(divTimer);
        // Функционал созданных кнопок:
        this.buttonStart.addEventListener('click', this.startTimer);
        this.buttonTakeLap.addEventListener('click', this.takeLoap);
        this.buttonReset.addEventListener('click', this.resetTimer);
    }

    // Методы класса:
    startTimer() {
        if (!this.timer.isActive && this.buttonStart.textContent === 'Start') {
            this.buttonReset.disabled = false;
            this.timer.isActive = true;
            this.timer.startTime = Date.now();
            this.timer.id = setInterval(this.nowtimeMinusStarttime, 100);
            this.buttonStart.textContent = 'Pause';
        } else if (this.timer.isActive) {
            clearInterval(this.timer.id);
            this.buttonStart.textContent = 'Continue';
            this.timer.isActive = false;
        } else if (this.buttonStart.textContent === 'Continue') {
            this.timer.isActive = true;
            this.timer.startTime = Date.now() - this.timer.deltaTime;
            this.timer.id = setInterval(this.nowtimeMinusStarttime, 100);
            this.buttonStart.textContent = 'Pause';
        } 
    };

    resetTimer() {
        clearInterval(this.timer.id);
        this.listLap.innerHTML = '';
        this.pResult.textContent = '00:00.0';
        this.timer.startTime = null;
        this.timer.deltaTime = null;
        this.timer.id = null;
        this.timer.minutes = null;
        this.timer.seconds = null;
        this.timer.miliseconds = null;
        this.timer.isActive = false;
        this.buttonReset.disabled = true;
        this.buttonStart.textContent = 'Start';
    };

    nowtimeMinusStarttime() {
        this.timer.deltaTime = Date.now() - this.timer.startTime;
        this.updateClockface(this.timer.deltaTime);
    };

    updateClockface( time) {
        this.timer.minutes = Math.floor(time / 1000 / 60 % 60);
        this.timer.seconds = Math.floor(time / 1000 % 60);
        this.timer.miliseconds = Math.floor(time / 100 % 10);
        this.timer.minutes = this.timer.minutes < 10 ?  `0${this.timer.minutes}` : this.timer.minutes;
        this.timer.seconds = this.timer.seconds < 10 ?  `0${this.timer.seconds}` : this.timer.seconds;
        this.pResult.textContent = `${this.timer.minutes}:${this.timer.seconds}.${this.timer.miliseconds}`;
    };

    takeLoap() {
        let li = document.createElement('li');
        li.textContent = `Время круга: ${this.pResult.textContent}`
        console.log(li);
        this.listLap.append(li);
    };
};
// end class

let a = document.querySelector('.one');
let b = document.querySelector('.two');
let c = document.querySelector('.three');
let timerOne = new Stopwatch(a);
timerOne.create();
let timerTwo = new Stopwatch(b);
timerTwo.create();
let timerThree = new Stopwatch(c);
timerThree.create();
