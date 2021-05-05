// import checkType from './module.one/module.one.lesson.three'

let word: string = 'cat';


// checkType(word)

console.log(word)

const word_second = 5;

const myFunc = (student: string | number): void => {
    console.log(student);
  };

  myFunc(word_second)