'use strict'

/*Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
        Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
        Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
        Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [{
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

// 1) Получить доступ к шаблону
const cardProduct = document.querySelector('#cardProduct').innerHTML.trim();
// 2) Запустить функцию шаблонизатор 
const cardProductRun = Handlebars.compile(cardProduct);
// 3) Обработать информацию. Передаем в функцию обьект
const cardProductRunObject = cardProductRun(laptops);
// 4) Готовую разметку вставить на экран 
const cardProductPlace = document.querySelector('.cardProductPlace');
cardProductPlace.innerHTML = cardProductRunObject;

const btnFilter = document.querySelector('.btn-filter');
const btnClear = document.querySelector('.btn-clear');
const form = document.querySelector('.js-form');
let arrFromFilterLaptops = [];

function addCheckboxInFilterObject() {
  let filtered = {
    size: [],
    color: [],
    release_date: []
  };
  const inputCheckedArr = document.querySelectorAll('[type="checkbox"]:checked');
  for (let el of inputCheckedArr) {
    if (el.name === 'size') {
      filtered.size.push(el.value);
    } else if (el.name === 'color') {
      filtered.color.push(el.value);
    } else if (el.name === 'release_date') {
      filtered.release_date.push(el.value);
    }
  }
  return filtered;
};

function showCorrectCard(event) {
  event.preventDefault();
  let filtered = addCheckboxInFilterObject();
  console.log(addCheckboxInFilterObject());
  arrFromFilterLaptops = laptops
    .filter(el => filtered.size.includes(String(el.size)) || filtered.size.length === 0)
    .filter(el => filtered.color.includes(el.color) || filtered.color.length === 0)
    .filter(el => filtered.release_date.includes(String(el.release_date)) || filtered.release_date.length === 0);
  // Обработать информацию. Передаем в функцию обьект
  const cardProductRunObject = cardProductRun(arrFromFilterLaptops);
  // Готовую разметку вставить на экран 
  cardProductPlace.innerHTML = cardProductRunObject;
};
btnFilter.addEventListener('click', showCorrectCard);

function resetForm() {
  form.reset();
  cardProductPlace.innerHTML = cardProductRunObject;
  console.log(laptops);
};
btnClear.addEventListener('click', resetForm);