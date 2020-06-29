# Object Oriented Programming in JavaScript

## Some Basics

### Function Expression v/s Function Declaration
- FE - Hoisted and you can execute them before you declare
```js
function sayHello() {} 
```
- FD - Can't be executed before they are declared
```js
const sayGoodbye  = function() {};
```

### Method Call v/s Function Call
```js
// Method call v/s Function call
//============================

const c = new Circle(); // creates a new empty object and sets this to point to that object
c.draw(); // Returns Circle object (btw, this is a method call)


let x = c.draw;
x(); // Returns WindowObject (btw, this is called function call)

```

### Strict mode
Strict mode = JS will be more sensitive and turns things into exceptions. And changes 'this' behavior in functions
If you add 'use strict'; to this file
```
 x(); // returns undefined
```

This prevents from accidentally modifying global objects.

### Class Expression v/s Class Declaration
- Neither CE or CD are hoisted. No one uses class declaration.

### Instance method v/s Static method
- Static methods are used to create utility functions and are not tied to something. Eg: `Math.max`
```js

class StaticAndInstance {
    constructor (classVar) {
        this.classVar = classVar;
    }

    // Instance method 
    draw () {}

    // Static method
    static parse(str) {
        return new StaticAndInstance("1");
    }
}

StaticAndInstance.parse("asa"); 
```

### Private properties and methods (weakmaps)
- Every symbol refers to a unique thing
```js
const _radius = Symbol();
const _draw = Symbol();
class PrivatePropertyTest {
    constructor(radius) {
        this[_radius] = radius; // private property
    }

    // private method
    [_draw]() {

    }
}
const port = new PrivatePropertyTest(124);
```

#### Private members using weak maps
Weak map is a dictionary with key - value

```js
const _radius = new WeakMap(); 
const _move = new WeakMap();
class PrivatePropertyTest1 {
    constructor(radius) {
        _radius.set(this, radius);

        _move.set(this, () => {
            console.log('move', this);
        })
    }

    // private method
    draw() {
        _radius.get(this);
        _move.get(this)()
    }
}
const port = new PrivatePropertyTest(124);

```

### Ways of defining things
1. Factory Function (returns an object)
2. Constructor Function (this + new)
3. Constant way of defining something

### 1. Factory way 
```js
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('draw a circle with radius = '+ radius);
        }
    }
}
```

### 2. Constructor way
```js
function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw a circle with radius = '+ this.radius);
    }
}

const circleConstructor = new Circle(2);
```
#### How call and apply are used 
The above circleConstructor is internally a call with empty obj for this `Circle.call({}, 2);`

this will refer to '{}'

If we don't use `new` this in Circle method refers to global this
```js
const bleh = Circle(2);
Circle.apply({}, [2]);
```

#### How JS internally creates 
`let x = {};`  Internally JS will do -> let x = new Object();


### 3. Constant way 
```js
const circleObject = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};
```

### Value types and reference types
#### Value types
1. Number
2. String
3. Boolean
4. Symbol
5. undefined
6. null

#### Reference Types
1. Object
2. Function
3. Array

### Primitives v/s Objects
PRIMITIVES ARE COPIED BY THEIR VALUE where as OBJECTS ARE COPIED BY THEIR REFERENCE.
```js
let x1 = 10;
let y = x1;
x1 = 20;
// Here y is still 10 as it's copied


let x2 = {value: 10};
let y2 = x2; // Here the address/reference is copied
x2.value = 20;
// Here y2 is 20 as object's location is stored in memory and is referenced

```

#### Keys
To obtain properties of an object
```js
const properties = Object.keys(circleConstructor);
```

### Scope V/S Closure
```js

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0 , y:0};
    let computeOptimumLocation = function (factor) {
        // some logic
    }
    this.draw = function() {
        let x,y;
        computeOptimumLocation(0.1);
        console.log('drawing');
    }
}

```
- In the above example, draw function will have access to its parents' defaultLocaiton and computeOptimum location variables, everytime its called.
- Scope is temporary/limited to the function
- Closure is permanent (determines what variables are accessible to function)
- The two variables are part of closure and will be in memory.
- The closure of the function includes the variables defined in its parents' scope.

## Defining getter and setter (Regular and ES6)
### DefineProperty and defineProperties
```js

function Riddikulous(sampleVar) {
    this.sampleVar = sampleVar;

    let customVar = {x:this.sampleVar + 2};
    
    Object.defineProperty(this, 'getCustomVar', {
        get: function() {
            return customVar.x;
        },
        set: function(value) {
            customVar = value;
        }
    })
}

const riddikulous = new Riddikulous(11);
```

### ES6 getters and setters
```js
const _radius = new WeakMap();
class PrivatePropertyTest2 {
    constructor(radius) {
    	_radius.set(this, radius);
    }
   
   get radius() {
   	return _radius.get(this);
   }
   
   set radius(radius) {
   	if (radius <=0) throw new Error ('invalid radius');
    _radius.set(this, radius);
   }
}
const port = new PrivatePropertyTest2(124);
console.log(port.radius); // get
port.radius = 123; //set
console.log(port.radius); // get

```

### Prototype v/s Instance members

```js

function Crazers (radius) {
    // Instance members
    this.radius = radius;

    // Example for a prototype member
    // this.draw = function() {
    //     console.log('draw');
    // }
} 

const crazers1 = new Crazers(11);
const crazers2 = new Crazers(22);

// This creates multiple copies of draw (and waste memory)
// We can remove draw and keep it in prototpe

Crazers.prototype.draw = function() {
    console.log('draw');
}
Crazers.prototype.toString = function() {
    console.log(this.radius + " modified toString");
}
// console.log(crazers1.toString())

```

