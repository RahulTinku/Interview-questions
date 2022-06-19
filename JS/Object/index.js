// delete keyword in Object
const func = (function (a) {
  delete a; // It'll not delete a local variable (a in this case)
  return a;
})(5);
console.log(func);

const obj = {
  name: 'rahul',
  age: 30,
  add: 'ranchi',
  'say my name': 'rahul',
};

delete obj.add; // this will delete because its deleting a properties (key value pair) from object not a local variable

console.log(obj);
console.log(obj['say my name']);

// add dynamic key value pair to object
const property = 'firstname';
const name = 'rahul';
const user = {
  [property]: name,
};
console.log(user);

// Loop in Object
for (key in obj) {
  console.log(obj[key]);
}

/** **************************************************************************** */
let ob = {
  a: 'one',
  b: 'two',
  a: 'three', // previous key will be overridden
};
console.log(ob);

/** **************************************************************************** */
/** Create a function multiplyByTwo(obj)  that multiplies all numeric properties of nums by 2*/

let nums = {
  a: 100,
  b: 200,
  title: 'nums',
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}
console.log(nums);

/************************************************************************************** */

let a = {};
let b = { key: 'b' };
let c = { key: 'c' };

a[b] = 123; //  it'll saved as a[Object Object] as b ={key: 'b'} cannot be converted as key as its not string. Only strings can be keys
a[c] = 456; // it'll also save at a[Object Object]
console.log(a[b]);
// O/P :- 456, as latest value of a[Object Object] is 456

/************************************************************************************** */
let shape = {
  r: 10,
  diameter() {
    return this.r * 2;
  },
  perimeter: () => 2 * Math.PI * this.r,
};

console.log(shape.diameter()); //  20
console.log(shape.perimeter()); // r is not deined NaN

/************************************************************************************** */
//nested Object destrucutre
ob = {
  task: 'learn JS',
  time: 20,
  name: {
    first: 'rahul',
    last: 'kumar',
  },
};

const {
  name: { first }, // nested destructed
} = ob;
console.log(first);

/************************************************************************************** */

let person = { name: 'rahul' };
let member = [person]; // added person object in [0] index of member // created new memory
person = null; // setting the object null will not effect the array[0]

console.log(member); // prints the person object

person.name = null; // we changed the reference, hence it'll update the name in person object
/************************************************************************************** */
