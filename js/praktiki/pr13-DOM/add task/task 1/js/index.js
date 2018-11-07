'use strict'

/*
ЗАДАНИЕ 1

  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// let list = document.querySelector('.categories');
// let arr = [...list.children];
// console.log(arr);
// for (let elem of arr) {
// console.log(`Категория: ${list.children[elem].firstChild.data.trim()}`);
// console.log(`Количество вложенных li: ${list.children[elem].children[elem].children.length}`);
// }
// console.log(list);

// работает:
// let list = document.querySelectorAll('.categories > li');
// list.forEach(el => console.log(`Категория: ${el.firstChild.data.trim()}`, '\n' `Количество вложенных li: ${el.firstElementChild.childElementCount}`));


/*
ЗАДАНИЕ 2 

  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
    - Найдите последнего потомка списка и сделайте его текст синего цвета
    
1) Доступ до списка | использовать квери селектор
2) Взять первого ребенка | FirstElementChild
3) Сделать текст элемента первый красным| style.color = "red"
4) Повторить пункт 2 и 3 для последнего элемента | 
*/
// let list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';


/*
ЗАДАНИЕ 3

  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.

  1) В переменную записать данный в штмл список | использовать querySelector()
  2) Вымерять длину данного массива строк | использовать length
  3) Создать 5 элементов li | createElement
  4) Отправить каждую li в список | innerHTML
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// let list = document.querySelector('.list');
// console.log(list);
// for (let el of elements) {
// let x = document.createElement('li');
// x.textContent = el;
// list.append(x);
// }


/*
ЗАДАНИЕ 4

  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.

    1) Создать список 
    2.0) Создать цикл который работает пока не придет из промпта null
    2) Создавать элемент списка и запрашивать его содержимое промптом
    3) Отправляем созданнеый элемент с содержимым в список
*/

// let list = document.createElement('ul');

// let x;
// do {
// x = prompt('Введите пункт списка');
//     if (x !== null) {
//     let li = document.createElement('li');
//     li.textContent = x;
//     console.log(x);
//     list.append(li);
//     }
// }
// while (x !== null);

// let y = document.querySelector('body');
// y.append(list);
// //   или так
// // document.body.append(list);

/*
ЗАДАНИЕ 5

  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.

  1) Записать в переменную весь список | document.querySelector
  2) Записать в новый массив все инпуты с checked | использовать .contains('checked')
  2) Создать функцию getInputsData(inputs) которая получает массив из пункта 2
    2.1) Обратиться к атрибуту value
    2.2) Вытащить значение value
    2.3) Все значения value положить в один массив и все это возвращать из функции
*/
// let list = document.querySelectorAll('input');
// console.log(list);
// let arr = Array.from(list);
// console.log(arr);
// let x = arr.filter(el => el.checked);
// console.log(x);
// function getInputsData(inputs) {
//     let y = inputs.map(el => el.value);
//     return y;
// }
// console.log(getInputsData(x));



/*
ЗАДАНИЕ 6

  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/