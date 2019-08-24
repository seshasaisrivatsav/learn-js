# Problems

## 1. Implement a stack dataStructure using ES6 functions

- A stack has two functions peek, push, pop, count
- pop, peep on empty stack should throw exception

```js
const stack = new Stack();
```

`Solution:`
Implementing using JS Array

```js
const _items = new WeakMap();
class Stack {
  constructor() {
    //make this array private
    _items.set(this, []);
  }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) {
      throw new Error("Stack is empty");
    }
    return items.pop(); // array's pop method
  }

  peek() {
    const items = _items.get(this);
    if (items.length === 0) {
      throw new Error("Stack is empty");
    }
    return items[items.length - 1];
  }

  // since this is read only make it gettter
  get count() {
    return _items.get(this).length;
  }

  push(obj) {
    _items.get(this).push(obj); // array push adds at end of array
  }
}
```
