// ARRAY

// ----------------------
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
// ----------------------

// Array is Collection of items in JS, Can store multiple datatypes elements in Single variable (same array)
// ARRAY IN JS ARE RESIZABLE

// ----------------------
// NOTES: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// USE CONTROL + CLICK 
// ----------------------











const arrayExample= [0,5,2,1,3,true,"Vivek"];

const mrArray = [0,5,2,1,3];

console.log("hey");

// console.log(mrArray[3]);








// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// Means, in shallow copy, the reference point is same, means when shallow copy(here, any copy because all are shallow copy) is changed, it affects the original value






const numArray = new Array(1,2,3,4,69);
// console.log(numArray);

// const avengers = ["Ironmam","Captain","Hulk","Thor"];
// console.log(avengers);


// console.log(avengers.length);
// console.log(avengers[2]);



// -----------------
// ARRAY METHODS
// -----------------


// console.log(numArray);

// numArray.push(69)
// console.log(numArray);

// numArray.push(33)
// console.log(numArray);


// numArray.pop()
// console.log(numArray);


// numArray.unshift(9)
// console.log(numArray);

// console.log(numArray.includes(69));

// console.log(numArray.indexOf(3));   //4
// console.log(numArray.indexOf(999)); //-1


// const newArray = numArray.join();

// console.log(numArray);

// console.log(newArray);
// console.log(typeof newArray); //string



// METHODS -> SLICE AND SPLICE

console.log("A", numArray);

const newSubArray = numArray.slice(1,3);
console.log(newSubArray);       //Includes left side of range, ie, index 1 and index 2 only and not 3, DOES NOT Affect original Array
console.log("B", numArray);


const newSubArray2 = numArray.splice(1,3);
console.log(newSubArray2);      //Includes both side of range, ie, index 1, index 2 and index 3, CHANGES MADE IN ORIGINAL ARRAY original Array
console.log("C", numArray);