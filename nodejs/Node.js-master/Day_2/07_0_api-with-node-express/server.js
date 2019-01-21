let express = require('express');

let app = express();

app.get('/', function (req, res) {
  res.send('This is home');
})

app.get('/login', function (req, res) {
  res.send('This is login');
})

app.get('/:login/:id', function (req, res) {
  res.send('ID - is' + req.params.id +req.params.login);
})


app.listen(3000);