// ARRAY TESTING
//////////////////////////////////////////////////////////////////////////////////

// This script finds and prints the unique (non-repeating) numbers from an array using a frequency count approach.
const arrayOfUniq = [1, 2, 1, 3, 1, 4, 2, 5, 4];



// This script merges two number arrays, removes duplicates, and sorts the result in ascending order.
const arrayOne = [1,3,5,7,9,9,10];
const arrayTwo = [2,4,4,6,8,10,11];



// find missing number in the array
const missingNumberArray = [1,2,4,5,6,10];



// This script finds and prints the unique (non-repeating) numbers from an array using a frequency count approach.
const stringArray = ['Arjun','Navas','Arjun','Sanu','Navas'];



// it return groups same word array in the on array ([ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ])
const groupAnagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];



// nested array set into a single-level array ( without using flat method )
// console.log(flatten([1, [2, [3, [4]], 5]]));



// console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([4,4,4,5,6,6,7,7,7,7], 2));
// console.log(topKFrequent([1], 1));
// Finds two numbers in the array that add up to a given target.



// Finds two number's index in the array that add up to a given target.
// console.log(twoSumWithIndex([1, 2, 3, 4, 5], 8));



// Find the intersection of two arrays
// Return the common elements found in both arrays.
// Expected Output:
// [3, 4]
// []
// console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// console.log(arrayIntersection([10, 20, 30], [40, 50]));



// Find the most frequent element in an array
// If multiple elements have the same highest frequency,
// return the one that appears first.
// Expected Output:
// 2
// "a"
// console.log(mostFrequent([1, 2, 2, 3, 1, 2]));
// console.log(mostFrequent(["a", "b", "a", "c", "a", "b"]));



// Move all zeros to the end of an array
// Keep the order of non-zero elements unchanged.
// Expected Output:
// [1, 3, 12, 0, 0]
// [1, 2, 3, 4, 0, 0]
// console.log(moveZeros([0, 1, 0, 3, 12]));
// console.log(moveZeros([1, 2, 0, 0, 3, 4]));



// Find the longest consecutive sequence length in an array
// The numbers do not need to be sorted.
//
// Example:
// [100, 4, 200, 1, 3, 2]
//
// Consecutive sequence: 1, 2, 3, 4
// Length = 4
//
// Expected Output:
// 4
// 9
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9



// Find the difference between two arrays
// Return elements that exist in the first array
// but not in the second array.
// Expected Output:
// [1, 3]
// ["a", "c"]
// console.log(arrayDifference([1, 2, 3, 4], [2, 4]));
// console.log(arrayDifference(["a", "b", "c"], ["b"]));



// Check whether an array is sorted in ascending order
// Return true if every element is greater than or equal
// to the previous element.
// console.log(isSorted([1, 2, 3, 4, 5]));
// console.log(isSorted([1, 3, 2, 4, 5]));
// console.log(isSorted([5, 5, 5, 5]));
// Expected Output:
// true
// false
// true



// Rotate an array to the right by k positions
// Expected Output:
// [4, 5, 1, 2, 3]
// [3, 4, 5, 1, 2]
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// console.log(rotateArray([1, 2, 3, 4, 5], 3));



// Check whether two arrays contain exactly the same elements
// in the same order.
// Expected Output:
// true
// false
// true
// false
// console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(arraysEqual([1, 2, 3], [3, 2, 1]));
// console.log(arraysEqual(["a", "b"], ["a", "b"]));
// console.log(arraysEqual(["a", "b"], ["a", "c"]));



// Find the element that appears only once
// Every other element appears exactly twice.
// Expected Output:
// 1
// 4
// 3
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([7, 3, 7]));



// Find the longest common prefix among an array of strings
// Return "" if there is no common prefix.
// Expected Output:
// "fl"
// ""
// "inters"
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));



// Find the first missing positive integer
// The array may contain negative numbers and duplicates.
// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));
// Expected Output:
// 3
// 2
// 1



// You are given an array where each element represents a stock price on that day.
// Find the maximum profit you can make by buying once and selling once.
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// console.log(maxProfit([2, 4, 1])); // 2



