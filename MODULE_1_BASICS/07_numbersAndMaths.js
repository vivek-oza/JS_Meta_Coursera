// // NUMBER AND MATHS JAVA SCRIPT

// //      NUMBERS     //

// const hitpoints = 100;
// console.log(hitpoints);     //100

// const bankBal = new Number(100000);
// console.log(bankBal);       //[Number: 100000]

// console.log(bankBal.toString());
// console.log(bankBal.toString().length);     // Now we can use string methods on this number


// console.log(bankBal.toFixed(2));

// const otherNum = 21.9438;
// console.log(otherNum.toPrecision(2));    //22

// const testNumber= 1000000;
// console.log(testNumber.toLocaleString('en-IN'));     //10,00,000
// console.log(Number.MAX_VALUE); //1.7976931348623157e+308
// console.log(Number.MIN_VALUE); //5e-324


// //#### MATHS ####

// console.log(Math);

// console.log(Math.abs(-10));     //10
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.1));

// console.log(Math.sqrt(4));

// console.log(Math.min(2,4,0,5,69,23,2));
// console.log(Math.max(2,4,0,5,69,23,2));

// // MORE METHODS, JUST CONSOLE LOG "Math" IN CONSOLE BROWSER


// SIMPLE DICE

console.log(Math.random());

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random() * 10) + 1); // random from 1 to 10


//RANDOM FROM MIN TO MAX

min = 1
max = 6
console.log( Math.floor(Math.random() * (max - min + 1)) + min);

