//set some modules
const path = require('path');
const fs = require('fs');


//for fun
console.log('Hello world')
//get dir name and path as well
console.log(__dirname);
//get file name and path as well
console.log(__filename);
//get some data from env
console.log(process.env.LOGNAME);

//path.resolve
console.log('path.resolve:', path.resolve('module.one.lesson.two.js'));
console.log();