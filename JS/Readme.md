### JavaScript questions

## arrow function in prototype

String.prototype.myConcat = function(x){return this+x}
console.log('Hello - '.myConcat('Rahul')) // O/P -- `Hello - Rahul`

---

String.prototype.myConcatArrow = (x) => {return this+x}
console.log('Hello - '.myConcatArrow('Rahul')) // O/P -- [Object global] Rahul

[When you should not use arrow function](https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/)

## Convert promise to observable for Angular

Promise is the answer to the callback hell problem. With the introduction of async/await syntax, Promise is getting so popular. But if you work with Angular, you’ll probably need an Observable from Promise sometimes. There are few ways for you to do so.
[find the read here](https://trungk18.com/experience/convert-promise-to-observable/)
