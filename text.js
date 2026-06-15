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





