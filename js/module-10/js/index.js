'use strict'

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const btn = document.querySelector(".js-post");
const btnAllUsers = document.querySelector(".js-get-all-users");
const btnAllUsersdelete = document.querySelector(".js-get-all-users-delete");
const btnAddUser = document.querySelector('.add-user');
const result = document.querySelector(".result");
const resultAllUsers = document.querySelector(".resultAllUsers");
const inputId = document.querySelector("[type='text']");
const inputName = document.querySelector('.name');
const inputAge = document.querySelector('.age');
const inputDeleteUserFromId = document.querySelector('.delete-from-id');
const putInputId = document.querySelector('.put-input-id');
const putInputName = document.querySelector('.put-input-name');
const putInputAge = document.querySelector('.put-input-age');
const form = document.querySelector(".search-form");
const formDeleteId = document.querySelector('.delete-form');
const putForm = document.querySelector('.put-form');

// Cоздание первой части, функции getAllUsers() и ее вспомогательных функций==========================
function getAllUsers() {
    fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(responce => responce.json())
    .then(data => addInResult(data));
};
btnAllUsers.addEventListener("click", getAllUsers);
btnAllUsersdelete.addEventListener('click',() => resultAllUsers.innerHTML = '');
function addInResult (obj) {
    resultAllUsers.innerHTML = '';
    let table = document.createElement('table');
        let tr = document.createElement('tr');
            let tdID = document.createElement('th');
            tdID.style.border = '1px solid black';
            tdID.textContent = 'ID';
            let tdNAME = document.createElement('th');
            tdNAME.style.border = '1px solid black';
            tdNAME.textContent = 'NAME';
            let tdAGE = document.createElement('th');
            tdAGE.style.border = '1px solid black';
            tdAGE.textContent = 'AGE';
            tr.append(tdID, tdNAME, tdAGE);
        table.append(tr);
    for (let el of obj.data) {
        let tr = document.createElement('tr');
            let tdId = document.createElement('td');
            tdId.style.border = '1px solid black';
            tdId.style.textAlign = 'center';
            tdId.textContent = el.id;
            let tdName = document.createElement('td');
            tdName.style.border = '1px solid black';
            tdId.style.textAlign = 'center';
            tdName.textContent = el.name;
            let tdAge = document.createElement('td');
            tdAge.style.border = '1px solid black';
            tdId.style.textAlign = 'center';
            tdAge.textContent = el.age;
            tr.append(tdId, tdName, tdAge);
        table.append(tr);
    }
    resultAllUsers.append(table);
}

// Cоздание второй части, функции getUserById(id) и ее вспомогательной функции==========================
function getUserById(evt) {
    evt.preventDefault();
    fetch(`https://test-users-api.herokuapp.com/users/${inputId.value}`)
    .then(responce => responce.json())
    .then(data => addInResultUserById(data))
    .catch(err => alert(`Такого пользователя в БД нет. ОШИБКА: ${err}`));
}
btn.addEventListener('click', getUserById);

function addInResultUserById (obj) {
    if (inputId.value !== '') {
        result.innerHTML = '';
        let h2 = document.createElement('h2');
        h2.textContent = 'Найден пользователь по заданному id:' 
        let pId = document.createElement('p');
        pId.textContent = `id: ${obj.data.id}`;
        let pName = document.createElement('p');
        pName.textContent = `User name: ${obj.data.name}`;
        let pAge = document.createElement('p');
        pAge.textContent = `User age: ${obj.data.age}`;
        result.append(h2, pId, pName, pAge);
    } else if (inputId.value === '') {
        alert('Введите id');
    }
}

// Cоздание третьей части, функции addUser(name, age) и ее вспомогательных функций==========================
function addUser(evt) {
    evt.preventDefault();
    fetch(`https://test-users-api.herokuapp.com/users/`, {
        method: 'post',
        body: JSON.stringify({
            name: inputName.value,
            age: inputAge.value
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
    })
    .then(responce => responce.json())
    .then(data => console.log(data))
    .catch(er => console.log(er))
}
btnAddUser.addEventListener('click', addUser);

// Cоздание четвертой части, функция removeUser(id) - должна удалять из БД юзера по указанному id.
function removeUser(evt) {
    evt.preventDefault();
    fetch(`https://test-users-api.herokuapp.com/users/${inputDeleteUserFromId.value}`, {
        method: 'delete',
    })
    formDeleteId.reset();
}
formDeleteId.addEventListener('submit', removeUser);

/* Cоздание пятой части, функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age. */
function updateUser(evt) {
    evt.preventDefault();
    console.log(putInputName.value);
    console.log(putInputAge.value);
    fetch(`https://test-users-api.herokuapp.com/users/${putInputId.value}`, {
        method: 'put',
        body: JSON.stringify({
            name: putInputName.value,
            age: putInputAge.value
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
    })
    putForm.reset();
}
putForm.addEventListener('submit', updateUser);
