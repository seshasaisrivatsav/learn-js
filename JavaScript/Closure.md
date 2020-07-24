### Closure

- Closure is nothing but function with preserved data
- Combination of a function bundled with references to surrounding state (that is the lexical environment)
- CLOSURES ARE CREATED EVERYTIME A FUNCTION IS CREATED I.E., AT FUNCTION CREATION TIME

#### Examples

Resource:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

1.
```
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

here if you do
```
console.dir(myFunc)
```
you shall see { name  : 'Mozilla' } inside the scope as closure

2.
```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
```

Here 
```
var add5 = makeAdder(5);
console.dir(add5); // has x:5 in closure
add5(2); // 7 answer
```
