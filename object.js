// This script identifies and returns the names of employees who appear more than once based on their 'name' property.
const employees = [
  { name: 'Arjun', age: 28, place: 'Chennai' },
  { name: 'Naveen', age: 30, place: 'Kochi' },
  { name: 'Sara', age: 26, place: 'Bangalore' },
  { name: 'Arjun', age: 28, place: 'Chennai' },
  { name: 'Naveen', age: 30, place: 'Kochi' },
  { name: 'Arjun', age: 28, place: 'Chennai' },
];

const countName = employees.reduce((acc, { name }) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});

const answer = Object.keys(countName).filter(name => countName[name] > 1);

console.log(answer);