// LeetCode 35 - Search Insert Position
// Find the index of the target in a sorted array.
// If the target does not exist,
// return the index where it should be inserted.
// console.log(searchInsert([1,3,5,6], 5)); // 2
// console.log(searchInsert([1,3,5,6], 2)); // 1
// console.log(searchInsert([1,3,5,6], 7)); // 4



// LeetCode 66 - Plus One
// Given an array of digits representing a non-negative integer,
// add one to the integer and return the result as an array of digits.
// Use BigInt to handle very large numbers.
// console.log(plusOne([4,3,2,1])) // [4,3,2,2]
// console.log(plusOne([1,2,3])) // [1,2,4]
// console.log(plusOne([9])) // [1,0]





// STRING TESTING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This code is error string convert to original string,
// Example: "is2 this1 book3" to "this1 is2 book3"
const errorStringWithNumber = "is2 this1 book3";



// This code is error string(with number and without number) convert to original string,
// Example: "is2 hello this1 hi book3" to "this1 is2 book3 hello hi"
const errorString2 = "is2 hello this1 hi book3";



// find count of vowels in the string (3)
const string = 'hello world';
const vowels = ['a', 'e', 'i', 'o', 'u'];



// Reverse each word and each letter ('savan ma i')
const stringTwo = 'i am navas';



// find first non-repeating character ('w')
const firstNonRepeatingCharOne = "swiss"
const firstNonRepeatingCharTwo = "aabb"



// find most vowels in the word ('javaScript')
// console.log(mostVowels("JavaScript is amazing"));



// Finds the length of the longest substring without repeating characters.
//  * Example:
//  *  - "abcabcbb" = 3 ("abc")
//  *  - "bbbbb" = 1 ("b")
//  *  - "pwwkew" = 3 ("wke")

// console.log(longestUniqueSubstring("abcabcbb"));
// console.log(longestUniqueSubstring("bbbbb"));
// console.log(longestUniqueSubstring("dvdf"));



// find first non repeating character
// console.log(firstUniqueChar("leetcode"));
// console.log(firstUniqueChar("aabbcc"));
// console.log(firstUniqueChar("javascript"));



// find Longest Palindromic Substring 
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));



// Check whether two strings are anagrams
// Two strings are anagrams if they contain the same letters
// in the same quantities, regardless of order.
// Expected Output:
// true
// false
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));



// Capitalize the first letter of each word in a sentence
// Return the modified sentence.
// Expected Output:
// "Hello World"
// "Javascript Is Fun"
// "I Am Learning React"
// console.log(capitalizeWords("hello world"));
// console.log(capitalizeWords("javascript is fun"));
// console.log(capitalizeWords("i am learning react"));



// Check if one string is a rotation of another
// A rotation moves characters from the front to the end.
//
// console.log(isRotation("waterbottle", "erbottlewat"));
// console.log(isRotation("hello", "llohe"));
// console.log(isRotation("hello", "olelh"));
//
// Expected Output:
// true
// true
// false



// Compress a string using character counts
// Consecutive repeated characters should be replaced
// with the character followed by its count.
// console.log(compressString("aabcccccaaa"));
// console.log(compressString("abc"));
// console.log(compressString("aaabb"));
// Output:
// "a2b1c5a3"
// "a1b1c1"
// "a3b2"



// Check whether a string is a valid palindrome
// Ignore spaces, punctuation, and letter casing.
// console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
// console.log(isValidPalindrome("race a car"));
// console.log(isValidPalindrome("Was it a car or a cat I saw?"));
// Expected Output:
// true
// false
// true



// Check if two strings are one edit away
// An edit is:
// - insert one character
// - delete one character
// - replace one character
// console.log(oneEditAway("pale", "ple"));
// console.log(oneEditAway("pales", "pale"));
// console.log(oneEditAway("pale", "bale"));
// console.log(oneEditAway("pale", "bake"));
// Expected Output:
// true
// true
// true
// false



// LeetCode 58 - Length of Last Word
// Find the length of the last word in a string.
// Ignore any trailing spaces at the end of the string.
// Start from the last character and move backwards.
// Count the characters of the last word.
// Stop counting when the first space is found after the last word.
// console.log(lengthOfLastWord("Hello World")); // 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
// console.log(lengthOfLastWord("luffy is still joyboy")); // 6



