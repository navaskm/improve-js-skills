// check prime number or not
const isPrime = (number) => {

  if (number <= 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

console.log(isPrime(6));
console.log(isPrime(7));


//////////////////////////////////////////////////////////


// Add recursive factorial function implementation
function factorial(n) {
  if (n === 2) return 2;
  return n * factorial(n - 1);
}

console.log(factorial(5));


//////////////////////////////////////////////////////////////////


// sum large two number in the array
const sumTopTwoNumbers = arr => {
  
  let first = -Infinity
  let second = -Infinity
  
  for(const num of arr){
    if(num > first){
      [first, second] = [num, first]
    }else if(num > second){
      second = num
    }
  }

  return first + second;
};

console.log(sumTopTwoNumbers([4, -1, 2, 1, 9, 3]));



///////////////////////////////////


// Function to reverse digits of a number while keeping its sign 
const reverseNumber  = (x) => {
  const sign = Math.sign(x);
  const reversedString = Math.abs(x).toString().split('').reverse().join('');
  return parseInt(reversedString) * sign;
};

console.log(reverseNumber (-328))
console.log(reverseNumber (120))


////////////////////////////////////////////////////////////////////////

// Integer to Roman
var intToRoman2 = function(num) {

  const values = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];

  let res = '';

  for (let i = 0; i < values.length; i++) {
    let times = Math.floor(num/values[i][1]);
    res = res + values[i][0].repeat(times);
    num = num % values[i][1]
  };

  return res;
};

console.log(intToRoman2(3749));
console.log(intToRoman2(58));
console.log(intToRoman2(9));



///////////////////////////////////////////////////////////////////////////////


// Find the average of all numbers in an array
// Return 0 for an empty array.
// Expected Output:
// 3
// 15
// 0

const average = arr => {

  const totalValue = arr.reduce((acc, num) => {
    return acc += num;
  },0);

  return totalValue / arr.length || 0;
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average([10, 20]));
console.log(average([]));



///////////////////////////////////////////////////////////////////////////////


// LeetCode 118 - Pascal's Triangle
// Generate the first numRows of Pascal's Triangle.
// The first and last number of every row is always 1.
// Every middle number is the sum of the two numbers
// directly above it from the previous row.
var generate = function(numRows) {

  const result = [];
  let current = [];
  let prev = []

  for (let i = 1; i <= numRows; i++) {
    if(i === 1){
      result.push([1])
    }else if(i === 2){
      result.push([1, 1])
      prev = [1, 1]
    }else{
      current.push(1);
      for (let k = 0; k < prev.length - 1; k++) {
        current.push(prev[k] + prev[k + 1])
      }
      current.push(1)

      result.push(current);
      prev = current;
      current = []
    }
  }

  return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(3)); // [[1],[1,1],[1,2,1]]



///////////////////////////////////////////////////////////////////////////////////

// LeetCode 119 - Pascal's Triangle II
// Return the row at the given rowIndex from Pascal's Triangle.
// The first and last number of every row is always 1.
// Every middle number is the sum of the two numbers
// directly above it from the previous row.
var getRow = function(rowIndex) {

  if(rowIndex === 0){
    return [1]
  }else if(rowIndex === 1){
    return [1, 1]
  }

  const result = [];
  let current = [];
  let prev = []

  for (let i = 1; i <= rowIndex + 1; i++) {
    if(i === 1){
      continue
    }else if(i === 2){
      prev = [1, 1]
    }else{
      current.push(1);
      for (let k = 0; k < prev.length - 1; k++) {
        current.push(prev[k] + prev[k + 1])
      }
      current.push(1)

      if(rowIndex + 1 === i){
        return current
      };

      result.push(current);
      prev = current;
      current = []
    }
  }

  return null;
};
console.log(getRow(5)); // [1,5,10,10,5,1]
console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(1)); // [1,1]



/////////////////////////////////////////////////////////////////////////////


// LeetCode 190 - Reverse Bits
// Reverse the bits of a 32-bit unsigned integer.
// Convert the number to a 32-bit binary string,
// reverse the bits, and convert it back to a decimal number.
var reverseBits = function(n) {

  const binary = (n >>> 0).toString(2).padStart(32, "0")
  const reverseBinary = binary.split('').reverse().join('')

  return parseInt(reverseBinary, 2);
};

console.log(reverseBits(43261596)); // 964176192
console.log(reverseBits(2147483644)); // 1073741822



///////////////////////////////////////////////////////////////////////////////////


// LeetCode 191 - Number of 1 Bits
// Count the number of 1s in the binary representation of a number.
// This is also called the Hamming Weight.
var hammingWeight = function(n) {

  const binary = n.toString(2);
  let result = 0;

  for(const num of binary){
    result += Number(num);
  }

  return result;
};
console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30



////////////////////////////////////////////////////////////////////////////////////


// LeetCode 231 - Power of Two
// Check whether a number is a power of two.
// A power of two can be created by multiplying 2 by itself.
// Examples:
// 1 = 2^0
// 2 = 2^1
// 4 = 2^2
// 8 = 2^3
// 16 = 2^4
var isPowerOfTwo = function(n) {

  if(n === 1) return true
  let count = 2;

  while (count <= n) {
    if(n === count){
      return true
    };
    count += count;
  }

  return false;
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false