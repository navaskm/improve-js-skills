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