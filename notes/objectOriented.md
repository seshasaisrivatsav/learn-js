# Object Oriented Programming in JavaScript

## Method Overriding

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

- In order to make code maintainable, we
