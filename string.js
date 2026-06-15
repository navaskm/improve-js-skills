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

  const objOfWord = [...word].reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  },{});

  for(const letter of word){
    if(objOfWord[letter] === 1){
      return letter
    };
  };

  return null;
};

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



//////////////////////////////////////////////////////////////////////////////////////////////////


// Check if one string is a rotation of another
// A rotation moves characters from the front to the end.
//
const isRotation = (strOne, strTwo) =>  (strOne + strOne).includes(strTwo);

console.log(isRotation("waterbottle", "erbottlewat"));
console.log(isRotation("hello", "llohe"));
console.log(isRotation("hello", "olelh"));
//
// Expected Output:
// true
// true
// false



/////////////////////////////////////////////////////////////////////////////////////////////


// Compress a string using character counts
// Consecutive repeated characters should be replaced
// with the character followed by its count.
//
const compressString = str => {

  let newStr = '';
  let current = 1;

  for (let i = 0; i < str.length; i++) {

    if(str[i] === str[i + 1]){
      current++
    }else{
      newStr += str[i] + current
      current = 1
    }
  }

  return newStr
}
console.log(compressString("aabcccccaaa"));
console.log(compressString("abc"));
console.log(compressString("aaabb"));
//
// Expected Output:
// "a2b1c5a3"
// "a1b1c1"
// "a3b2"



/////////////////////////////////////////////////////////////////////////////////////


// Check whether a string is a valid palindrome
// Ignore spaces, punctuation, and letter casing.
//
const isValidPalindrome = str => {
  const newStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

  return newStr === newStr.split('').reverse().join('')
}
console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
console.log(isValidPalindrome("race a car"));
console.log(isValidPalindrome("Was it a car or a cat I saw?"));
//
// Expected Output:
// true
// false
// true



/////////////////////////////////////////////////////////////////////////////////////////


// Check if two strings are one edit away
// An edit is:
// - insert one character
// - delete one character
// - replace one character
//
const oneEditAway = (strOne, strTwo) => {
  
  if (Math.abs(strOne.length - strTwo.length) > 1) {
    return false;
  }

  let edits = 0;
  let i = 0;
  let j = 0;

  while (i < strOne.length && j < strTwo.length) {
    if (strOne[i] !== strTwo[j]) {
      edits++;

      if (edits > 1) {
        return false;
      }

      if (strOne.length > strTwo.length) {
        i++;
      } else if (strTwo.length > strOne.length) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
};

console.log(oneEditAway("pale", "ple"));
console.log(oneEditAway("pales", "pale"));
console.log(oneEditAway("pale", "bale"));
console.log(oneEditAway("pale", "bake"));
//
// Expected Output:
// true
// true
// true
// false