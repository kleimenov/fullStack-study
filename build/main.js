"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import module, call it func
var module_one_lesson_three_1 = __importDefault(require("./module.one/module.one.lesson.three"));
var word = 'cat';
var word_second = 5;
var unexpectedNumber = 2;
var catsGang = ['Tommy', 'Fluffy', 'Pointy'];
var bagOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//use some functions that I exported from module
module_one_lesson_three_1.default.checkType(word);
// const myFunc = (student: string | number): void => {
//     console.log(student);
//   };
module_one_lesson_three_1.default.myFunc(word_second);
module_one_lesson_three_1.default.getElementOfArray(catsGang, unexpectedNumber);
module_one_lesson_three_1.default.asyncConceptFunc("Lion");
