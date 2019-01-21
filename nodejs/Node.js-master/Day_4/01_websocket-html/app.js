const {PORT = 9986} = process.env;
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


let online = 0;
io.on('connection', (client) => {
    console.log("User connected");
    console.log(++online);
    client.broadcast.emit("change-online", online);
    client.on("disconnect", () => {
        console.log(--online);
        client.broadcast.emit("change-online", online);
    });
    client.on("message", (msg) => {        
        console.log('message: ' + msg);
        client.broadcast.emit("message", message);
    });
    client.on("typing", (is) => {
        client.broadcast.emit("somebody-typing", is);
    })
});

server.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});
