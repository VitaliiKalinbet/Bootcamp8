'use strict'

// DOM (Document Object Model) — межплатформенный, независимый от языка интерфейс программирования.

// document - зарезервированное слово в js, покажет весь штмл документ
// console.log(document);

// // .querySelector - метод поможет нам обратиться к штмл элементу
// let title = document.querySelector('.title');
// console.log(title);
// let text = [...document.querySelectorAll('p')];
// //    или 
// let text2 = Array.from(document.querySelectorAll('p'));
// //    в текст и текст2 мы получаем псевдомассив и его сразу двумя способами преобразовываем в нормальный массив
// console.log(text);

// /* Старое обращение, не используется:
//         let text3 = document.getElementsByClassName('p');
//         let li = document.getElementsById('p');
//         let text4 = dodocument.getElementsByTagName('p'); */

// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children); 
// console.log(ul.parentNode); // родитель
// console.log(ul.nextElementSibling); // то что вложено рядом, тот что один после него
// console.log(ul.previousElementSibling); // один тот что перед ул на том же уровне
// // let c = Object.values(ul);
// // console.log(c);

// let text10 = document.querySelector('.par');
// console.log(text10);
// console.log(text10.classList.length);

// text10.classList.add('big-text');
// text10.classList.remove('par');
// text10.classList.toggle('par');

// console.log(text10.classList.contains('title'));
// console.log(text10.classList.contains('text'));

// const lnk = document.querySelector('.link');
// console.log(lnk);
// console.log(lnk.hasAttribute('href')); //true
// console.log(lnk.hasAttribute('title')); // false
// console.log(lnk.getAttribute('href'));  // https://www.google.com/ //- string
// console.log(lnk.href);

// console.log(lnk.setAttribute('title', 'super link'));
// console.log(lnk.setAttribute('id', 'idFromJs'));

// lnk.removeAttribute('title');

// let li = document.querySelector('#one');
// console.log(li.dataset.number);

// let p = document.querySelector('.text');
// console.log(p.textContent);
// //    или 
// let b = document.querySelector('.text').innerHTML;
// console.log(b);

// // РАЗНИЦА .textContent     .innerHTML
// let vl = document.querySelector('.list');
// console.log(vl.textContent); // только текст вытягивает : 
// // item 1
// // item 2
// // item 3
// console.log(vl.innerHTML); // вытягивает и теги в формате строки:
// /* <li class="item" data-number="55" data-info="first" id="one"><a href="https://www.google.com/" class="link" id="idFromJs">item 1</a></li>
// <li class="item" data-info="second"><a href="1">item 2</a></li>
// <li class="item" data-info="third"><a href="2">item 3</a></li> */

// // Создание нового html элемента 
// let mainTitle = document.createElement('h1');
// mainTitle.classList.add('main-title');
// mainTitle.textContent = 'I am Title created from JS';
// console.log(mainTitle);

// // ВСТАВКА В ШТМЛ НОВОГО созданного выше тега
// let container = document.querySelector('.container');
// container.append(mainTitle); // в самый конец контейнера вставляем элемент
// container.prepend(mainTitle); // в самое начало контейнера вставляем элемент
// container.before(mainTitle); // перед контейнером вставляем элемент
// container.after(mainTitle); // после контейнера вставляем элемент

// // СДЕЛАТЬ копию любого html тега и что то с ним делать
// let result = mainTitle.cloneNode(true); // let result = mainTitle.cloneNode(false);
// container.prepend(result);

// // Заменить один html элемент на другой
// let h2 = document.querySelector('.title');
// h2.replaceWith(mainTitle); // заменяет один на другой

// // Удаляем тег html  со всем его вложением
// let list = document.querySelector('.list');
// list.remove();  // удалили выбранный элемент 

// // ТАК СЧИТЫВАЕМ ИНФОРМАЦИЮ которую внес пользователь
// let input = document.querySelector('.name');
// console.log(input.value);

// // Статус чекбокса или радиобаттона ,есть поле checked
// let checkBox = document.querySelector('#box');
// console.log(checkBox.checked);

// // Посмотреть все стили тега, все значения строками
// let articleTitle = document.querySelector('h2');
// console.log(articleTitle.style.color = 'red');
// console.log(articleTitle.style.fontSize = '60px');
// console.log(articleTitle.style.textTransform = 'uppercase');
// console.log(articleTitle.style.textAlign = 'center');


// // Через JS создать ссылку, добавить в атрибут href, вставить текстовый контент, и вставить в конец статьи
// let art = document.querySelector('.article');
// let a = document.createElement('a');
// a.setAttribute('href', '#');
// a.textContent = 'link';
// art.append(a);
// // тоже самое через innerHTML (если += не ставить то все сотрется, и поставит всегда в конец!!!)
// // let str = `<a href="#">link</a>`;
// // art.innerHTML += str;



