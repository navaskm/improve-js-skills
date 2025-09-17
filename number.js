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
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));


//////////////////////////////////////////////////////////////////


// sum large two number in the array
const sumTopTwoNumbers = arr => {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[0] + sorted[1];
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