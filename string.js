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
const vowels = ['a', 'e', 'i', 'o', 'u'];

const arrayOfString = string.toLowerCase().split('');
const countOfVowels = arrayOfString.filter(char => vowels.includes(char)).length;

console.log(countOfVowels);



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

  const arrayOfLetter = word.split('');

  for(const letter of arrayOfLetter){
    if(arrayOfLetter.indexOf(letter) === arrayOfLetter.lastIndexOf(letter)){
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

  const uniqueChars = [];
  let topLength=0;

  for(const letter of word){

    if(uniqueChars.includes(letter)){
      topLength = Math.max(topLength,uniqueChars.length);
      uniqueChars.length=0;
      uniqueChars.push(letter)
    }else{
      uniqueChars.push(letter)
    }

  }

  return Math.max(topLength,uniqueChars.length);
};

console.log(longestUniqueSubstring("abcabcbb"));
console.log(longestUniqueSubstring("bbbbb"));
console.log(longestUniqueSubstring("pwwkew"));