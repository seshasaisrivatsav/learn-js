<h1>JavaScript Basics</h1>

### Promise, async, await example
Create a promise and get result async
```js

let promise1 = new Promise((resolve, reject) => {
  if(true) {
      setTimeout(function() {
      	resolve({a: 'hello'});
    	}, 300);
  } else {
      setTimeout(function() {
      	reject({error: 'error', reason:'you are jackass'});
    	}, 300);
  }
})

  console.log(promise1) // pending

promise1.then(function (res) {
	console.log(res)
  console.log(promise1) // resolved
}).catch(err => {
	console.log(err);
  console.log(promise1) // rejected
})


const getRes = async () => {
  let res = await promise1;
  return res;
}

getRes().then(res => { console.log(res) })
```

### [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
Bind method creates a new function that when called has it's this keyword set to provided value.

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


## Handy Functions/APIs

### String functions
#### Trim empty spaces
```
trim()
```
#### get Char At position
```
charAt()
```
#### Substr v/s Substring

substr() - Get remaining from a given position
```
const str = "12345";
console.log(str.substr(2)) // 345
```
substring() method returns the part of the string between the start and end indexes, or to the end of the string.
```
const str = "123456789";
console.log(str.substring(2,4)) // 2 included 4 excluded
```

#### IndexOf
```
const str = "abc=123";
const index = str.indexOf("="); //3

console.log(str.substring(0, index)); //abc
console.log(str.substring(index+1)); //123

```
### Syntax
```
        ({
          mock: {
            calls: [[, deferreds]],
          },
        } = getSomeThing);
```

### Break and Continue

#### Break 
statement "jumps out" of a loop.

Outputs: 0,1,2
```
for (var i = 0; i < 5; i++ ) {
	if (i === 3) {
  	break
  }
 
  console.log(i)
}
```
#### Continue
Continue exits the loop for one iteration
Outputs: 0,1,2,4
```
for (var i = 0; i < 5; i++ ) {
	if (i === 3) {
  	continue
  }
 
  console.log(i)
}
```

### Source Map
- Source map is a way to map a combined/minified file back to an unbuilt state.
- When an app is deployed to prod, along with minifying and combing your JS files, you generate a source map which holds info about original files
- When you query a certain line and column number in your generated JS, you can do a lookup in source map which returns original location



### Versioning
#### Major.Minor.Patch
 `^` would normally allow drift in not just patch versions but also minors, up until the next major version. However the behavior is slightly different for projects on versions before v1.0.0. NPM assumes that v1.0.0 is the first "official" release of a library and that, until then, even patches could contain breaking changes. 
