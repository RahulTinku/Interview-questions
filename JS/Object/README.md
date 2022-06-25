### Understanding Deep and Shallow Copy

![img](https://github.com/RahulTinku/Interview-questions/tree/main/JS/Object/img/copydiff.png)

a shallow copy has common data shared between the copy and the original.
a deep copy doesnot have any data shared

### Different ways to copy objects

- Using "for-of" loop to iterate through the object properties
- Using JSON.strigyfy and then JSON.parse
- Working with `Object.assign`function
- Using `Objec.create`
- using recursion for object copy

1. Copy Properties of Source using “for-in” loop
   This is the easiest method to copy an object. This method involves iterating each property of the object and copy those key-value pairs to the destination object.
   for Normal objects it creates deep copy.

```
var employeeData = {
  name: "Mayank",
  age: 31,
  designation: "Developer",
  getData: function() {
    alert(this.name)
  }
}

var destinationObject = {};

for(property in employeeData) {
  destinationObject[property] = employeeData[property];
}

console.dir(destinationObject);
```

Complex objects are copied by reference (no deep copy).
here address is copy by reference, hence if I change employeeData.address.state, it'll reflect in destination object as well

```
var employeeData = {
  name: "Mayank",
  age: 31,
  designation: "Developer",
  address: {
    state: "Delhi",
    country: "India"
  }
}

var destinationObject = {};

for(property in employeeData) {
  destinationObject[property] = employeeData[property];
}

console.dir(destinationObject);

employeeData.address.state = "Haryana";

console.log("Source Object Data Updated....")

console.dir("Destination State Data: " + destinationObject.address.state);
```

2. Use JSON Stringify and JSON Parse
   In the following approach, we can convert the object to the JSON string using JSON.stringify. Once the Object has been stringified, it can be converted back to object using “JSON.parse” and saved into a separate object. This will help us achieve a <b>deep copy</b> of the specified object. It creates deep copy for nested objects as well.

   - disadvantage
     The method cannot be used to copy the user-defined methods. The methods added to the object are not copied to the destination object.
     Cannot copy “prototype” properties and functions of the object.

```
function Employee() {
    this.name = "Mayank";
    this.age =  20;
}

Employee.prototype.showData = function() {
    console.log("User Name: " + this.name)
}

var userDetails = new Employee();

var stringObject = JSON.stringify(userDetails);

var destinationObject = JSON.parse(stringObject);

console.dir(destinationObject)
```

![img](https://github.com/RahulTinku/Interview-questions/tree/main/JS/Object/img/parse.png)

3. Copy Objects with “Object.assign”

- Disadvantages of using Object.assign:

  1. “Object.assign” cannot copy through non-enumerable properties.

  ```
  var employeeData = {
  name: "Mayank",
  age: 31,
  designation: "Developer"
  }

   Object.defineProperty(employeeData, 'salary', {
   value: 10000,
   enumerable: false
   });

   var destinationObject = Object.assign(employeeData);

   console.dir(destinationObject)

  ```

  The output for the code above is shown below. We can see that the non-enumerable property salary is not the part of the object created.
  ![img](https://github.com/RahulTinku/Interview-questions/tree/main/JS/Object/img/assign.png)

  2. Object.assign does not copy prototype properties and methods.
  3. Does not create a deep copy of the source object

- Advantages of Object. assign:

  1.  Functions can be copied from source to destination object.
  2.  Object.assign can be used to copy multiple object properties.

      ```
      var firstObject = {
       userName: "Mayank",
          age: 30,
          designation: "Developer"
      }

      var secondObject = {
          street: "Rohini",
          country: "India"
      }

      var destinationObject = Object.assign(firstObject, secondObject);

      console.dir(destinationObject)
      ```

4.  Working with Object.create to Copy Object
    Object.create is another function that can make the properties of one object available to other objects. This method creates a new object using the existing object as a prototype, following the concept of prototype inheritance. The existing object is made available as a prototype making all the properties available to the new object.

    ```
    var userInfo = {
    name: "Mayank",
    age: 30,
    salary: 10000,
    designation: "Developer"
    }

    var newObject = Object.create(userInfo);

    console.log(newObject)
    ```

    In the above code, we are using Object.create, to create a new object. Using this method, we do not add properties to the new object. The new object we have created does not contain any properties like name, age, and salary. See the image below:
    ![img](https://github.com/RahulTinku/Interview-questions/tree/main/JS/Object/img/proto.png)

    As stated earlier, the object userInfo is not available in the prototype chain of the newly created object. So when we access the property “name”, it will be accessed from the prototypal chain of the object.

    ![img](https://github.com/RahulTinku/Interview-questions/tree/main/JS/Object/img/pro.png)
    The properties are available in the **proto** property of the newly created object, which points to the object in the prototypal chain, hence making properties available to the object.

    - Advantages of Object.create:
      1. All the methods and properties which are available to the userInfo object are available to the new object that is created, since it exists as the part of prototypal chain.
      2. The Property is made available through the prototypal chain, so the object need not consume more memory space to save the existing functions and properties. No separate memory space is consumed, so the methods and the properties can be reused.
    - Disadvantages of Object.create:
      1. The newly created object does not create a separate property. Modifying the property from the Source Object modifies the data available to the new Object also.
      2. Does not create a deep copy for the object.

5.  Using Recursion for Object Copying
    Recursion can be used to create a deep copy of the source object. We use recursion to ensure that we cover the maximum possible scenarios. We can iterate through the object and copy the value type variables of the object. If the source object contains some complex objects, we can iterate through the complex object properties recursively and copy those properties to the destination object.

```
var userDetails = {
   name: "Mayank",
   age: 30,
   designation: "Developer",
   address: {
           street: "Rohini",
           country: "India"
   }, showDetails: function() {
       console.log("UserName: " + this.name);
   }
}

var destinationObject = {};

function deepCopy(sourceObject, destinationObject) {

   for(key in sourceObject) {
       if(typeof sourceObject[key] != "object") {
           destinationObject[key] = sourceObject[key];
       } else {
           destinationObject[key] = {};
           deepCopy(sourceObject[key], destinationObject[key]);
       }
   }
}

deepCopy(userDetails, destinationObject);
```
