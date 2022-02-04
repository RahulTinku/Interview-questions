# Memoization

### What is Memoization

Memoization is a top down approach(depth first). It is an optimizes technique to store previously exexuted computations. When program need the result of previous computation, then it need not execute the complete function. It'll reuse the previously executed computation.
By this it saves time for executing the same function again and again

Like in calculating finobacii. If we are calculating Fibonacii for `5 => 1+1+2+3+5` again when we try to find fibonacii number till 6, we have to use `fibo(6) + fibo(5)` If fibo(5) is saved in `memoization/catch` then we need not execute the function again we can simply find the result and use it. Hence time is saved.

### Importance of Memoization

- It is an optimized technique that improves the performance by caching result for previous function calls.
- A memoized function should be a `pure function` this means function execution does not mutate. When called with same input it should return same output everytime.
- Your function should be called more than once with same input, then cacheing the result will make sense.

### When to use Memoization

- When function is pure. Is should return always return same output for same set of input.
- Heavy computing funciton, when program has an expensive computation. Then caching result will make sense.
- Remote api calls, when making an API call repeptativly. Using a memoization wil save us from making repetative calls to server.
- A function that recalls itself with with recurring input values. e.g. `recursive function`

### How Memoization works

Concept of memoization is backed by two main concepts

- Clouser
- Higher order function

[Reference](https://www.section.io/engineering-education/an-introduction-to-memoization-in-javascript/)
