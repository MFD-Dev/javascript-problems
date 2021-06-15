/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Hint: use the "split", the Array#includes method and, a "for" loop or "forEach" loop.
--  create a function that allows me to pass in a string as a parameter.
--  create a empty variable for a  placeholder for the vowels.
--  create a variable that contains a array with the lowercase and uppercase vowels.
--  create a base line count variable that represents 0.
--  create a For Loop that loops through the index of the array and iterates one at a time.  
--  the counts variable returns the number of vowels.
--  call the function and pass in a string.
 
*/

//create a variable that takes a string as a parameter
function countVowels(str) {
  //variables
  // create a placeHolder for the vowels, using the split method-- with no space.
  let arrayOfLetters = str.split(""); //using the parameter with the .split() method
//   console.log(arrayOfLetters)
  // create a variable that accepts vowels--listed them all out--could use the toLowerCase() method to transform within the for loop. 
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   console.log(vowels)
  //create a counter variable
  let counts = 0; 
  
  
  for(let i = 0; i < arrayOfLetters.length; i++) {  // create a for loop for the variable that uses the .split() w/t empty string. 
    // the vowel array and increment by 1
    if (vowels.includes(arrayOfLetters[i])) { // use the includes method and pass the sentence parameter and loop through the indexes.
      counts++;  // the counter adds all of the vowels
   
    };
  }
  return counts; // returns the number 
}

console.log(countVowels('How many vowels is this?'));