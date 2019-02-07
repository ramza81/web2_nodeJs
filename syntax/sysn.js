var fs = require('fs');

// Sysnc
// console.log('A');
// var resulst = fs.readFileSync('./syntax/sample.txt', 'utf8');
// console.log(resulst);
// console.log('C');

//Async
console.log('A');

fs.readFile('./syntax/sample.txt', 'utf8', function(err, resulst) {
    console.log(resulst);
});

console.log('C');