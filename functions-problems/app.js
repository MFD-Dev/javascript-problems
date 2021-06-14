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

function longestWord(str) {
   let wordLength = str.split(', '); // split string with comma space
   let maxLength = 0
   
   for (let i = 0; i < wordLength.length; i++) {
        if (wordLength[i] > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

longestWord('hello, world, newWorld')