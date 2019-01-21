const fs = require('fs')
// let y= fs.readFileSync('hello.txt');
// console.log(y)

let txt = fs.readFileSync('hello.txt', 'utf-8');
 console.log(txt);



// fs.readFile('hello.txt', 'utf8', (error, content) =>
//   content
//     .split('\n')
//     .filter(line => line.includes('dog'))
//     .forEach(line => console.log(line))
// )

const fs = require('fs')
fs.readFile('hello.txt', 'utf-8', function (err, content) {
    if (err) {
        return console.log(err)
    }

    console.log(content)
})


// let txt_write = 'Hello world!!'+'\n' + txt;
// fs.writeFile('some_new_file.txt', txt_write);