'use strict'

// ВОМ - набор методов встроенных в браузер

// !!!!!!!!!!!!!!!!!!!!!!!!!!! Обьект navigator !!!!!!!!!!!!!!!
// console.log(navigator);  // appVersion: "5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, li
// console.log(navigator.userAgent); //Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36 
// // тут можно стягивать информацию в бекенд, фильтровать, делать выводы и т.д.
// console.log(navigator.vendor); // На каком браузере сейчас - Google Inc.

// !!!!!!!!!!!!!!!!!!!!!!!!!!! Обьект screen !!!!!!!!!!!!!!!
// console.log(window.screen);
// Screen {availWidth: 1366, availHeight: 728, width: 1366, height: 768, colorDepth: 24, …}
// тут можно собрать статистику о расширениях экрана с которыми заходят на сайьт
// можно выявить брейк поинты основные
/* availHeight: 728
availLeft: 0
availTop: 0
availWidth: 1366
colorDepth: 24
height: 768
orientation: ScreenOrientation {angle: 0, type: "landscape-primary", onchange: null}
pixelDepth: 24
width: 1366  

availHeight - полезное расширение экрана без меню пуск, height - характеристики монитора*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!! Обьект location - твое местонахождение!!!!!!!!!!!!!!!
// console.log(location);
// pathname: "/js/js_variables.asp"
// href: "https://www.w3schools.com/js/js_varia

// !!!!!!!!!!!!!!!!!!!!!!!!!!! Обьект history - история. Ситуативный обьект, который обновляется каждый раз при загрузке заново сайта!!!!!!!!!!!!!!!
// console.log(history);
// записываются данные на каких ссылках мы были пока не дошли до текущего положения
// length: 7
// back: ƒ back()  - возвращает назад на одну страницу
/* back: ƒ back()
forward: ƒ forward()
go: ƒ go()
length: (...)
pushState: ƒ pushState()
replaceState: ƒ replaceState()
scrollRestoration: (...)
state: (...)
constructor: ƒ History()
Symbol(Symbol.toStringTag): "History"
get length: ƒ ()
get scrollRestoration: ƒ ()
set scrollRestoration: ƒ ()
get state: ƒ ()
__proto__: Object */ 


function showLocation(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    alert("Latitude : " + latitude + " Longitude: " + longitude);
 }

 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }

 function getLocation() {

    if(navigator.geolocation) {

       navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
 }

getLocation();


// console.log(navigator.geolocation.getCurrentPosition());
// console.log(navigator.geolocation.getCurrentPosition);