/*
Functions: Problem 3
Write a JavaScript function that accepts two arguments, a string
and a letter and the function will count the number of 
occurrences of the specified letter within the string
-- create a function that accepts 2 arguments
-- create a counter variable
-- create a for loop using the .length method to iterate one at a time.
-- set a conditional for when the letter matches via searching the index
-- increment the counter 
-- return 
-- set up input variables
-- set up result variable
*/
//create a function that accepts 2 arguments

function countString(str, letter) {
  // create counter
    let count = 0;

   // create a for loop to loop iterate through letter string
    for (let i = 0; i < str.length; i++) {

     // check if the character is at that position
    // charAt method returns a character at a specified index.
    // using a if statement to search zero based index.
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) { //used ===
            count += 1;
        }
    }
    return count;
}

// create input variables
const string = "Hi"
const letterToCheck = 'H'

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);

console.log(countString("hello there", "H"))