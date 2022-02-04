# Curry in Javascript

### What is Currying

Currying is the transformation of functions that translates a function from callable as `f(a,b,c)` into callable as `f(a)(b)(c)`

Currying doesnot call a function, it just transforms it.

We'll create a helper function `curry(fn)` that performs currting of two-argument `fn`.
In othr wors, curry of `fn(a,b)` will be converted into `f(a)(b)`

```
function curry(fn){
    return function(a){
        return function(b){
            return fn(a+b)
        }
    }
}

//uses
function sum(a,b){
    return a+b
}

let curried = curry(sum);
curried(1)(2); //3
```

### add(1)(2)(3)(4) ...

```
function add(a){
    return function(b){
        if(b) return add(a+b)
        else return a
    }
}
```

### advance curry implementation

```
function curry(func){
    return function curried(...args){
        if(args.length >= func.length) { // func.length provides the length of the arguments
            return func.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

example
-------

function sum(a,b,c){
    return a+b+c
}

let currySum = curry(sum);

currySum(1,2,3) // 6, still callable normally
currySum(1)(2,3) // 6, currying for last argument
currySum(1)(2)(3)  // 6, full curry
```
