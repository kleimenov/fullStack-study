//let's explore magic, here I will learn through the lengs of TS magic,
//how it works with different types of data
//SPOILER ALERT better that JS

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

const checkType = (variable: string) => {
  console.log(`Seems like this is ${variable}`);
};

const myFunc = (student: string | number): void => {
  console.log(student);
};

//generics concept if we can encounter with unexpected data types we can use generics
//insted of complex functions <T>
const getElementOfArray = <T>(arr: T[], randomNumber: number) => {
  console.log(arr[randomNumber]);
};


//async concept of TS
const asyncConceptFunc = async (): Promise <void> => {
    //function logic inside
}


//export default checkType;
export default { checkType, myFunc, getElementOfArray };
