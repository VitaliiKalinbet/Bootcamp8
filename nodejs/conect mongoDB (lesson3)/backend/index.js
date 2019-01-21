const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// grab the user model
const User = require('./Schema');
const PORT = process.env.PORT || 3002;

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://admin:myfirstdbadmin1@ds137530.mlab.com:37530/myfirstdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// разрешаем нашему серверу общаться с внешним миром
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => res.send('hellow this is my site'));
app.get('/users/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) throw err;
        res.json(users);
    })
});

app.post('/user/', (req, res) => {
    let newUser = User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        admin: true,
    })
    newUser.save(function(err) {
        if (err) throw err;
        // console.log(`User created! ${newUser}`);
        res.json(200, `User created! ${newUser}`);
    })
})

app.get('/user_username/:username', (req, res) => {
    User.find({username: req.params.username}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
});

app.get('/user_id/:id', function (req,res){
    //let reg=/req.params.name/
    User.find({_id:req.params.id},(err,users)=>{
        if (err) throw err;
        res.send(users)
    })
});

app.delete('/users_id/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        //we have deleted the user
        // console.log('User deleted!');
        res.json(200, 'User deleted!');
    })
})

app.put('/users_put/:_id', (req, res) => {
    User.findByIdAndUpdate(req.params._id, { username: req.body.username, password: req.body.password}, (err, user) => {
        if (err) throw err;
        //we have update the user
        res.json(200, 'User update!');
    })
})

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));








// create new user 
// let newUser = User({
//     // модернизируем так наш сервер чтобы по запросук создавать юзера  
//     username: 'Vitalii',
//     password: 'Vitalii',
// });

//save the user function
// newUser.save(function(err) {
//     if (err) throw err;
//     console.log(`User created! ${newUser}`);
// })

// app.get('/user_id/:id', (req, res) => {
//     User.findById(ObjectId('req.params.id'), (err, users) => {
//         if (err) throw err;
//         res.send(users);
//     })
// });