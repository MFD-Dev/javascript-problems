// Functions: Problem 5
// Module 3: JavaScript

// Write a JavaScript program that iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the 
// multiples of five print "Buzz". 
// For numbers that are multiples of both three and five print "FizzBuzz".

/*
//Initial Pseudo//
-- create a for loop to iterate through 1-100;
-- create conditional statements that search to match for the3 different multiples
-- log all of the multiples
-- 
*/ 

/*
-- create a loop to iterate through 1-100
-- use modulus operator to get diff between index and 3 & 5 and console log.
-- use else statement to run default.
*/

// for loop to iterate through 1-100  
function myFunction() {
  
  for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");// use modulus operator for 3 & 5 matches
    else if (i % 3 == 0) console.log("Fizz");// zero index scan to match diff of 3.
    else if (i % 5 == 0) console.log("Buzz");// zero index scan to match diff of 5.
    else console.log(i);// if none of those match, then log the number in the index.
 }
}
