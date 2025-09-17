// This script finds and prints the unique (non-repeating) numbers from an array using a frequency count approach.
const arrayOfUniq = [1, 2, 1, 3, 1, 4, 2, 5, 4];

const countMap = arrayOfUniq.reduce((acc,number)=>{
  acc[number] = (acc[number] || 0) +1;
  return acc;
},{});

const answerOfUniq = Object.keys(countMap).filter(num => countMap[num] < 2 ).map(Number);

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

const arrayOfMissingNumber=[]

for(i=minValue; i<maxValue; i++){
  if(!missingNumberArray.includes(i)){
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