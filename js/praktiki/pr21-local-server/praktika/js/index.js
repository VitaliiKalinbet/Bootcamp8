'use strict'

// let ul = document.querySelector('.list');
// let input = document.querySelector('[type="text"]');
// let form = document.querySelector('#form');

// // мы динамично считываем информацию при загрузке ДОМа с сервера 
// function loadTasks() {
//     fetch('http://localhost:3001/tasks')
//     .then(res => res.json())
//     .then(data => createLi(data));
// }

// function createLi (arr) {
//     for (let el of arr) {
//         let li = document.createElement('li');
//         li.textContent = el.text;
//         li.setAttribute('data-id', el.id);
//         ul.append(li);
//     }
// }

// window.addEventListener('DOMContentLoaded', loadTasks);

// // теперь хотим динамично записывать информацию на сервер и обновлять на сайте
// // чтобы хорошо работали пост запросы передавайте пожалуйста заголовки
// function postTasks (e) {
//     e.preventDefault();
//     let value = input.value;
//     if (value !== '') {
//         fetch('http://localhost:3001/tasks', {
//             method: 'post',
//             body: JSON.stringify({
//                 text: value
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(data => createNewLi(data))
//         // в дате получаем обработанный ответ от сервера и обрабатываем его с помощью ф-ии createNewLi
//     }
//     form.reset();
// }

// function createNewLi(obj) {
//     let li = document.createElement('li');
//     li.textContent = obj.text;
//     li.setAttribute('data-id', obj.id);
//     ul.append(li);
// }

// form.addEventListener('submit', postTasks);

// // если хотим удалить элемент
// function deleteLi (e) {
//     // console.log(e.target.dataset.id);
//     let id = e.target.dataset.id;
//     fetch(`http://localhost:3001/tasks/${id}`, {
//         method: 'delete'
//     }).then( () => e.target.remove())
// }

// ul.addEventListener('click', deleteLi);

// // если хоти обновить/перезаписать информацию существующего элемента - метод PUT
// function updateData() {
//     fetch('http://localhost:3001/tasks/6', {
//         method: 'put',
//         body: JSON.stringify({text: 'Огурец'}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }

// updateData();


/* ======================================================================================================
======================================================================================================
======================================================================================================
======================================Модуль 10 дополнительное задание №1============================= */
/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector(".js-submit");
// const result = document.querySelector(".js-result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";
// let form = document.querySelector('.search-form');

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//     let nameCountry = input.value;
//     evt.preventDefault();
//     fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`)
//     .then(responce => responce.json())
//     .then(data => {
//         // console.log(data);
//         addInResult(data)})
//     .catch(er => console.log(er))
// }
// form.addEventListener('submit', fetchCountryData);

// function addInResult (arr) {
//     result.innerHTML = '';
//     let countryName = document.createElement('p');
//     countryName.textContent = `Country name: ${arr[0].name}`;
//     let capitalName = document.createElement('p');
//     capitalName.textContent = `Capital: ${arr[0].capital}`;
//     let mainCurrency = document.createElement('p');
//     mainCurrency.textContent = `Main currency: ${arr[0].currencies[0].name}`;
//     let flag = document.createElement('img');
//     flag.setAttribute('src',arr[0].flag);
//     flag.setAttribute('width','300');
//     flag.setAttribute('height','300');
//     result.append(countryName, capitalName, mainCurrency, flag);
// }

/* ======================================================================================================
======================================================================================================
======================================================================================================
======================================Модуль 10 дополнительное задание №2============================= */
/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = "";
// let form = document.querySelector('.search-form');

// submitBtn.addEventListener("click", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//     let nameUser = input.value;
//     evt.preventDefault();
//     fetch(`https://api.github.com/users/${nameUser}`)
//     .then(responce => responce.json())
//     .then(data => {
//         console.log(data);
//         addInResult(data)})
//     .catch(er => console.log(er))
//     }
//     form.addEventListener('submit', fetchUserData);
    
