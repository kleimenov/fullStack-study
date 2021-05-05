"use strict";
//let's explore magic, here I will learn through the lengs of TS magic,
//how it works with different types of data
//SPOILER ALERT better that JS
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    return "Seems like this is " + variable;
};
var myFunc = function (student) {
    console.log(student);
};
//generics concept if we can encounter with unexpected data types we can use generics
//insted of complex functions <T>
var getElementOfArray = function (arr, randomNumber) {
    console.log(arr[randomNumber]);
};
//async concept of TS
var asyncConceptFunc = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, checkType(data)];
            case 1:
                result = _a.sent();
                setTimeout(function () {
                    console.log(result);
                }, 2000);
                return [2 /*return*/];
        }
    });
}); };
//export default checkType;
exports.default = { checkType: checkType, myFunc: myFunc, getElementOfArray: getElementOfArray, asyncConceptFunc: asyncConceptFunc };
