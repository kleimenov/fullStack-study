"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var module_one_lesson_three_1 = __importDefault(require("./module.one/module.one.lesson.three"));
var word = 'cat';
module_one_lesson_three_1.default.checkType(word);
var word_second = 5;
// const myFunc = (student: string | number): void => {
//     console.log(student);
//   };
module_one_lesson_three_1.default.myFunc(word_second);
