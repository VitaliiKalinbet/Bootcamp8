const express = require('express');
const app = express();

app.get('/', (req,res) => res.send("dfsf"));
app.get('/users/:id', (req,res) => res.send("Привет пользователь
 "+req.params.id));

app.listen(3001);
