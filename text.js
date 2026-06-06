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





//////////////////////////////////////////////////////////////////////////////////////
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






