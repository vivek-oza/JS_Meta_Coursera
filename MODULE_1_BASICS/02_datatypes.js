// DATA TYPES

/*

number = int, float, etc...

bigint 

string -> " " or ' ' (" " preferred)

boolean = true or false

null = absence of value.

undefined = value not assigned yet.

symbol

object
*/


// There is newer version of JS
// we use -> "use strict" //Treat all JS code as Newer version

// alert(2+3)  //WE AR=E USING NODE JS AND NOT BROWSER

// Where to use semicolon -> we can use it, or not, its actually a redablity choice

console.log('pizza');

let age = 18
let name = "Vivek" 
let isLoggedIn = false 

let state; //UNDEFINED VARIABLE, VALUE NOT ASSIGNED YET
let state2 = null; //EMPTY , THE EMPTY VALUE IS GIVEN

//symbol -> for uiqueness


const my_symbol = Symbol("Key 1");   //What is symbol? -> A symbol is a unique and immutable data type that is often used to identify object properties. Syntax of symbol is -> Symbol("description")



// object

console.log(typeof(state));
console.log(typeof("pizza"));
console.log(typeof(undefined)); //undefined
console.log(typeof(null)); //object