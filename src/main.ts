//import module, call it func
import funcs from './module.one/module.one.lesson.three'

let word: string = 'cat';


//use some functions that I exported from module
funcs.checkType(word)

const word_second = 5;

// const myFunc = (student: string | number): void => {
//     console.log(student);
//   };

  funcs.myFunc(word_second)