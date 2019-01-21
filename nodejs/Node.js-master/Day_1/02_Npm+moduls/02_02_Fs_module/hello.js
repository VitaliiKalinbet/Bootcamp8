const fs = require('fs')

fs.readFile('hello.txt', 'utf8', (error, content) =>
  content
    .split('\n')
    .filter(line => line.includes('dog'))
    .forEach(line => console.log(line))
)