// LeetCode 345 - Reverse Vowels of a String
// Reverse only the vowels in a string.
// Keep all non-vowel characters in their original positions.
// Both uppercase and lowercase vowels should be handled.
// console.log(reverseVowels("IceCreAm")); // "AceCreIm"
// console.log(reverseVowels("leetcode")); // "leotcede"





// NUMBER TESTING
///////////////////////////////////////////////////////////////////////////////////////////


// check prime number or not
// console.log(isPrime(6));
// console.log(isPrime(7));



// Add recursive factorial function implementation
// console.log(factorial(5));



// sum large two number in the array
// console.log(sumTopTwoNumbers([4, -1, 2, 1, 9, 3]));



// Function to reverse digits of a number while keeping its sign
// console.log(reverseNumber (-328))
// console.log(reverseNumber (120))



// Find the average of all numbers in an array
// Return 0 for an empty array.
// Expected Output:
// 3
// 15
// 0
// console.log(average([1, 2, 3, 4, 5]));
// console.log(average([10, 20]));
// console.log(average([]));



// LeetCode 118 - Pascal's Triangle
// Generate the first numRows of Pascal's Triangle.
// The first and last number of every row is always 1.
// Every middle number is the sum of the two numbers
// directly above it from the previous row.
// console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// console.log(generate(3)); // [[1],[1,1],[1,2,1]]



// LeetCode 119 - Pascal's Triangle II
// Return the row at the given rowIndex from Pascal's Triangle.
// The first and last number of every row is always 1.
// Every middle number is the sum of the two numbers
// directly above it from the previous row.
// console.log(getRow(5)); // [1,5,10,10,5,1]
// console.log(getRow(3)); // [1,3,3,1]
// console.log(getRow(1)); // [1,1]



// LeetCode 190 - Reverse Bits
// Reverse the bits of a 32-bit unsigned integer.
// Convert the number to a 32-bit binary string,
// reverse the bits, and convert it back to a decimal number.
// console.log(reverseBits(43261596)); // 964176192
// console.log(reverseBits(2147483644)); // 1073741822



// LeetCode 191 - Number of 1 Bits
// Count the number of 1s in the binary representation of a number.
// This is also called the Hamming Weight.
// console.log(hammingWeight(11)); // 3
// console.log(hammingWeight(128)); // 1
// console.log(hammingWeight(2147483645)); // 30



// LeetCode 231 - Power of Two
// Check whether a number is a power of two.
// A power of two can be created by multiplying 2 by itself.
// Examples:
// 1 = 2^0
// 2 = 2^1
// 4 = 2^2
// 8 = 2^3
// 16 = 2^4
// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(16)); // true
// console.log(isPowerOfTwo(3)); // false



// LeetCode 258 - Add Digits
// Repeatedly add all the digits of a number
// until only one digit remains.
// console.log(addDigits(38)); // 2
// console.log(addDigits(0)); // 0



// LeetCode 367 - Valid Perfect Square
// Check whether a positive number is a perfect square.
// A perfect square is a number that can be created
// by multiplying an integer by itself.
// Examples:
// 1 = 1 * 1
// 4 = 2 * 2
// 9 = 3 * 3
// 16 = 4 * 4
// console.log(isPerfectSquare(16)); // true
// console.log(isPerfectSquare(14)); // false



// LeetCode 412 - Fizz Buzz
// Return an array of strings for numbers from 1 to n.
// For multiples of 3, return "Fizz".
// For multiples of 5, return "Buzz".
// For multiples of both 3 and 5, return "FizzBuzz".
// Otherwise, return the number as a string.
// console.log(fizzBuzz(3)); // ["1","2","Fizz"]
// console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
// console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]





// OBJECT TESTING
////////////////////////////////////////////////////////////////////////////


// Count how many times each character appears in a string
// Return an object with character frequencies.
// console.log(charFrequency("hello"));
// console.log(charFrequency("javascript"));
// Expected Output:
// { h: 1, e: 1, l: 2, o: 1 }
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }



// Group array elements by their type
// Return an object where the keys are the data types
// and the values are arrays of elements of that type.
// Expected Output:
// {
//   number: [1, 42],
//   string: ["hello", "world"],
//   boolean: [true, false]
// }
// console.log(setObjWithType([1, 42, "hello", "world", true, false]))



