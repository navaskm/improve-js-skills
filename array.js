// This script finds and prints the unique (non-repeating) numbers from an array using a frequency count approach.
const arrayOfUniq = [1, 2, 1, 3, 1, 4, 2, 5, 4];

const countMap = arrayOfUniq.reduce((acc,number)=>{
  acc[number] = (acc[number] || 0) + 1;
  return acc;
},{});

const answerOfUniq = [];

for(const key in countMap){
  if(countMap[key] === 1){
    answerOfUniq.push(Number(key))
  }
}

console.log(answerOfUniq);



///////////////////////////////////////////////////////////////////////////////////////////////


// This script merges two number arrays, removes duplicates, and sorts the result in ascending order.
const arrayOne = [1,3,5,7,9,9,10];
const arrayTwo = [2,4,4,6,8,10,11];

const mergedArray = [...new Set([...arrayOne,...arrayTwo])];
const sortedUniqueArray = mergedArray.sort((a, b) => a-b );
console.log(sortedUniqueArray);



//////////////////////////////////////////////////////


// find missing number in the array
const missingNumberArray = [1,2,4,5,6,10];

const maxValue = Math.max(...missingNumberArray);
const minValue = Math.min(...missingNumberArray);
const newObjOfMissingNumberArray = new Set(missingNumberArray)

const arrayOfMissingNumber=[]

for(i=minValue; i<maxValue; i++){
  if(!newObjOfMissingNumberArray.has(i)){
    arrayOfMissingNumber.push(i);
  }
}

console.log(arrayOfMissingNumber);


/////////////////////////////////////////////////////////////


// This script finds and prints the unique (non-repeating) numbers from an array using a frequency count approach.
const stringArray = ['Arjun','Navas','Arjun','Sanu','Navas'];

const object = stringArray.reduce((acc,name)=>{
  acc[name] = (acc[name] || 0) +1;
  return acc;
},{});

const answerOfUniqTwo = Object.keys(object).filter(name => object[name] === 1);

console.log(answerOfUniqTwo);



/////////////////////////////////////////////////////////////////////


// it return groups same word array in the on array
const groupAnagrams2 = (array) => {

  const obj={};

  for (let word of array) {
    let key = word.split('').sort().join('');
    
    if (!obj[key]) {
      obj[key]=[]
    }
    obj[key].push(word);
  }

  return Object.values(obj);
};

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));


////////////////////////////////////////////////////////////////////


// nested array set into a single-level array ( without using flat method )
const flatten = (array) => {

  let result = [];

  for (let item of array) {

    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(flatten([1, [2, [3, [4]], 5]]));



//////////////////////////////////////////////////////////////////////////////


// Returns the top k(how many to return) most frequent elements from the array
const topKFrequent = (array, k) => {
  
  const obj = array.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
  }, {});

  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return entries.slice(0, k).map(entry => Number(entry[0]));
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([4,4,4,5,6,6,7,7,7,7], 2));
console.log(topKFrequent([1], 1));


//////////////////////////////////////////////////////////////////


// Finds two numbers in the array that add up to a given target.
const twoSum = (array, target) => {
  const seen = new Map();

  for (let num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
      return [complement, num];
    }

    seen.set(num);
  }

  return null;
};

console.log(twoSum([1,2,3,4,5], 8));


/////////////////////////////////////////////////////////////////////


// Container With Most Water
const containerWithMostWater = (array) => {

  let leftPoint = 0;
  let rightPoint = array.length-1;
  let maxWater = 0;

  while(leftPoint<rightPoint){
    const width = rightPoint-leftPoint;
    const height = Math.min(array[leftPoint], array[rightPoint]);
    const area = width*height;
    maxWater = Math.max(maxWater, area);

    array[leftPoint] < array[rightPoint] ? leftPoint++ : rightPoint--;
  };

  return maxWater;
};

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]));
console.log(containerWithMostWater([1,1]));



////////////////////////////////////////////////////////////


// Finds two number's index in the array that add up to a given target.
const twoSumWithIndex = (array, target) => {
  const seen = new Map();

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const complement = target - num;

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(num, i);
  }

  return null;
};

console.log(twoSumWithIndex([1, 2, 3, 4, 5], 8));



////////////////////////////////////////////////////////////////////////////////////////////////////


// Find the intersection of two arrays
// Return the common elements found in both arrays.
// Expected Output:
// [3, 4]
// []
console.log('//////////////////////////////////////////////////////////////')
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(arrayIntersection([10, 20, 30], [40, 50]));

function arrayIntersection(arrayOne, arrayTwo) {
  const obj = new Set(arrayTwo);
  return arrayOne.filter(value => obj.has(value));
};



////////////////////////////////////////////////////////////////////////////////////////


