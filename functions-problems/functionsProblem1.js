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

function findLongestWordLength(str) {
	// create a function to hold the longest word.  Pass a string through the function.
	let words = str.split(" "); // use the .split() method to separate via every space.
	let longestWord = ""; //create a variable to hold the longestWord variable.  use a empty string.

	for (let i = 0; i < words.length; i++) {
		// create a for loop to loop through the words variable--to measure and iterate one at a time.
		if (words[i].length > longestWord.length) {
			//compare length of the current word in the loop with the length of the longest word.
			longestWord = words[i]; // puts the longest word in the longestWord variable.
		}
	}
	return longestWord; // returns the longest word
}

console.log(
	findLongestWordLength("I understand the errors that I had in my code.")
);

// other methods: 1. find() 2. sort() 3. map()