// This script identifies and returns the names of employees who appear more than once based on their 'name' property.
// Expected Output:
// [ 'Arjun', 'Naveen' ]
// const employees = [
//   { name: 'Arjun', age: 28, place: 'Chennai' },
//   { name: 'Naveen', age: 30, place: 'Kochi' },
//   { name: 'Sara', age: 26, place: 'Bangalore' },
//   { name: 'Arjun', age: 28, place: 'Chennai' },
//   { name: 'Naveen', age: 30, place: 'Kochi' },
//   { name: 'Arjun', age: 28, place: 'Chennai' },
// ];




//////////////////////////////////////////////////////////////////////////////////////


// Execution Context
//   - Global Execution Context
//   - Function Execution Context
//      - Memory Creation Phase
//      - Code Execution Phase

// Call Stack
//   - Stack Overflow
//   - RangeError

// Hoisting
//   - var (creates undefined)
//   - let (creates <uninitialized>)
//   - const (creates <uninitialized>)
//   - Function Declaration (fully stored)
//   - Function Expression (like variable)

// Scope
//   - Global Scope
//   - Function Scope
//   - Block Scope
//   - Lexical Scope
//   - Scope Chain

// Closures

// Event Loop
//   - Callback Queue
//   - Microtask Queue




// GUESS THE OUTPUT FIRST THEN RUN THE CODE
// var p1 = new Promise((success, fail) => {
//   setTimeout(()=>{
//     console.log(1);
//     success();
//   },2000)
// });

// console.log(2);

// var p2 = new Promise((success, fail) => {
//   setTimeout(()=>{
//     console.log(3)
//     success();
//   },1000)
// });

// var p3 = Promise.all([p1,p2]).then(() => new Promise((success,fail) => {
//   setTimeout(() => {
//     console.log(4);
//     success();
//   },3000);
// }));

// p3.then(() => console.log(5));





//////////// JAVASCRIPT IMPORTANT SECTIONS //////////



// WHAT IS JAVASCRIPT?
// JavaScript is a high-level, single-threaded programming language mainly used for web development. We use it for create interactive effect within web browser. It makes websites interactive and allows developers to create dynamic user experiences.



// CLOSURE
//A closure is when a function remembers variables from its outer scope, even after the outer function has finished executing.



// SYNCHRONOUS
//Synchronous code executes line by line. JavaScript waits for one operation to finish before moving to the next operation.
//Synchronous code runs one line at a time in sequence. JavaScript waits for the current task to finish before moving to the next task.
// Synchronous code runs one step at a time.
// JavaScript finishes the current task before starting the next task.



// ASYNCHRONOUS
//Asynchronous code does not block the execution of other code. JavaScript can continue executing the next lines while waiting for an asynchronous operation to complete.
// JavaScript does not wait for the task to finish.
// It continues running the next lines of code



//JavaScript is single-threaded. Synchronous code executes line by line on the Call Stack. Asynchronous operations such as setTimeout, fetch, and event listeners are handled outside the Call Stack. When they complete, their callbacks are queued and executed later.



// HOW JAVASCRIPT CODE EXECUTES
//JavaScript executes code using an Execution Context and a Call Stack. When a JavaScript program starts, JavaScript creates a Global Execution Context. Every Execution Context has two phases: Memory Creation Phase and Code Execution Phase.



// MEMORY CREATION PHASE
// In the Memory Creation Phase, JavaScript allocates memory for variables and functions. Variables declared with var are initialized with undefined, and function declarations are stored completely in memory.



// CODE EXECUTION PHASE
// In the Code Execution Phase, JavaScript executes the code line by line and assigns actual values to variables.



// GLOBAL EXECUTION CONTEXT
// When a JavaScript file starts running, JavaScript creates a Global Execution Context. All global code executes inside this context.



// FUNCTION EXECUTION CONTEXT
// Whenever a function is called, JavaScript creates a new Function Execution Context for that function.



// CALL STACK
// JavaScript uses a Call Stack to manage function execution. When a function is called, it is pushed onto the stack. When the function finishes, it is removed from the stack. The Call Stack follows the Last In, First Out (LIFO) principle.



// STACK OVERFLOW
// If functions keep calling themselves without stopping, the Call Stack keeps growing and eventually exceeds its limit. This causes a Stack Overflow error.



