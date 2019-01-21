const events = require('events');
const util = require('util');

let car= function(model){
    this.model = model;
}

util.inherits(car, events.EventEmitter);

const bmw = new car ('BMW');
const audi = new car ('Audi');
const volvo = new car ('Volvo');

const cars = [bmw, audi, volvo];
cars.forEach(function(car){
    car.on('speed', function(text){
        console.log(`${car.model} speed is - ${text}`)
    });
});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '180 km');
audi.emit('speed', '320 km');