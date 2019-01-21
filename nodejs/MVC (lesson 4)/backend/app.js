const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT || 3002;
const app = express();

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

app.use('/api/user/', userRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .json({err: '404'});
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res
    .status(500)
    .json({err: '500'});
})

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));