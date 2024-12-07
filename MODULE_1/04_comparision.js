// // COMPARISION IN JAVASCRIPT

// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==2);
// console.log(2===2);

// // true
// // 04_comparision.js:3 //this is line number

// // true
// // 04_comparision.js:4

// // false
// // 04_comparision.js:5

// // true
// // 04_comparision.js:6

// // true
// // 04_comparision.js:7

// // true
// // 04_comparision.js:8




// console.log(2=="2");
// console.log(2==="2");
// console.log(2=="02");
// console.log("2">1);
// console.log("02">1);

// // 04_comparision.js:26
// // true
// // 04_comparision.js:27
// // false
// // 04_comparision.js:28
// // true
// // 04_comparision.js:29
// // true
// // 04_comparision.js:30
// // true





console.log(null > 0);      //false , because null is empty value
console.log(null == 0);     //false , because null is empty value
console.log(null >= 0);     //true  , BECAUSE JS TREATS EQUALITY comparision AND OTHER comparision DIFFERENTLY

/* 

//NOTES

The reason is that:
    an Equality check(==).
    and comparision( >, <, >=, <= )
    work diferrently.

    Comparisions convert (null) into a number, treating it as ( 0 ) .

    So, That's why->
    null > 0 and null == 0 are false
    and null >== 0 is true
 */


console.log(undefined == 0);    //false
console.log(undefined === 0);   //false
console.log(undefined <= 0);    //false
// UNDEFINED WORKS FINE




/* 
//NOTES

    USE STRICT CHECK (===)

 */

    console.log(2==="2");