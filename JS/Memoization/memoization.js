// function that takes a function and returns a function
const memoize = (func, context) => {
  // a cach for results
  const results = {};
  // return a anonymous function for the cache of results
  return (...args) => {
    // a JSON key to save the results cache
    const argsKey = JSON.stringify(args);
    // execute function only if there is no cached value of clumsySquare()
    if (!results[argsKey]) {
      // store the result in cache
      // call the fucntion with provided context, if no caontext provided the use this
      // in case of call or apply or bind we can provide differet function context
      results[argsKey] = func.call(context || this, ...args);
    }
    // return the cached result
    return results[argsKey];
  };
};

const clumsySquare = (num1, num2) => {
  let result = 0;
  for (let i = 1; i < num1; i++) {
    for (let j = 1; j < num2; j++) {
      result++;
    }
  }
};

const myMemoize = memoize(clumsySquare);

// first time it takes arounf 40 ms
console.time('first call');
console.log(myMemoize(9467, 4242));
console.timeEnd('first call');

// second time it'll take near to 0 ms, since the result is already soted in cache
console.time('second call');
console.log(myMemoize(9467, 4242));
console.timeEnd('second call');
