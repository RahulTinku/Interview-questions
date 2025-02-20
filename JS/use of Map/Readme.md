![img](https://github.com/RahulTinku/Interview-questions/blob/main/JS/use%20of%20Map/img/temp4.PNG)
![img](https://github.com/RahulTinku/Interview-questions/blob/main/JS/use%20of%20Map/img/temp5.PNG)

### answer

```
 let myMap = new Map();
    let count = 0;
    for(let a of ar){
        if(myMap.has(a)){
            count++ 
            myMap.delete(a)
        }else{
            myMap.set(a,1)
        }
    }
    return count
```

# Use of Set & Map

## Map

Map is to create an objet with keys. Keys could be anything, it need not to be only strings.
Map is a collection of key-value dataset just like Object, but the main difference is that Map allows keys to be in any type

---

### Methods and propeties are

```

new Map() :- create new Map
map.set(key, value) :- stores the value by key
map.get(key) :- return the value by key, undefined if key doesn't exists in map.
map.has(key) :- return true if key exists, false otherwise
map.delete(key) :- removes the value by the key
map.clear() :- remove everything from map
map.size() :- return the current element count

```

for Instance:-

```

let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1) ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

```

### map can get Object also as keys

```

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

```

### Iteration over Map

- map.keys() :- return an iterable of keys
- map.values() :- return an iterable of values
- map.entries() :- return and iterable for entries [key, value], it used by default in for..of

```

let recipeMap = new Map([
['cucumber', 500],
['tomatoes', 350],
['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
alert(entry); // cucumber,500 (and so on)
}

```

### convert an Object into Map

The map constructor takes an array of key-value pairs.
Object.entries is the new Object static method aviable in ES2017

```

const map = new Map(Object.entries({foo:'bar'}))
map.get('foo'); // bar
```

[Read full document](https://javascript.info/map-set)
