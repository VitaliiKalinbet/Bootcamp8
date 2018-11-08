'use strict'

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке. */

  function createPostCard(obj) {
      // div class="post"
      let divPost = document.createElement('div');
      divPost.classList.add('post');
        // img class="post__image"
        let imgPostImage = document.createElement('img');
        imgPostImage.classList.add('post__image');
        imgPostImage.setAttribute('src', obj.img);
        imgPostImage.setAttribute('alt', 'post image');
        divPost.append(imgPostImage);
        // h2 class="post__title"
        let h2PostTitle = document.createElement('h2');
        h2PostTitle.classList.add('post__title');
        h2PostTitle.textContent = obj.title;
        divPost.append(h2PostTitle);
        // p class="post__text"
        let pPostText = document.createElement('p');
        pPostText.textContent = obj.text;
        divPost.append(pPostText);
        // a class="button" href="#"
        let aButton = document.createElement('a');
        aButton.classList.add('button');
        aButton.setAttribute('href', '#');
        aButton.textContent = obj.link;
        divPost.append(aButton);
        return divPost;
    };

    /* 2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов. 
    
    3. Повесьте все посты в какой-то уже существующий DOM-узел. */
    
    function createCards(arr) {
      let root = document.querySelector('#root');
        let arrOfArr;
        for (let el of arr) {
            arrOfArr = createPostCard(el);
            root.append(arrOfArr);
        }
    };
    createCards(posts);
   
   

    
    

