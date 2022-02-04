const memoize = (func, context) => {
  const result = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!result[argsKey]) {
      result[argsKey] = func.call(context || this, ...args);
    }
    result[argsKey];
  };
};

const fibo = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const myFibo = memoize(fibo);

myFibo(5);
myFibo(10);
