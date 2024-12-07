/* 

// NOTES
    DATATYPES : Based on how data is stored and retrieved from in memory, the data types are divided inot --TWO parts-- in JS
        1. Primitive        [call by value]
        2. Non primitive    [call by reference]     (these are also called call by reference datat types)

 */



/* 
JavaScript is a dynamic language, meaning that variables can hold values of different types during runtime: 

Dynamic typing
In dynamically typed languages, type checks are performed at runtime, only when your program is executing. 

No need to declare data type:
Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
    */





// PRIMITIVE    ->      These are call by value data types [meaning, when a data is copied from one to other place all the changes are made in the copy of the data and not the actual data (context-> call by reference is diferrent than call by value) ]


/* 
more elaborated chatgpt version : 

Primitive types are call by value: changes to the copied value do not affect the original.

---Call by Value:---
When you assign a primitive value to a variable or pass it to a function, a copy of the value is created.
Changes to the copy do not affect the original value.
---------------------


 */





//Primitive datatypes 7 categories

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let username;
//or let username = undefined;

//Symbol

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);      //false 



// BigInt

const bigNumber = 99999999999999999999n;    //bigint

console.log(bigNumber);
console.log(typeof(bigNumber));



// NON Primitive (   REFERENCE TYPES   )

// Array
// Object
// Functions


// ARRAY -> square brackets means array
const heros = ["shaktiman", "doga", "naagraj"];

const myObj = {
    name: "vivek",
    age: 20
};


const myFunction = function(){
    console.log("Hello i love pixxa");
}

myFunction()


console.log(typeof(heros));     //object
console.log(typeof(myObj));     //object
console.log(typeof(myFunction));    //function (object function) 


// const testVar = null;
// console.log(typeof testVar);    //null variable's dt is object