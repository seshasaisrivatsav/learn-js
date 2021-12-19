<h1>JavaScript Basics</h1>

### Map v/s Reduce v/s ForEach
- `ForEach` - Alternative for for loop. Improves readability. Each loop has it's own scope
- `map` transforms elements in to array
- `filter` - to select subset of multiple elements from array
- `find` - to select single element
- `reduce` to derive a single value from multiple elements

Note: `map` is faster than `forEach`


```javascript
// Find word lengths
var words = ["the", "quick", "brown", "fox"];

// 1. using forEach - you can't use return
const results = [];
words.forEach(word => {
  results.push(word.length);
});
console.log(results);

// 2. using map - you can `return`
console.log(words.map(word => {
  return word.length;
}));
```


### var, let, const 
|             var            | let                 | const                              |
|:--------------------------:|---------------------|------------------------------------|
| Has function scope         | has block scope     | has block scope                    |
| it dies at end of function |                     | one time declaration               |
| var gets hoisted to top, initialized as undefined | hoisted to top, and not initialized | can modify values but not reassign |
|access before assignment gives undefined| access before assignment gives reference errors     | has block scope                    |
| var can be redeclared      | can't be redeclared | can modify values but not reassign |
|            | Used with primitive data types | used when we don't want mutation. used for objects |


- const reassignment doesn't work, but object modification works
- Let = Primitive data types
- Const = Objects

```javascript
const c; 
c=1; // it won’t let you do it as const has not been initialized.
const c = [1,2,3]; 
c.push(4);
console.log(c); // it works.


```

### Primitives
In object world we have JS object
1. Objects
2. Arrays
3. Typed Arrays
4. Maps , Weak maps // >= ES6
5. Sets, Weak sets // >= ES6

