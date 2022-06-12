/**
 * Ployfill for forEach
 */
//use case
const arr = ['a', 'b', 'c', 'd'];
// arr.forEach((item) => console.log(item));
// // OR
// arr.forEach(function (item) {
//   console.log(item);
// });

//Polyfill
Array.prototype.myForEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this); // current value, index, array
  }
};
//arr.myForEach((item) => console.log(item));
/** **************************************************************************************************** */
/**
 * Polyfill for map
 */
const nums = [1, 2, 3, 4, 5, 6];

// const res = nums.map(function (item) {
//   console.log(item * 2);
// });

Array.prototype.myMap = function (callbackFn) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callbackFn(this[i], i, this)); // current value, index, array
  }
  return resultArray;
};

const resultMap = nums.myMap((item) => item * 2);
// console.log(resultMap);
/** **************************************************************************************************** */
/**
 * Polyfill for filter
 */
const obj = [
  { name: 'rahul', age: 12 },
  { name: 'kk', age: 32 },
  { name: 'vikas', age: 20 },
  { name: 'vinod', age: 35 },
];

const resFilter = obj.filter(function (item) {
  return item.age <= 20;
});

Array.prototype.myFilter = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const res = callbackFn(this[i], i, this);
    if (res) {
      result.push(res);
    }
  }
  return result;
};

// OR
Array.prototype.myFilter1 = function (callbackFn, context) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const resultFilter = obj.myFilter((item) => {
  if (item.age <= 20) return item;
});
//console.log(resFilter);

/** **************************************************************************************************** */
/**
 * Polyfill for Reduce
 */

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = num.reduce((acc, curr) => acc + curr, 0);

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc;
  let initialIndex;
  // if intialvalues is given then acc will have the initial value otherwise acc will have the first index and currentvalue will have the 2nd values
  if (initialValue) {
    acc = initialValue;
    initialIndex = 0;
  } else {
    (acc = this[0]), (initialIndex = 1);
  }
  for (let i = initialIndex; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }
  return acc;
};

const myToal = num.myReduce((acc, curr) => acc + curr, 0);
console.log(myToal);
