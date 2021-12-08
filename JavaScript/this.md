# This

## Scope / Execution context
- the scope in which a line is being executed
- JS has stack of execution contexts and the EXs present at top of this stack is the one being executed
- the object `this` refers to changes every time EC is changed.

### this by default refers to Global Object
Returns true
```aidl
window == this
```

### In an IIFE, `this` is undefined
```
(function testIIFE () {
 'use strict';
  if (this === window ) { console.log('true') } else { console.log('false')}
 })()
```

### In a class
this refers to newly created instance
```aidl
class Computer {
	constructor () {
   	    this.board= 'intel';
	    this.gpu = 'nvidia';
    } 
}

let c = new Computer();
console.log(c.board); // intel
```

### In a constructor way
this refers to newly created instance
```aidl
function Computer() {
   	this.board= 'intel';
	 	this.gpu = 'nvidia';
  }

let c = new Computer();
console.log(c)
```

Note: if we don't use new, `this` refers to global