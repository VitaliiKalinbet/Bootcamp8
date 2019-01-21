// const express = require('express');
// const app = express();

// app.get('/', function (req, res) { 
//     res.send('<h1>Hello World!</h1>');
// });

// app.listen(3000, function () {
// console.log('Example app listening on port3000!');
// });

// ===================================================

// const express = require('express');  
// const app = express();

// app.get('/', function (req, res) {  
//     res.send('<h1>Hello World! ghjvhm</h1>');
// });

// app.get('/users/:id&:name', (req, res) => {
//     console.log(req.params);  
//     res.send(`Привет пользователь, твой id: ${req.params.id}, твое имя: ${req.params.name}`);
// });

// app.listen(3000, () => console.log('Example app listening on port 3000!'));

// ===================================================

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const db = [
    {
        id: 1,
        name: 'Mozart',
    },
    {
        id: 2,
        name: 'Bah',
    },
    {
        id: 3,
        name: 'Wagner',
    },
];

app.get('/', (req, res) => res.send('Hello this is my site'));
app.get('/music/', (req, res) => {
        res.send(db);
});
app.get('/music/:id', (req, res) => {
    let artist = db.find(el => el.id === Number(req.params.id));
    res.send(artist);
});
app.get('/home', (req, res) => {
        fs.readFile('./home.html', 'utf-8', function(err, data) {
            if (err) {
                res.sendStatus(404);
                res.send('File not found!');
            } else {
                res.send(data);
            }
        })  
    }
);
app.get('/contact', (req, res) => {
        fs.readFile('./contact.html', 'utf-8', function(err, data) {
            if (err) {
                res.sendStatus(404);
                res.send('File not found!');
            } else {
                res.send(data);
            }
        })  
    }
);
app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html');
});
app.post('/music/', (req, res) => {
    console.log(req);
    let composer = {
        id: req.body.id,
        name: req.body.name,
    }
    db.push(composer);
    res.send(db);
});
app.delete('/music/:id', (req, res) => {
    console.log(req);
    let arr = db.filter(el => el.id !== Number(req.params.id));
    res.send(arr);
});

// app.all('*', (req, res) => res.send('404 Not found'));

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
