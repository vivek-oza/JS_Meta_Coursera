// const marvel_heroes = ["thor","ironman","spiderman"]
// const dc_heroes = ["superman","batman","flash"];

// // console.log(marvel_heroes);
// // console.log(dc_heroes);

// // marvel_heroes.push(dc_heroes)
// // console.log(marvel_heroes);

// // console.log(marvel_heroes.join());



// // CONCAT IN ARRAYS ::: COMBINES Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);



// // ANOTHER EASY OPERATOR for this, for joining 2 arrays -> Spread operator ("...")
// // Example of spread operator

// const allNewHeroes = [...marvel_heroes,...dc_heroes]
// console.log(allNewHeroes);



// // ----------
// // Another intresting thing with array
// // // FLAT ARRAY : 
// // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);

// const usable_another_array = another_array.flat(Infinity);

// console.log(usable_another_array);



//  SOME OTHER ARRAR FUNCTIONS

const test_variable = "Hey Vivek, Wsp";
console.log(test_variable);

const bool_result = Array.isArray(test_variable)
console.log(bool_result);


const new_test_variable = Array.from(test_variable)
console.log(new_test_variable);

const bool_result2 = Array.isArray(new_test_variable)
console.log(bool_result2);

// Array.from() -> Creates an array from an iterable object. like string, object [this one is intresting]



// Array.of() -> Returns a new array from a set of elements.

let score1 = 23;
let score2 = 45;
let test_name = "Jiy";

console.log(Array.of(score1,score2,test_name));