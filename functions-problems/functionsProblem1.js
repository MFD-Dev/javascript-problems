/*
write a javascript function that accepts a string as a parameter and find the
longest word within the parameter.
1.  create a variable for words.
2.  create a variable for words that are split.
3.  define a JavaScript function that accepts a string as a parameter.
4.  turn the string into a array for each word.
5.  define a variable/array for the measurement for the length of each word.  
6.  loop through the array to find the longest word.  
7.  return that result.
*/


  function findLongestWordLength(str) {  // create a function to hold the longest word.  Pass a string through the function.
    let words = str.split(', '); // use the .split() method to separate via  a comma.
    let maxLength = 0;  //create a variable to start at 0. 
  
    for (let i = 0; i < words.length; i++) {  // create a for loop to loop through the words variable and use the .length() method 
      //to measure and iterate one at a time.
      if (words[i].length > maxLength) {  //compare words in array that are greater than 0.
        maxLength = words[i].length;  // creates a variable that loops through the array and uses the .length() method to find the longest word.
      }
    }
    return maxLength;  // returns the longest word
  }
  

console.log(findLongestWordLength('hello', 'worlds', 'hello world')); 


// other methods: 1. find() 2. sort() 3. map()






// let wordList  = ('hello, world, newWorld')

// function longestWord(str) {
//     let wordList = str.split(', '); // use the split method to separate string based on comma space
//    let maxLength = 0;  // maximum base length
   
//    for (let i = 0; i < wordList.length; i++) {  // loop through array based on lenght method
//     // iterating one at a time. 
//         if (wordList[i] > maxLength) { //looping through array indexes--looking to see which one is 
//             // greater than maxLength
//             maxLength = words[i].length;  // when the maxlength word = the longest word in the array
//         }
//     }
//     return maxLength; // returns longest word
// }

