// CONVERSOIN OPERATIONS


// CONVERSION TO NUMBERS

let score = "33";
let score2 = "33abc";
let score3 = "vivek";
let score4 = true;
let score5 = null;
let score6 = undefined;

// 

console.log(typeof(score));

let valueInNumber = Number(score);  //DATA TYPE CONVERSION TO NUMBER
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber);  //33

let valueInNumber2 = Number(score2);  //DATA TYPE CONVERSION TO NUMBER
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);    //number , NaN

let valueInNumber3 = Number(score3);  //DATA TYPE CONVERSION TO NUMBER
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);    //number , NaN

let valueInNumber4 = Number(score4);  //DATA TYPE CONVERSION TO NUMBER
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);      //number , 1

let valueInNumber5 = Number(score5);  //DATA TYPE CONVERSION TO NUMBER
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);      //number , 0

let valueInNumber6 = Number(score6);  //DATA TYPE CONVERSION TO NUMBER
console.log(typeof(valueInNumber6));
console.log(valueInNumber6);    //number , NaN

// // NOTES
// "33" -> 33
// "33ac" -> NaN
// "true" -> 1
// "false" -> 0


// CONVERSION TO BOOLEAN

isLoggedIn = 1
isLoggedIn2 = 0

// let boolIsLoggedIn = Boolean(isLoggedIn);
// let boolIsLoggedIn2 = Boolean(isLoggedIn2);

// console.log(boolIsLoggedIn);
// console.log(boolIsLoggedIn2);

let someVar = "";
let someVar2 = "Vivek";

let booleanSomeVar = Boolean(someVar);
let booleanSomeVar2 = Boolean(someVar2);

console.log(booleanSomeVar); // Empty string is False  
console.log(booleanSomeVar2); //// NON Empty string is True


// NOTES
// 1 -> true in conversion to boolean 
// 0-> false in conversion to boolean 

// "" -> false
// "Vivek" -> true

// CONVERSION TO STRING


let someNum = 234;
let strSomeNum = String(someNum);

console.log(strSomeNum);
console.log(typeof(strSomeNum));

// ######################################################
// ######################################################
// ##################### OPERATIONS #####################
// ######################################################
// ######################################################


let value = 34;
let negValue = -value;
console.log(negValue);

// ARITHMETIC OPERATIONS

console.log(4+12);

console.log(4-12);

console.log(4*12);

console.log(5**3);

console.log(25/4);

console.log(34%3);



let str1 = "Hello";
let str2 = " Vivek";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12

console.log("1" + 2 + 2); //122

console.log(1 + 2 + "2"); //32

console.log(1 + "2" + 2); //122

console.log(1 + 2 + 1 + "2" + 2 + 2); //4222

//REASON FOR THIS IS GUIDELINES IN DOCS (NAMED -> TO PRIMIRIVE)


// some tricky conversion
console.log(+true);
console.log(+true);

console.log(+"");




let n1 ,n2 ,n3;
n1 = n2 = n3 = 2+2      //NEVER USE THESE KIND OF ASSIGNMENTS


// PREFIX AND POSTFIX INCEREMENT

let gameCounter = 100;
gameCounter++
console.log(gameCounter);



let x = 3;
const y = x++;      //first assign value, then it increments(the original value)

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"