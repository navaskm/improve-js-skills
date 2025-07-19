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