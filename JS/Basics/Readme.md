### hoisting

```
console.log(x)
var x = 10

console.log(y)
let y =20
```

### difference in let and var

```
for(var i=0; i<5; i++){​​​
 console.log(i)
}​​​
console.log(i)

let  i
for( i=0; i<5; i++){​​​
console.log('inside',i)
}​​​
console.log('outside',i)
```

### Global variables, scope of Var

Remember:- all IIFE will have access to global variables.

```
(function(){
  var x = y = 200;
}());

x:- not defined
y 200
```

### array length

```
const arr = [1, 3, 5];
arr[100] = 199;
console.log(arr.length);
```

### nested array => find unique values in single array

```
arr = ['a','b','c',['d','e','b','a'],'f'];
expected O/P => o/p = ["a", "b", "c", "d", "e", "f"]

solution:- let z = [... new Set([].concat(...arr))]
```

### this will have the reference of parent scope.

this will have the refernce of parent context. from Where the function is calling, this will have the refernce of that context.

o/p expected 2 but gives 1 since this.growOld is attached to window,

```
function Person(age) {
    this.age = age;
    this.growOld = function() {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000);
```

### remove duplicates from array of objects

```
const arr = [{a:1}, {a:1}, {b:2}, {c,3}]
const unique = (x) => [...new Map(x.map((z) => ([JSON.stringify(z),z])).values()];

unique(arr)
// [{a: 1},{b: 2},{c: 3}]
```

### Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

```
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
```