# Angular Notes


## $q
`$q` is aconstructor that takes a resolver function as first argument and returns promise

To handle promise, need to use `then`
Example:
```
function testQ() {
  return $q({
    if(something) { resolve('bleh) }
    else reject('popp')
  })
}

var promiseTest = testQ();
promiseTest.then(successCallBack, failureCallBack);

```

## $q.defer()
New instance of deferred is created by `$q.defer()`
- This is used to expose associated Promise instance as well as APIs that can be used for signaling succesful/unsucessful completion
Methods
- resolve
- reject
- notify
Can you
