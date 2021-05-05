"use strict";
//let's explore magic, here I will learn through the lengs of TS magic,
//how it works with different types of data
//SPOILER ALERT better that JS
Object.defineProperty(exports, "__esModule", { value: true });
// let variable_I  = 44;
// let variable_II  = 10;
// let variable_III = '3';
// let variable_IV = 'XYI';
// const functionOne = (var1:number , var2:number) => {
//    console.log(var1 + var2)
// }
// const functionTwo = (var1, var2) => {
//     console.log(var1 * var2)
// }
// functionOne(variable_I, variable_II)
// functionOne(variable_I, variable_III)
// functionOne(variable_IV, variable_II)
// console.log('-----------------------------------')
// functionTwo(variable_I, variable_II)
// functionTwo(variable_I, variable_III)
// functionTwo(variable_IV, variable_II)
//let word: string = 'cat';
var checkType = function (variable) {
    console.log("Seems like this is " + variable);
};
var myFunc = function (student) {
    console.log(student);
};
//generics concept if we can encounter with unexpected data types we can use generics
//insted of complex functions <T>
var getElementOfArray = function (arr, randomNumber) {
    console.log(arr[randomNumber]);
};
//export default checkType;
exports.default = { checkType: checkType, myFunc: myFunc, getElementOfArray: getElementOfArray };
