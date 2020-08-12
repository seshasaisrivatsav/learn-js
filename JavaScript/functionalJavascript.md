## Functional JavaScript

- This is a paradigm
- Style of coding which is less confusing
- Avoids issues with `bug`
- Other styles are imperative



### Functional thinking 
- Think about input and output
- Pure Function: Function must do only one thing. Take input, give output. 
```
function test() {
  return 'here';
}
```
- Impure Function:
```
function test() {
  console.log('here');
}
```
- Use Higher Order Functions: Functions that take function as input and can output 

#### HOF
Here `makeAdjectifier` is a Higher Order Function, as this returns a function
```
function makeAdjectifier(adjective) {
    return function (string) {
        return adjective + " " + string;
    };
};

var coolifier = makeAdjectifier("cool")
coolifier("ice"); // outputs: cool ice
```

### Don't iterate - Use `map`, `reduce` and `filter`
- `map`, `reduce`, `filter` take input and a function to 

### Avoid mutations

Mutation Example:
```
var rooms = ["r1", "r2", "r3"];
rooms[2] = "r4";
rooms; // ["r1", "r2", "r4"];
```

No Mutation:
```
var rooms = ["r1", "r2", "r3"];
var newRooms = rooms.map(function(rm) {
  if(rm="r3") {return "r4";} 
  else {return rm;}
});
rooms; // ["r1", "r2", "r3"];
newRooms; // ["r1", "r2", "r4"];
```



### Persistent data structures for effecient immutability

