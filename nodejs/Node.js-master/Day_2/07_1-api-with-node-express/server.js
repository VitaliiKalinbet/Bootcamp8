const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });


let app = express();
let db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const schema = new Schema({
  name: String
});


app.get('/', function (req, res) {
  res.send('Hello API');
})

app.post('/artist', function (req, res) {
  let artist = {
    name: req.body.name
  };
  db.collection('artists').insert(artist, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);  })  
})

MongoClient.connect('mongodb://bc7:123qwe@ds241489.mlab.com:41489/test_base', function (err, database) {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3020, function () {
    console.log('API app started');
  })

})
  