// Find the most frequent element in an array
// If multiple elements have the same highest frequency,
// return the one that appears first.
// Expected Output:
// 2
// "a"

const mostFrequent = arr => {

  const freqObj = {};
  let maxCount = 0;
  let freqValue;
  
  for(const elem of arr){
    freqObj[elem] = (freqObj[elem] || 0) + 1;

    if(freqObj[elem] > maxCount){
      maxCount = freqObj[elem];
      freqValue = elem;
    }
  }

  return freqValue;
}

console.log(mostFrequent([1, 2, 2, 3, 1, 2]));
console.log(mostFrequent(["a", "b", "a", "c", "a", "b"]));



////////////////////////////////////////////////////////////////////////////////////


// Move all zeros to the end of an array
// Keep the order of non-zero elements unchanged.
// Expected Output:
// [1, 3, 12, 0, 0]
// [1, 2, 3, 4, 0, 0]

const moveZeros = arr => {

  const zerosArr = [];
  const numberArr = [];

  for(const num of arr){
    if(num === 0){
      zerosArr.push(num)
    }else{
      numberArr.push(num)
    }
  }

  return [...numberArr.sort((a,b) => a-b), ...zerosArr];
};

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([1, 2, 0, 0, 3, 4]));



//////////////////////////////////////////////////////////////////////////////


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

function longestConsecutive(arr) {
  if(arr.length === 0) return 0;

  const sorted = [...new Set(arr)].sort((a,b) => a-b);

  let current = 1;
  let longest = 1;

  for (let i = 1; i < sorted.length; i++) {
    if(sorted[i] === sorted[i-1] + 1){
      current++;
      longest = Math.max(current, longest);
    }else{
      current = 1;
    }
  };

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9



///////////////////////////////////////////////////////////////////////////////


// Find the difference between two arrays
// Return elements that exist in the first array
// but not in the second array.
// Expected Output:
// [1, 3]
// ["a", "c"]
const arrayDifference = (arrOne, arrTwo) => {
  const set = new Set(arrTwo);
  return arrOne.filter(elem => !set.has(elem));
};

console.log(arrayDifference([1, 2, 3, 4], [2, 4]));
console.log(arrayDifference(["a", "b", "c"], ["b"]));



///////////////////////////////////////////////////////////////////////////////////////////


// Check whether an array is sorted in ascending order
// Return true if every element is greater than or equal
// to the previous element.
// Expected Output:
// true
// false
// true

const isSorted = (array) => {
  
  for (let i = 1; i < array.length; i++){
    if(array[i] < array[i - 1]){
      return false;
    };
  };

  return true;
};

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 3, 2, 4, 5]));
console.log(isSorted([5, 5, 5, 5]));



//////////////////////////////////////////////////////////////////////////////////////


// Rotate an array to the right by k positions
// Expected Output:
// [4, 5, 1, 2, 3]
// [3, 4, 5, 1, 2]

function rotateArray(arr, k) {
  const length = arr.length;

  return [
    ...arr.slice(length - k),
    ...arr.slice(0, length - k)
  ];
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 3));



/////////////////////////////////////////////////////////////////////////////////////


// Check whether two arrays contain exactly the same elements
// in the same order.
// Expected Output:
// true
// false
// true
// false

const arraysEqual = (arrOne, arrTwo) => {

  for (let i = 0; i < arrOne.length; i++) {
    if(arrOne[i] !== arrTwo[i]){
      return false
    }
  }

  return true;
};

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [3, 2, 1]));
console.log(arraysEqual(["a", "b"], ["a", "b"]));
console.log(arraysEqual(["a", "b"], ["a", "c"]));



/////////////////////////////////////////////////////////////////////////////////////////


// Find the element that appears only once
// Every other element appears exactly twice.
// Expected Output:
// 1
// 4
// 3

const singleNumber = arr => {
  return arr.reduce((acc, num) => acc ^ num, 0);
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([7, 3, 7]));



///////////////////////////////////////////////////////////////////////////////////


// Find the longest common prefix among an array of strings
// Return "" if there is no common prefix.
// Expected Output:
// "fl"
// ""
// "inters"

const longestCommonPrefix = arr => {
  if (arr.length === 0) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));



////////////////////////////////////////////////////////////////////////////////////


// Find the first missing positive integer
// The array may contain negative numbers and duplicates.
//
const firstMissingPositive = arr => {

  const obj = new Set(arr)
  let num = 1

  while (obj.has(num)) {
    num++;
  }

  return num
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
//
// Expected Output:
// 3
// 2
// 1




///////////////////////////////////////////////////////////////////////////////////////


// You are given an array where each element represents a stock price on that day.
// Find the maximum profit you can make by buying once and selling once.
const maxProfit = arr => {

  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of arr) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2