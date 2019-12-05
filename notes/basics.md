<h1>JavaScript Basics</h1>

### Promise, async, await example
Create a promise and get result async
```js
let promise1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve({a: 'hello'});
  }, 300);
})


const getRes = async () => {
  let res = await promise1;
  return res;
}

getRes().then(res => { console.log(res) })
```

### [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
Note: Bind only works with functions, if you have arrow functions, then see the below solution
#### Bind for function
```js
let obj = {
  num: 2
};

let addFn = function (a,b) {
  return this.num + a + b;
}

let bound = addFn.bind(obj);

console.log(bound(1,2))
```
#### Bind for arrow function
```js
let fun = (a, b) => {
	return a + b
}

let bound = fun.bind(null, 1, 2);

console.log(bound()) // 3
```
### `Call`ing or `apply`ing the bound functions with arguments directly.
Both call and apply are used to invoke the bound function directly with apply taking the second argument as array.
#### Call
Call is nothing but calling the bound function directly

```js
let obj = {
  num: 2
};

let addFn = function (a,b) {
  return this.num + a + b;
}

console.log(addFn.call(obj, 1, 2))
```

#### [Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

```js
let obj = {
  num: 2
};

let addFn = function (a,b) {
  return this.num + a + b;
}

console.log(addFn.apply(obj, [1, 2]))
```

### Using bracket way of defining a constant ([Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment))

```js
function getRes() {
  return {
  	a: {
	  b: "something",
      	  c: 12
	}
   }		
};


// creating a const 'res'
const { 
	a: {
  	b: res
   }
} = getRes();

console.log(res); // something
```


### Using curly braces

If an object is like this in a file
```js
let a = {
  b: 1,
  c: 2
}
```
In the consuming file, we can use something like
```js
const { b, c } = a;
````

### Import and export rules


### Property descriptors
Configurable, Enumerable, Writable
```js
const readOnlyProperty = (obj, name, value) => {
  Object.defineProperty(obj, name, {
    value,
    configurable: false,
    enumerable: true,
    writable: false,
  });
};

let testObject = {};
readOnlyProperty(testObject, 'hello', 1);
console.log(testObject); // { hello: 1}


// Getting them back

// Enumerable
console.log('enumerable:' + testObject.propertyIsEnumerable('hello')) // True
 
const configurableTest = Object.getOwnPropertyDescriptor(testObject, 'hello');
console.log('configurable: ' + configurableTest.configurable);
console.log('Enumerable: ' + configurableTest.enumerable);
console.log('Writable: ' + configurableTest.writable);

```

