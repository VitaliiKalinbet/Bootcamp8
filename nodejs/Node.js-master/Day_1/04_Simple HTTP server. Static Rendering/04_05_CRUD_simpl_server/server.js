let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
// POST method route
app.post('/', function (req, res) {    
    res.send(req.body.name);
  })

  app.get('/', function (req, res) {
    res.sendfile('./index.html')
  })


app.get('/login/:id', function (req, res) {
    res.send('Hello User')
  })

app.get('/task/', function (req, res) {
    res.send('Hello World')
  })
 
app.listen(3000)