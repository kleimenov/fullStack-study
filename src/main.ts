//import module, call it func
import funcs from './module.one/module.one.lesson.three'

let word: string = 'cat';
const word_second = 5;
const unexpectedNumber = 2
const catsGang = ['Tommy', 'Fluffy', 'Pointy']
const bagOfNumbers = [1,2,3,4,5,6,7,8,9,0]

//use some functions that I exported from module
funcs.checkType(word)



// const myFunc = (student: string | number): void => {
//     console.log(student);
//   };

funcs.myFunc(word_second)

funcs.getElementOfArray(catsGang, unexpectedNumber)