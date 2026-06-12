// This code is error string convert to original string,
// Example: "is2 this1 book3" to "this1 is2 book3"
const errorString = "is2 this1 book3";

const wordsArray = errorString.split(" ");

wordsArray.sort((word1,word2)=>{
  const num1 = parseInt(word1.match(/\d/));
  const num2 = parseInt(word2.match(/\d/));
  return num1-num2;
});

const originalString = wordsArray.join(" ");
console.log(originalString);



/////////////////////////////////////////////////////////////


// This code is error string(with number and without number) convert to original string,
// Example: "is2 hello this1 hi book3" to "this1 is2 book3 hello hi"
const errorString2 = "is2 hello this1 hi book3";

const wordsArray2 = errorString2.split(" ");

wordsArray2.sort((word1,word2)=>{

  const num1OrNull = word1.match(/\d/);
  const num2OrNull = word2.match(/\d/);

  const num1 = num1OrNull ? parseInt(num1OrNull[0]) : Infinity;
  const num2 = num2OrNull ? parseInt(num2OrNull[0]) : Infinity;

  return num1-num2;
});

const originalString2 = wordsArray2.join(" ");
console.log(originalString2);



////////////////////////////////////////////////////////////////////////////////


// find count of vowels in the string;
const string = 'hello world';

const objOfVowels = new Set(['a', 'e', 'i', 'o', 'u']);

let countOfIncludeVowels = 0;

for(const letter of string){
  if(objOfVowels.has(letter)) countOfIncludeVowels++
}

console.log(countOfIncludeVowels);



////////////////////////////////////////////////////////////////////


// Reverse each word and each letter
const stringTwo = 'i am navas';

const reversedWordArray = stringTwo.split(' ').reverse();

const answer = reversedWordArray.map(elem => {
  return elem.split('').reverse().join('');
});

console.log(answer.join(' '));


////////////////////////////////////////////////////////////


// find first non-repeating character
const firstNonRepeatingChar = word => {

  for(const letter of word){
    if(word.indexOf(letter) === word.lastIndexOf(letter)){
      return letter
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("aabb"));



/////////////////////////////////////////////////////


// find most vowels in the word
function mostVowels(str) {

  const words = str.split(" ");
  let maxWord = "";
  let maxCount = 0;

  for (let word of words) {
    const count = (word.match(/[aeiou]/gi) || []).length;
    if (count > maxCount) {
      maxCount = count;
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(mostVowels("JavaScript is amazing"));


///////////////////////////////////////////////////////


// Finds the length of the longest substring without repeating characters.
//  * Example:
//  *  - "abcabcbb" = 3 ("abc")
//  *  - "bbbbb" = 1 ("b")
//  *  - "pwwkew" = 3 ("wke")

const longestUniqueSubstring = (word)=>{

  let seen = new Map();
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (seen.has(letter) && seen.get(letter) >= start) {
      start = seen.get(letter) + 1;
    };

    seen.set(letter, i);
    maxLength = Math.max(maxLength, i - start + 1);
  };

  return maxLength;
};
console.log(longestUniqueSubstring("abcabcbb"));
console.log(longestUniqueSubstring("bbbbb"));
console.log(longestUniqueSubstring("dvdf"));



////////////////////////////////////////////////////////////////


// find first non repeating character
const firstUniqueChar = (string) => {

  const freq={}

  for(const letter of string){
    freq[letter] = (freq[letter] || 0) +1;
  }

  for(const letter of string){
    if(freq[letter] === 1) return letter
  }

  return null;
};

console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("aabbcc"));
console.log(firstUniqueChar("javascript"));



/////////////////////////////////////////////////////


// Longest Palindromic Substring
function longestPalindrome(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.slice(i, j);

      if (sub === sub.split("").reverse().join("") && sub.length > longest.length) {
        longest = sub;
      }
    }
  }

  return longest;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));



/////////////////////////////////////////////////////////////////////////////////////////////


// Check whether two strings are anagrams
// Two strings are anagrams if they contain the same letters
// in the same quantities, regardless of order.
// Expected Output:
// true
// false

const isAnagram = (stringOne, stringTwo) => {
  const sortedStringOne = stringOne.split('').sort().join('');
  const sortedStringTwo = stringTwo.split('').sort().join('');
  return sortedStringOne === sortedStringTwo;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));



/////////////////////////////////////////////////////////////////////////////////////////////


// Capitalize the first letter of each word in a sentence
// Return the modified sentence.
// Expected Output:
// "Hello World"
// "Javascript Is Fun"
// "I Am Learning React"

const capitalizeWords = str => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is fun"));
console.log(capitalizeWords("i am learning react"));