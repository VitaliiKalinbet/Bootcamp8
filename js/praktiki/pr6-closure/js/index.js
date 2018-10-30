'use strict'

// ЗАМЫКАНИЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function counter() {
    let count = 0;

    function increment() {
        count++;
        // console.log(count);
        return count;
        // тут будем писать код для отправки на сервер значения
    }
    return increment;
    /* поскольку тут без круглых скобок возврат функции - мы 
    вызываем сам код функции increment. 
    Если с круглыми скобками return increment () то будет - undefined*/
};

let user = counter();
console.log(user);
// user(); //1
// user(); //2
// user(); //3
// let user2=counter();
// user2(); //1
// user2(); //2