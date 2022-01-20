# Angular Notes

## TODO
- Understand angular Digest cycle
- Bindings - https://medium.com/front-end-hacking/angularjs-component-binding-types-my-experiences-10f354d4660
- Injector - https://docs.angularjs.org/api/auto/service/$injector
- Create an angularJS app with 3 components, pass data from component 1 to 3 using bindings
    - Component 1 
      - Component 2
        - Component 3
- Look at $sce


## Depndency Injection
- You can convert a function to a string in java string. You can make a decision on what to do. Angular does exactly the same thing. 
- Angular is an object. It has injector with method annotate
### injector
```javascript
var searchPeople = function($scope, lastName, height, age, occupation) {
	return 'Jane Doe';
}
console.log(angular.injector().annotate(searchPeople)); // Gives the arguments in an array 

var myApp = angular.module('myApp, []);
myApp.controller('mainController', function($scope) {
console.log($scope);
});

```
- Here $scope is being injected. It makes code verifiable
- Number of watchers is inversely proportional to performance

## Bindings
- Component bindings = and < is evaluated in parent scope. 

| Binding  | Explanation |
| ------------- | ------------- |
| <  | One way binding. Dynamic Expressions  |
| &  | Event/Method  |
| &?  | ? means optional  |
| @  | String  |
| =  | two way. If value is changed, go to parent  |
| ::  | Evaluate Once  |


- #### ng-switch
NOTE: ng-switch maintains order on arrays, probably not on objects

### & Event/Method Binding
- To pass a callback function
- In parent controller
```javascript
$ctrl.someMethong = function someMethond() {}
```
- In Parent Template
```html
<child-component some-method="$ctrl.someMethong()"></child-component>
```

- Child Controller

```javascript
bindings: {
	someMethod : "&"
}

$ctrl.someMethod()
```

## Directive, Component and Module
- Component - Control views (HTML), which communicates with other components and services
- Modules - Contain one or more components. Doesn’t control view
- Directives - Markers on DOM element (attribute, element name, comment or CSS) that tell angular HTML compiler to attach the specified behaviour to DOM (Eg via event listeners) 
	Eg: ngBind, ngModel, ngClass, ngClick `<input ng-model="">`

## template cache
https://docs.angularjs.org/api/ng/service/$templateCache

## Jasmine Testing
Given a module like

```javascript
(function Component(angular) {
	"use strict";
	angular.module("modulename").component("componentName", {
		templateUrl: ""
		controller: [ "dependency", function controller(dependency) {
		} ]
	});
})(window.angular)
```

The test must be like
```javascript
(function testSpec(module, inject) {
	describe(“ “, function() {
		module(“modulename”);
		module({ dependency: this.fakeDependency });
		inject(function ($rootScope, $compile) {
			$scope = $rootScope.$new();
			Render = function
   }
 })
})(window.angular, window.inject)

```
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
