const events= require('events');
const MyEmit = new events.EventEmitter();
MyEmit.on('some_event', function(text){
    console.log(text);
});

MyEmit.emit('some_event', 'Обработчик событий сработал!');

