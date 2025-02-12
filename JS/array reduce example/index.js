/**
 * Find the no of occurance of same age in this array of objects
 */
var obj = [
  {
    name: 'rahul',
    age: 30,
  },
  {
    name: 'KK',
    age: 31,
  },
  {
    name: 'KK',
    age: 31,
  },
  {
    name: 'rajes',
    age: 40,
  },
  {
    name: 'sonal',
    age: 31, 
  },
  {
    name: 'elon',
    age: 30,
  },
];

const output = obj.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);
