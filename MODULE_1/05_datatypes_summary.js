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





// //Primitive datatypes 7 categories

// // String
// // Number
// // Boolean
// // null
// // undefined
// // Symbol
// // BigInt


// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;

// const outsideTemp = null;

// let username;
// //or let username = undefined;

// //Symbol

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);      //false 



// // BigInt

// const bigNumber = 99999999999999999999n;    //bigint

// console.log(bigNumber);
// console.log(typeof(bigNumber));



// // NON Primitive (   REFERENCE TYPES   )

// // Array
// // Object
// // Functions


// // ARRAY -> square brackets means array
// const heros = ["shaktiman", "doga", "naagraj"];

// const myObj = {
//     name: "vivek",
//     age: 20
// };


// const myFunction = function(){
//     console.log("Hello i love pixxa");
// }

// myFunction()


// console.log(typeof(heros));     //object
// console.log(typeof(myObj));     //object
// console.log(typeof(myFunction));    //function (object function) 


// const testVar = null;
// console.log(typeof testVar);    //null variable's dt is object



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 

    // NOTES
    
    MEMORY TYPES IN JAVA SCRIPT
    STACK   AND   HEAP
    
    Stack ->    USED IN Primitive data types

    Heap -> USED IN Non-Primitive data types


    PLEASE WATCH CHAI CODE -> VIDEO 10 -> IN CHAI AUR JAVASCRIPT

 */

let myYTName = "CodingsCool";

let anotherName = myYTName;
anotherName = "Bhai Codez"

console.log(myYTName);
console.log(anotherName);   //when change happened in the anotherName, it doesnt affect the myYTNAME because, when we assigned myYTNAME to anotherName, only a copy was given to it, and not the original value's reference, (that would happen in non-primitive data type)






let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

let user2 = user1;

console.log(user1);

console.log(user2);

user2.email = "vivek@google.com"

console.log(user1);
console.log(user2);     // WE CHANGED DATA IN USER 2, BUT IT ALSO CHANGED IN, THE ORIGINAL , USER 1 , BECAUSE , IT WAS IN HEAP MEMORY, BECAUSE IT WAS A NON PRIMITIVE DATATYPE(AN OBJECT)