Iterating over instance and prototype members
- Object.keys -> returns instance members
```js
Object.keys(crazers1); // returns radius -> only instance members
```

- for in loop -> returns instance prototype members
```js
for (let key in crazers1) { /*console.log(key);*/} // radius, draw, toString
crazers1.hasOwnProperty('radius'); // true
crazers1.hasOwnProperty('draw'); // false
```
### Mixins 
```js
const canEat = {
    eat: () => {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk = () => {
        console.log('walking');
    }
}

// To copy properties
//const person = Object.assign({}, canEat, canWalk);

// Making changes to person prototype
Object.assign(Person.prototype, canEat, canWalk);

function mixin(target, ...sources) {
// the three ... means, all the other props will come in an array
Object.assign(target, ...sources);
}
```

## Inheritance
Inheritance has
1. Base class=Super=Parent
2. Derived/Subclass

Important interview question
1. Classic Inhertiance
2. Prototypical Inheritance (JS will keep looking at it's prototype when we look for a property or method)

Prorotype = Parent of something.
Every object has a prototype except the base object ``` Object.getPrototypeOf(anyObject)```

```js
class Parent {
    constructor(color) {
        this.color = color;
    }
    move () {
        console.log('move');
    }
}

class ChildA extends Parent {
    constructor(color) {
        super(color);
    }
    draw() {
        console.log('draw');
    }
}

const yyuu = new ChildA('red'); // returns type ChildA, no need to reset constructor
// yyuu.color = 'red'
```

### Multilevel Inheritance
Lookup 
```js
let newArray = [];
Object.getPrototypeOf(newArray);

let circle11 = new Circle(2);
let circle12 = new Circle(22);
Object.getPrototypeOf(circle11);
Object.getPrototypeOf(circle12);
// Both circles will have same prototype as they're created by same constructor

let person = { name: 'srivatsav' }
let objectBase = Object.getPrototypeOf(person);
let propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(propertyDescriptor); // value: ƒ, writable: true, enumerable: false, configurable: true, writable: true}
// Configurable = true | We can delete this memeber if you want to 
// enumerable = false | it's not listed in keys
```

#### Writable, enumerable, configurable

```js
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
person.name = 'poop'; // this won't set as it's not writable
Object.keys(person); // returns empty array as this won't list name as it's not enumerable
delete person.name; // this won't delete the property
// All properties are wriable, enumerable, configurable
```




## Method Overriding
```js
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
    Shape.prototype.draw = () => {
        console.log('draw');
    }

    Shape.prototype.duplicateShape = () => {
        console.log('duplicated');
    }
}

function Circle(radius) {
    this.radius = radius;

    Circle.prototype.circleMethod = () => {
        console.log('circle method');
    }
}


extend(Shape, Circle);
/*
    Ask: DuplicateShape method must behave differently. We need to override it.
*/
// should be done after extending
Circle.prototype.duplicateShape = () => {
    console.log('duplicated circle');
}
// Here the implementation on child is used.

// Ask: how to use the one on parent?
Circle.prototype.duplicateShape = () => {
    Shape.prototype.duplicateShape.call(this)
    console.log('duplicated circle');
}
```

```js
class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends {
    move() {
        console.log('circle move');
    }
}

const c = new Cirlce();
c.move();
/*
Implementation in child object is used
*/

```

### Super

- To use the parent's method, super keyword is used

```js
class Circle extends {
    move() {
        super.move();
        console.log('circle move');
    }
}

const c = new Cirlce();
c.move();
/*
Implementation in parent object is used
*/

```

## Weak Map / Using private variables and methods

- WeakMap is dictionary with Key, Value (Obj, Anything)
- Keys are weak
- WeakMap can be used to set private variables and methods

```js
const _radius = new WeakMap(); // Private Var
const _move = new WeakMap(); // Private Method
class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // NOTE: We only have to use arrow function as they use 'this' value of containing function
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    _move_.get(this)();
  }

  getrad() {
    return _radius.get(this);
  }
}

const c = new Cirlce();
c; // It is a circle object and it doesn't have radius on it
```

## Using getters and setters

Insread of doing `c.getRadius()`, if we want to access it as a class variable, `c.radius` we need to use getters and setters.

```js
const _radius = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        /* without ES6, this would be the way
        Object.defineProperty(this, 'radius', {
            get: function () {

            }
        })
        */

    }

    get radius() {
        return _radius.get(this);
    }

    set radius() {
        if (val ===0) throw new Error ('invalid radius');
        _radius.set(this, value);
    }


}
```

## Modules

- In order to make code maintainable, we need modules
- ES5 didn't have modules

Module Types

- AMD - for browser
- commonJs - Node.js
- ES6 Modules - browser

### CommonJS Format

Exporing a module

```js
module.exports.ClassName = ExportName;
```

or

```js
module.exports = ClassName;
```

Using it in another

```js
const className = require("./ClassName");
```

### ES6 Format

In this file export class

```js
export class Bleh {}
```

Using it in script.js

```js
import { Bleh } from "./Bleh.js";
```

In HTML

```html
<script type="module" src="script.js" />
```

## ES6 Tooling
- For Tooling, we need
    - Transpiler = Translator + Compiler (Converts JS to browser understandable code) EG: Babel
    - Bundler = Combines all JS files into single js file, called bundle. Eg: Webpack
- Webpack 

### Babel
- To test this, you need node (npm)
- npm install babel cli, babel-core, babel-present-env
- https://codewithmosh.com/courses/310571/lectures/4881476

### Webpack
`npm i -g webpack-cli`
To generate cli
`webpack-cli init`

- Single multiple - No
- dist files
- ES2015 = Yes (it automatically does bale)

Certificate - https://codewithmosh.com/courses/310571/certificate