//You can memorize this:
// JavaScript executes code using an Execution Context and a Call Stack. When a program starts, JavaScript creates a Global Execution Context. Each Execution Context has two phases: Memory Creation Phase and Code Execution Phase. In the Memory Creation Phase, memory is allocated for variables and functions. In the Code Execution Phase, code runs line by line. When a function is called, JavaScript creates a Function Execution Context and pushes it onto the Call Stack. After the function finishes, it is removed from the stack. If the stack grows too much because of infinite function calls, JavaScript throws a RangeError called Stack Overflow.



// WHAT IS THE EVENT LOOP?
// The Event Loop is a mechanism in JavaScript that checks whether the Call Stack is empty. When the Call Stack becomes empty, it moves pending asynchronous tasks from queues to the Call Stack for execution.



//The Event Loop is a JavaScript mechanism that continuously checks whether the Call Stack is empty. When the stack becomes empty, it moves pending asynchronous callbacks from the Callback Queue (or Microtask Queue) to the Call Stack so they can be executed. This allows JavaScript, which is single-threaded, to handle asynchronous operations without blocking the main thread.



//JavaScript is single-threaded, so it can execute only one task at a time. The Event Loop helps JavaScript handle asynchronous operations like setTimeout, fetch, and event listeners without blocking the main thread.

// The Event Loop is a mechanism that continuously checks whether the Call Stack is empty. When it is empty, the Event Loop moves pending asynchronous tasks to the Call Stack for execution. JavaScript uses two main queues: the Microtask Queue and the Callback Queue. Promise callbacks are stored in the Microtask Queue, while setTimeout and event listener callbacks are stored in the Callback Queue. The Event Loop always executes all Microtasks first and then processes the Callback Queue.



// WHAT IS CALLBACK QUEUE?
// The Callback Queue stores callbacks from asynchronous operations such as setTimeout, setInterval, and event listeners.When the Call Stack is empty, the Event Loop moves these callbacks to the Call Stack.



// WHAT IS MICROTASK QUEUE?
// The Microtask Queue stores callbacks from Promises, such as .then(), .catch(), and .finally(). The Microtask Queue has higher priority than the Callback Queue.
//When the Call Stack becomes empty, JavaScript first executes all tasks in the Microtask Queue and then executes tasks from the Callback Queue.



//Very Short Version (20 Seconds)
// The Event Loop helps JavaScript handle asynchronous operations. It checks if the Call Stack is empty and then moves tasks from the Microtask Queue and Callback Queue to the Call Stack. Microtasks, such as Promise callbacks, run before Callback Queue tasks like setTimeout.



// WHAT IS PROMISE?
// A Promise is an object that represents a future result of an asynchronous operation.

// We use Promises to handle asynchronous operations in a cleaner way. They help avoid callback hell and make code easier to read and maintain. A Promise has three states: Pending, Fulfilled, and Rejected. We use .then() to handle successful results and .catch() to handle errors.


// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. A Promise has three states: Pending, Fulfilled, and Rejected. We use .then() to handle successful results and .catch() to handle errors.

// A Promise is an object used to handle asynchronous operations in JavaScript. It represents a future value that may be available later. A Promise can be in one of three states: Pending, Fulfilled, or Rejected.

// We use Promises to handle asynchronous operations in a cleaner way. They help avoid callback hell and make code easier to read and maintain. Functions like fetch() already return Promises, which is why we can use .then() or async/await with them.



// WHAT IS .then()?
// .then() is a Promise method used to handle the successful result of a Promise. It runs when the Promise is fulfilled.


// WHAT IS .catch()?
// .catch() is a Promise method used to handle errors or failed Promises. It runs when the Promise is rejected.


// What is async?
// async is a keyword used before a function. async makes a function return a Promise.

// What is await?
// await is used inside an async function. await pauses the execution of the async function until the Promise is resolved.


// async/await is a cleaner and more readable way to work with Promises in JavaScript. It helps write asynchronous code that looks like synchronous code.


// A Promise is an object that represents the result of an asynchronous operation. .then() and .catch() are methods used to handle Promise results and errors. async/await is a modern syntax built on top of Promises that makes asynchronous code easier to read and write.


