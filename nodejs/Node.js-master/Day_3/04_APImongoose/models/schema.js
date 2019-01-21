let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let catSchema = new Schema({
  name: {
    type: String,
    required: [
      true, 'Укажите имя кота'
    ],
    unique: true
  },
  age: {
    type: Number
  },
  date: {
    type: Date,
  // `Date.now()` returns the current unix timestamp as a number
  default: Date.now
  }
});

const Cat = mongoose.model('cat', catSchema);

module.exports = Cat;
