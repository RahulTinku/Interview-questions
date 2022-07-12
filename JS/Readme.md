### JavaScript questions

## arrow function in prototype

String.prototype.myConcat = function(x){return this+x}
console.log('Hello - '.myConcat('Rahul'))  // O/P -- `Hello - Rahul`

---

String.prototype.myConcatArrow = (x) => {return this+x}
console.log('Hello - '.myConcatArrow('Rahul')) // O/P -- [Object global] Rahul

[When you should not use arrow function](https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/)

## Convert promise to observable for Angular

Promise is the answer to the callback hell problem. With the introduction of async/await syntax, Promise is getting so popular. But if you work with Angular, you’ll probably need an Observable from Promise sometimes. There are few ways for you to do so.
[find the read here](https://trungk18.com/experience/convert-promise-to-observable/)

## difference between switchMap and mergeMap

switchMap cancels previous HTTP requests that are still in progress, while mergeMap lets all of them finish.

---
## Read about binary tree and traversal(BFS & DFS(preOrder, postOrder & inOrder)
[Read](https://www.digitalocean.com/community/tutorials/js-tree-traversal)
