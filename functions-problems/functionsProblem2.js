/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Hint: use the "split", the Array#includes method and, a "for" loop or "forEach" loop.
1.  create  a variable that represents all vowels.

2.  create a function that allows me to pass in a string parmeter as a argument. 
Within the function:
3.  create a base line count variable that represents 0.
4.  create a For Loop that loops through the array and iterates one at a time.  
5.  go through the string and search for vowels.
6.  create a split()method for the words in the array.
7.  return the total number of matches found.
 
*/

//create a variable that takes a string as a parameter
function countVowels(sentence) {
  // create a vowel variable array 
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let counts = 0; //create a counter variable
  for(let i = 0; i < vowels.length; i++) {  // create a for loop that uses that .length method to loop through 
    // the vowel array and increment by 1
    if(vowels.includes(sentence[i])) { // use the includes method and pass the sentence parameter and loop through the indexes.
      counts++;  // the counter adds all of the vowels
    }
  }
  return console.log(counts); // returns the number 
}

countVowels('How many vowels is this?');
countVowels('AaEeIiOoUu');
countVowels('aaaaa');