### Object Type V/s Primitive type
Variable re-assignment is not same as mutation. Immutability can be tested with methods or functions 
- Object type - anything you can mutate
- Primitive type - can't be mutated
    - String, Number, BigInt, Boolean, Symbol (new String("""))
```javascript
let x = 1; //this one can't be mutated, value can't be changed
x = 2; // it would get a different address

let y = [1, 2]; // this can be modified
y.push (3) // this can be mutated; address is same
y = [1,2,3]; // address is changed

var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz
```

### Arrays
- There are two ways to create arrays:
```javascript
const gList= ['bread', 'tomato'];
gList.push('eggs);
```

#### debugging tricks - console.log, console.table, console.dir
- There are two ways to look at it in console
```javascript
console.log(gList);
console.table(gList); // gives a table with index

gList.pop(); // pop's an element
console.log(gList[1]); // access an element by index


const x= [{a:1, b:2}, {a:3, b:4}];
console.table(x, 'a'); // only filters out 'a'

console.dir(objectName); // it shows the prototype info
```

#### shift, unshift
- We can add some element to the front of an array
1. shift - removes the first element
2. unshift - adds given element to front
```
gList.unshift('eggs'); // adds eggs to the front
gList.shift(); // removes the first element
```

#### splice
- Add an element at a position or remove an element
```javascript
arrayName.splice(position, noOfItemsToBeRemoved, 'elementToBeAdded');
```

- Add an element at third position of an array
- 1 = removes one element
- element = adds element at third index
```javascript
arrayName.splice(2, 1, 'element');
```

- Note: Using new Array i.e, a constructor, it creates problems
- PRIMITIVE TYPES = NO CONSTRUCTORS
- OBJECTS = USE LITERAL FIRST, USE CONSTRUCTORS IF ABSOLUTELY NECESSARY

#### slice v/s splice
- splice = insert and remove elements
- slice = takes the object/string converts into an array // It's a prototype method

eg:
```
let x = function() {
    console.log(arguments);
}

x(1,2,3); // returns arguments - 1,2,3
```
- You can slice it to make it return an array of arguments
```
let x = function() {
    console.log([].slice.apply(arguments));
}

x(1,2,3); // returns arguments in array format
```

- whatever arguments are passed into the function, it'll be found in arguments


#### from
- alternative to splice
- Below code returns the passed arguments  
```
let x = function() {
    console.log(Array.from.apply(arguments));
}

x(1,2,3); // returns arguments in array format
```
#### bread operator
- another alternative to splice
```
let x = function() {
    console.log(...arguments);
}

x(1,2,3); // returns arguments in array format
```
#### multi-dimensional array
- "array inside an array"
```
const matrix = [
[1,2,3], // index 0 array has three elements with indices 0,1,2
[4,5,6],
[7,8,9]
]
console.log(matrix[0][0]); // gives 1
```

## set
- Used when we don't want duplicates
```javascript
const set1 = new Set([1,2,3,4]);
console.log(set1); // doesn't have duplicates
// has different methods than arrays
const set1 = new Set([1,1,1,1, 2,3,4]); //1,2,3,4
```

### chaining in sets
- You have an object/constructor and you call methods on it, and we can keep calling same thing
```
set1.add(4).add(5);
console.log(set1); //returns all values
```

### set methods - size, has, values, delete, clear, entries
```
set1.size // gives number of elements
set1.has(1); //checks if the element 1 is present in the set, returns boolean
set1.values(); // gives us an iterator
set1.delete(element) // deletes the value
set1.clear() //clears the whole set
```


## for-of loop
- Example of for-of loop
-'for of' is faster than regular 'for' loop and 'for each' loop
- Note: here i is the item
```
for (i of set1) {
    console.log(i);
}
```
- above loop gives values of all elements in the set set1.
- If you want to get item and index both, then
```
for (let [index, item] of set1.entres() ){}
```

### Iterate through object properties 
```javascript
var testObject = {prop1: 1, prop2: 2};
for (let prop in testObject) {
    console.log(prop); // returns prop1, prop2
}
```

## arrays
- looping through arrays
### arrays.entries
```
for (let [index, item] of arrayTest.entries()){
     console.log(`${index}:${item}`);
}
```
entries is also a new thing in it

### for-each arrays
```javascript
const x = [21,32,43];
let func = function(item, index) {
    console.log(`${index}:${item}`);
}
x.forEach(func);
0:21
1:32
2:43
```

```

```
Note: try to use for of

### for in
- Used for looping objects
```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

```

- Iterator, set are part of ES6

### slowest to fastest

- for-each > for > for-of

## Object v/s Object literal
- Object -uses new
- Object Literal - doesn't need a constructor. Even object literals inherit from object
```javascript
var testObj = new Object();
console.dir(testObj);
```

## hasOwnProperty
```
object.propertyName == undefined
```
or
```
objectName.hasOwnProperty('propertyName') // returns true
```
hasOwnProperty  (Important)
    - You can inherit property from parent
    - hasOwnProperty lets us know if parent belongs to an object or not. It returns false if that property belongs to its parent
    
## JSON functions - Stringify, parse

### JSON.parse
- parses string as JSON 
```javascript
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count); // expected output: 42
```
### JSON.stringify
- converts objects to string
```javascript
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)])); // expected output: "[3,"false",false]"
```

## Copying Objects - Shallow clone, deep clone
1. Shallow Clone - spread operator (...) and Object.assign
    - Shallow copy means some values are still connected to original variable
2. Deep Clone - JSON Methods
    - Deep copying means the value of new variable is disconnected from original variable
   

Shallow Clone
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
let p1 = {...person };

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));
``` 
## Map
- Maps gives more flexibilty
- it doesn't allow duplicate keys
- Wherever you see iterator, you'll see ordering
- you can't have more than one object as key in object literals
```javascript
const m = new Map(); //create an empty map

console.dir(m); //  you can see the size
                    you have iterator
                    you can use Object as a key
                    doesn't allow duplicates
                    allows order of elements

m.set('name', 'john')
m.get('name'); // gives back john
// allows chaining

m.set('name', 'john').set('age' : 40);

m.has('name') // gives true or false based on existance of a key

for(let[index, value] of m.entries()) {
    console.log(index, value);
}

// adding key as object:
const x = {};
const y = [];
const z = null;

m.set(x, "object inserted").set(y, "array inserted").set(z, "null inserted")


// Converts map to array
console.log([...m])
 ```
## Function declaration v/s function expression v/s anonymous function
###Function Declaration
* Why not to use function declarations
```javascript
function add (a,b) {
    return a+b;
}
```

- Don't use above!!
- Because the functions are hoisted. 
If you do a `console.log(add(1,2))` before the function is even declared, you get the answer.



### Function Expression:
- the function expression is not available before it's declaration;
```javascript
const add = function (x,y) {
    return x+y;
}
```


### Arrow function / Anonymous function
```
const add = (x, y) => {
    return x+y;
}
```

## Callback v/s IIFE
### Callback
- Callback  = Passing function as argument and executing it at some point
- Higher Order Functions = Callbacks = functions that you pass
```javascript
const x = (cb) => {
    console.log('executing x');
    cb();
    console.log('executing x completed');
}

const y = () => {
    console.log('Y is executed');
}

// y can be passed into x
// y is executed inside x. not immediately

x(y);
/*
Returns:
    executing x
    Y is executed
    executing x completed
*/
```

### IIFE 
- IFFE creates local scope or block scope
```javascript
const y = () => {
    ((argument) => {
        var x = 1;
    })("hello");

    console.log(x); // error
}
```

- Window can be used inside
```javascript
const y = () => {
    ((w) => {
       console.log(w);
    })(window);

    console.log(w); // not abailable outside. 
}
```

### prototype

```javascript
const Mammal = function(legs) {
    this.legs = legs;
}

Mammal.prototype.walk = function(){} 
```

- Note:it's better to do above as if you do the below thing again it will override.
```javascript
Mammal.prototype = {
    walk() {
        console.log('walking');
    },
    sleep() {
        console.log('sleeping');
    }
}
```
#### creating a sub-constructor
```javascript
const Bat = function(legs, hasWings) {
    // the call is equivalent to super
    Mammal.call(this, legs); // this sets constructor this.legs here
    this.hasWings = hasWings;
}
```
Inheriting from mammal
```javascript
// Adding all the bat's prototpe here
Bat.prototype = Object.create(Mammal.prototype);
Bat.prototype.fly = function(){
    console.log('flying');
} 

```
Note: Object.create links the reference.

javascript uses composition.

### Inheritance v/s Composition
- Inheritance - You have a parent, mammal
               - You create a sub class bat
               - you need to have strict inheritance where bat inherits all methods.

- Composing = you take two objects and use one's ability to fly and other's ability.

- Mixins = concept of composition
- Even Java has concept of compositions. 
- Classes is inheritance model. We will look at composition after that.


### Class
- Part of ES6
- Internally it creates factory function.It would have a prototype `drive` method
```javascript
class Car {
    constructor(color) {
        this.color = color;
    }
    
    drive() {
        console.log('driving');
    }
}

let redCar = new Car('red');
console.log(redCar); // Car {color: 'red'}


You can add methods even after you create
Car.protoype.stop = function(){
    console.log('stopping');
}
```

#### Inheritance
- Subclass needs to have a constructor
```javascript
class Mammal {
    constructor(_legs, _name) {
    this.legs = _legs;
    this.name = _name;
    }
    
    walk(){
        return `${this.name} is walking with ${this.legs} legs~`;
    }
}
// Note: Super calls mammal's constructor and sets it for bat

class Bat extends Mammal {
    constructor(_legs, _name, _eatsMeat) {
        super(_legs, _name);
        this.eatsMeat = _eatsMeat;
    }
    
    fly(){
        return `${this.name} is flying`;
    }
}

const newBat = new Bat(4, 'john', true);

console.log(newBat.walk()); // john is walking with 4 legs
console.log(newBat.fly()); // john is flying
```
#### Static Method
```javascript
class Car {

    constructor(color, price){
        this.color = color;
        this.price = price;
    }
    
    static comparePrice(car1, car2) {
        return Math.abs(car1.price - car2.price);
    }
}

const redCar = new Car('red', 50);
const greenCar = new Car('green', 20);

Car.comparePrice(redCar, greenCar); // 30
```

#### Compositional Inheritance / Object.assign
```javascript
const toyota = {
    drive() {
        return 'driving toyota';
    }
    
}

const camry = {
    wifi() {
        return 'using wifi';
    }
}

Object.assign(camry, toyota);

console.log(camry); // this will have both methods
```

#### Object.assign
```javascript
const Car = function(color, a, b, c, d) {
    Object.assign(this, {color, a, b, c, d})
}

let FlyingStuff = {
    fly() {
        console.log('flying');
    },
    land() {
        console.log('landing');
    }
}

let HumanStuff = {
    eat() {
        console.log('eating');
    },
    feel() {
        console.log('feeling');
    }
}

class FlyingMan { }


Object.assign(FlyingMan.prototype, FlyingStuff);
Object.assign(FlyingMan.prototype, HumanStuff);

const superMan = new FlyingMan();

console.log(superMan.fly());
console.log(superMan.eat());

const Car = (color) => {
    return Object.assign({}, {
        color: color
    });
}

const redCar = Car('red');
console.log(redCar);

const flyFactory = function(obj){

  let isFlying = false;
  
  return Object.assign({}, obj, {
    fly(){
      isFlying = true;
      return this;
    }, isFlying(){
      return isFlying;
    }
  });

};

const HumanFactory = function(obj){

  let isCrying = false;
  
  return Object.assign({}, obj, {
    cry(){
      isCrying = true;
      return this;
    }, isCrying(){
      return isCrying;
    }
  });

};


const superman = HumanFactory(flyFactory({}));

console.log(superman.fly().cry().is);

```

### Lexical Scope
- Using variables in upper defined scope

```javascript
let i = 1;
const func = () => {
    console.log(i);
}

const add = (a, b) => {
    return a+b;
}

func(); // 1
i=2;
func(); // 2
```
#### pure function
- In the above function add is pure - as it takes arguments and returns elsewhere

#### closure function
- In the above function func() returns 1 because of closure

### Closure
- A variable that is stored inside which is being used from outside scope.
```javascript
 let func;
 
 if (true) {
    let i =1;
    func = () => {
        console.log(i);
    }
    console.dir(func) // inside scopes, in block, it preserves data
 }
 
 console.log(i); // undefined 
 func(); // returns 1
```
 -Note: We used let as we changed value, so we didn't use const.
 - Function holds all its variables inside
 - When javascript scans a function, it figures out data and preserves inside a closure.
 - if you do ```console.dir``` you will see a scopes key where you can see the data.
 #### In interview, if someone asks what's closure
 - JS follows lexical scoping, impure functions can access variables from outside
 - When lexical scoping is not really available to it, it needs to preserve the lexical scoping inside the function
 - The function knows what it's using and preserves it in a closure.
 
```javascript
 const func = () => {
    let i = 1;
    
    return () =>  {
        console.log(i);
    };
 };

 let inner = func(); // func returns innter function.
 inner();  // because of the closure, inner will hold it
```
##### currying
The above example can be run like this
```javascript
func()();

const add = (a) => {
    return (b) => {
        console.log(a+b);
    };
};

add(1)(2);
```

##### challenge question 
- What does the below code return?

```
for (let i=0; i<4; i++){
    setTimeout(()=> {
        console.log(i);
    }, 1000);
};
// Returns 1,2,3,4


for (var i=0; i<4; i++){
    setTimeout(()=> {
        console.log(i);
    }, 1000);
};
// Returns 4
```
Solution:
- The second for loop returns 4
- The first for loop returns 1,2,3,4
- As var is function scope, it is not creating a new variable
- When `let` is used - the following thing happens
```javascript
{
let i = 0;
}
{
let i = 1;
}
{
let i = 2;
}
{
let i = 3;
}
```
When you use var, the following happens
```javascript
{
var i = 0;
}
{
 i = 1;
}
{
 i = 2;
}
{
 i = 3;
}

i= 4
```

## Call, Apply, Bind
### Call
- call is available to functions (call is not available on objects)
```javascript
const add = function(c,d) {
    console.log(this.a + this.b + c + d);
}
const obj = {
    a : 1,
    b : 2,
    add : add
}

obj.add(3, 4); // gives 10

// But a better way to do it is using call
add.call(obj, 3, 4);
```

```javascript
let Mammal = function(legs) {
    this.legs = legs;
}

let Marisupial = function(legs) {
    Mammal.call(this, legs);
}
```
- What is happening here?
- instead of doing `this.legs = legs` inside marisupial, we are using `call` to set this.

- In order for mall to be able to run, because it doesn't have 'this' context. 
- `Mammal.call(this, legs)` sets it
#### call using spread 
```javascript
add.call(obj, ...myArgs); // gives 10
```

### Apply
- Use to apply arguments
```javascript
const add = function(c,d) {
    console.log(this.a + this.b + c + d);
}

const obj = {
    a : 1,
    b : 2
}
const myArgs = [3, 4];

add.apply(obj, myArgs); // gives 10
```
### bind
- Difference between call, apply and bind
- call and apply => takes obj, function and treat them like function is part of the object and you are running it.
- bind => takes the one object and function and combines them and creates a new object.

Eg:
```javascript
const add = function(c, d) {
    console.log(this.a + this.b + c + d);
}

const obj = {
    a : 1,
    b : 2
}

console.dir(add.bind(obj, 3,4)); // in console you can see bound

const boundAdd = add.bind(obj, 3, 4);
boundAdd(); //gives you 10
```


Another Eg:
```javascript
let button = function(content) {
    this.content = content;
}

button.prototype.click = function() {
    console.log(this.content + 'clicked');
}

let newButton = new button('press me');
let myBoundClick = button.click.bind(newButton);
myBoundClick ();
console.dir(myBoundClick);
```

#### Challenge question
- fix this piece of code
```javascript
const module = {
  x: 42,
  getX: function() {
    console.log(this.x);
  }
};

const res = module.getX;
res();
```
- Currently this is returning undefined

```javascript
res.bind(module)();
```



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

- Destructuring 
```
let ctctUiData = {
	headerMessage: "head",
  systemMessage: "system",
}


const { headerMessage: res, systemMessage: resTwo } = ctctUiData;

console.log(res); // head
console.log(resTwo); // system
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


### three dots (...) Spread operator, rest params

```
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
```
