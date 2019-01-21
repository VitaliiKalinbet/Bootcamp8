const http = require('http');  
const options = {
hostname: 'google.com',  port: 80,
path: '/',  method: 'POST'
};
const req = http.request(options, function (res) {  
console.log('STATUS: ' + res.statusCode);  
console.log('HEADERS: ' + JSON.stringify(res.headers));  res.setEncoding('utf8');
res.on('data', function (chunk) {  
console.log('BODY: ' + chunk);
});
});
req.on('error', function (e) {
console.log('Возникла проблема с ответом от севера: ' + e.message);
});
req.write('data\n');  
req.end();