<h1>JavaScript Basics</h1>

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
