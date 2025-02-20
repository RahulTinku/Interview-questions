# How to compare two arrays are equal or not?

A common solution that many people suggest is to use JSON.stringify(). This allows us to serialize each array and then compare the two serialized strings. A simple implementation of this might look something like this:

```
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = [1, 2, 3];
const b = [1, 2, 3];

equals(a, b); // true
```

While this seems like a great, short and easily understandable solution, it falls short on some edge cases where different values' serialized string is the same. For example:

``` 
const str = 'a';
const strObj = new String('a');
str === strObj; // false
equals([str], [strObj]); // true, should be false

null === undefined; // false
equals([null], [undefined]); // true, should be false
```

### A better way

A better approach would be to compare the two arrays' lengths and use Array.prototype.every() to compare the values of the two:

```
const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');

equals(a, b); // true
equals([str], [strObj]); // false
equals([null], [undefined]); // false
```

This approach safeguards against the serialization issue described above. However it does not take into account nested arrays or objects, which need to be checked recursively.