//     function addInResult (obj) {
//         result.innerHTML = '';
//         let pAvatar = document.createElement('p');
//         pAvatar.textContent = 'Avatar:';
//         let avatar = document.createElement('img');
//         avatar.setAttribute('src', obj.avatar_url);
//         let username = document.createElement('p');
//         username.textContent = `Username: ${obj.name}`;
//         let bio = document.createElement('p');
//         bio.textContent = `Bio: ${obj.bio}`;
//         let publicRepos = document.createElement('p');
//         publicRepos.textContent = `Public repos: ${obj.public_repos}`;
//         result.append(pAvatar, avatar, username, bio, publicRepos);
//     }

/* ======================================================================================================
======================================================================================================
======================================================================================================
======================================Модуль 10 дополнительное задание №3============================= */
/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

// const getBtn = document.querySelector(".js-get");
// const result = document.querySelector(".result");

// /*
//   @param {FormEvent} evt
// */

// function fetchUsers(evt) {
//     evt.preventDefault();
//     fetch(`https://test-users-api.herokuapp.com/users/`)
//     .then(responce => responce.json())
//     .then(data => {
//         console.log(data);
//         addInResult(data)})
//     }
// getBtn.addEventListener("click", fetchUsers);
    
// function addInResult (obj) {
//     result.innerHTML = '';
//     let table = document.createElement('table');
//         let tr = document.createElement('tr');
//             let tdID = document.createElement('th');
//             tdID.style.border = '1px solid black';
//             tdID.textContent = 'ID';
//             let tdNAME = document.createElement('th');
//             tdNAME.style.border = '1px solid black';
//             tdNAME.textContent = 'NAME';
//             let tdAGE = document.createElement('th');
//             tdAGE.style.border = '1px solid black';
//             tdAGE.textContent = 'AGE';
//             tr.append(tdID, tdNAME, tdAGE);
//         table.append(th);
//     for (let el of obj.data) {
//         let tr = document.createElement('tr');
//             let tdId = document.createElement('td');
//             tdId.style.border = '1px solid black';
//             tdId.style.textAlign = 'center';
//             tdId.textContent = el.id;
//             let tdName = document.createElement('td');
//             tdName.style.border = '1px solid black';
//             tdId.style.textAlign = 'center';
//             tdName.textContent = el.name;
//             let tdAge = document.createElement('td');
//             tdAge.style.border = '1px solid black';
//             tdId.style.textAlign = 'center';
//             tdAge.textContent = el.age;
//             tr.append(tdId, tdName, tdAge);
//         table.append(tr);
//     }
//     result.append(table);
// }


/* ======================================================================================================
======================================================================================================
======================================================================================================
======================================Модуль 10 дополнительное задание №4============================= */
/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

// const input = document.querySelector("input");
// const postBtn = document.querySelector(".js-post");
// const result = document.querySelector(".result");

// function getUserByName(evt) {
//     evt.preventDefault();
//     fetch(`https://test-users-api.herokuapp.com/users/`)
//     .then(responce => responce.json())
//     .then(data => {
//         // console.log(data);
//         addInResult(data)})
//     .catch(er => console.log(er))
//     }
    
// postBtn.addEventListener("click", getUserByName);
    
// function addInResult (obj) {
//     result.innerHTML = '';
//     let a = obj.data.find(el => el.name === input.value);
//     if (a) {
//         console.log(a);
//     } else {
//         console.log('Такого пользователя в списке нет!');
//     }
// }

/* ======================================================================================================
======================================================================================================
======================================================================================================
https://api.nasa.gov/index.html#live_example
https://api.nasa.gov/index.html#getting-started
======================================Вытянуть информацию из наса============================= */

let result = document.querySelector('.root');

function getInfoByNasa() {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`)
  .then(responce => responce.json())
  .then(data => {
      console.log(data);
      addInResult(data)
    })
  }
    
window.addEventListener("DOMContentLoaded", getInfoByNasa);
    
function addInResult (obj) {
    result.innerHTML = '';
    let img = document.createElement('img');
    img.setAttribute('src', obj.hdurl);
    let pImg = document.createElement('p');
    pImg.textContent = `Copyright: ${obj.copyright}`;
    let h2Title = document.createElement('h2');
    h2Title.textContent = obj.title;
    let titleAbout = document.createElement('p');
    titleAbout.textContent = obj.explanation;
    result.append(img, pImg, h2Title, titleAbout);
}