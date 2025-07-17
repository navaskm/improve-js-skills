// This script finds and prints the unique (non-repeating) numbers from an array using a frequency count approach.
const array = [1, 2, 1, 3, 1, 4, 2, 5, 4];

const countMap = array.reduce((acc,number)=>{
  acc[number] = (acc[number] || 0) +1;
  return acc;
},{});

const answer2 = Object.keys(countMap).filter(num => countMap[Number(num)] < 2 ).map(Number);

console.log(answer2);