// const http = require('http');

// http.createServer((req, res) => {
//         res.writeHead(200, { 'Content-Types': 'text/plain' });
//         res.end('Hello World!');
//     })
//     .listen(3000);

// console.log('Сервер запущен на localhost:3000; нажмите Ctrl-C для завершения.');

// =====================================================

// let colors = require('colors');
// let text = 'Hello world!';
// console.log(text.rainbow);
// console.log(text.green);

// =====================================================

// node  (enter)
// process.on('exit', function() {console.log('Bye!')});

// =====================================================
// Можем прочитать данные из файла

// const fs = require('fs');

// fs.readFile('readme.txt', function (err, data) {if (err) {
//     throw err;
//     }
//     console.log(data.toString());
// })

// =====================================================
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
        fs.readFile('index.html', 'utf8', function(err, data) {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end('Error load index.html')
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        })  
}).listen(3000);

console.log('Сервер запущен на localhost:3000; нажмите Ctrl-C для завершения.');

