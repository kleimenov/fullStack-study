//Topic of this lesson: Developing with typeScript

//in the beggining lie's play with types and spot how dump JS recognize data types
let a = 44;
let b = 10;
let stringNum = '3';
let word = 'XYI';

const addNumbers = (var1, var2) => {
   console.log(var1 + var2)
}

const multipleNumbers = (var1, var2) => {
    console.log(var1 * var2)
}
console.log('---------------- 1 --------------------');
addNumbers(a, b)
console.log('---------------- 2 --------------------');
addNumbers(a, stringNum)
console.log('---------------- 3 --------------------');
addNumbers(stringNum, a)
console.log('---------------- 4 --------------------');
addNumbers(word, b)

multipleNumbers(a, b)
multipleNumbers(b, stringNum)
multipleNumbers(word, b)