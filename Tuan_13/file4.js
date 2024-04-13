const sayHi = require('./file1.js');
const name = require('./file2.js');
const data = require('./file3.js');

console.log(sayHi('em')); // Chào em!
sayHi(name); // Chào Xin chào Em XÍu!
sayHi(data.name); // Chào Hang!
