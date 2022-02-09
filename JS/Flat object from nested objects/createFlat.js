// Create flat objects from nested objects

var test = {
  a: 'jack',
  b: {
    c: 'sparrow',
    d: {
      e: 'hahaha',
    },
  },
};

function traverseAndFlattern(currentNode, target, flatternKey) {
  for (let key of currentNode) {
    if (currentNode.hasOwnProperty(key)) {
      let newKey;

      if (flatternKey === undefined) {
        newKey = key;
      } else {
        newKey = newKey + '.' + key;
      }
      let value = currentNode[key];
      if (typeof value === 'Object') {
        traverseAndFlattern(value, target, newKey);
      } else {
        target[newKey] = value;
      }
    }
  }
}

function faltter(obj) {
  let fatterObj = {};
  traverseAndFlattern(obj, fatterObj);
  return fatterObj;
}

var flattened = JSON.stringify(flatten(test));
console.log(flattened);
