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

## Scope
Scope is the binding part between HTML and the JavaScript (Controller)
### Scope v/s rootScope 
- Scope = controller specific
- rootscope - global

## $rootScope.$digest , $scope.$apply()
https://www.sitepoint.com/understanding-angulars-apply-digest/
- It's the digest cycle where watchers are dired
- When a watcher is fired, angularJS evaluates the `scope` model and if it's changed, the corresponding lisener is called
- The $digest cycle starts as a result of a call to $scope.$digest()
- OR whena scope model is changed, even then angular automatically triggers the $digest cycle
  Eg: a scope model is changed by ng-click directive, then angular triggers $digest cycle
- BUT there are several other built-in directives or services  that can change models like `ng-model`, `$timeout` where angular calls `$scope.apply()` which in turn calls `$rootScope.$digest()`. So as a result digest cucle starts at `$rootScipe` and subsequently visits all child scopes calling watchers along the way
- `$scope.$apply()` automatically calls `$rootScope.$digest()`.
