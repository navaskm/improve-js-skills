// This script identifies and returns the names of employees who appear more than once based on their 'name' property.
const employees = [
  { name: 'Arjun', age: 28, place: 'Chennai' },
  { name: 'Naveen', age: 30, place: 'Kochi' },
  { name: 'Sara', age: 26, place: 'Bangalore' },
  { name: 'Arjun', age: 28, place: 'Chennai' },
  { name: 'Naveen', age: 30, place: 'Kochi' },
  { name: 'Arjun', age: 28, place: 'Chennai' },
];

const obj = {}
const result = [];

for(const elem of employees){

  obj[elem.name] = (obj[elem.name] || 0) + 1;
  
  if(obj[elem.name] === 2){
    result.push(elem.name)
  }
}

console.log(result)



/////////////////////////////////////////////////////////////////////////////

// Count how many times each character appears in a string
// Return an object with character frequencies.
// Expected Output:
// { h: 1, e: 1, l: 2, o: 1 }
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

console.log(charFrequency("hello"));
console.log(charFrequency("javascript"));

function charFrequency(string) {
  const letterOfString = [...string];

  const objOfLetters = letterOfString.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0)+ 1;
    return acc;
  },{});

  return objOfLetters;
};



/////////////////////////////////////////////////////////////////////////////

// Group array elements by their type
// Return an object where the keys are the data types
// and the values are arrays of elements of that type.
// Expected Output:
// {
//   number: [1, 42],
//   string: ["hello", "world"],
//   boolean: [true, false]
// }
console.log(groupByType([1, "hello", true, 42, false, "world"]));

function groupByType(array) {

  const obj = {};

  for(const item of array){

    if(!obj[typeof item]){
      obj[typeof item] = [];
    };

    obj[typeof item].push(item);
  };

  return obj;
};