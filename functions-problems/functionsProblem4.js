/*
// program to check if the string is palindrome or not
// a string is a palindrome if it is read the same from forward or backward.
-- create a function that a accepts a string as argument.
-- create a variable to find the length of the string.
-- create a loop that loops through half of the string.
-- create a conditional to check if half of the string matches.
-- return the 2 values for if matches or not.
-- create a input variable.
-- create a variable to call the function.

*/

// create a function that accepts a string as a argument
function checkIfPalindrome(str) {
  // create a variable to find string length
  const len = string.length;
  
  // loop through half of the string 
  for (let i = 0; i < len / 2; i++) {
    // check if half of the string and last half are the same
    if (string[i] !== string[len - 1 -i]) {
      return 'It is not a palindrome'
    }
  }
  return 'It is a palindrome'
}
// input string
const string  = 'Hello Mr. Palindrome.'

// call the function 
const result = checkIfPalindrome(string)

console.log(result)
