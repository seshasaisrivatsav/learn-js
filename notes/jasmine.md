## Jasmine


### createSpy
When there is not a function to spy on, jasmine.createSpy can create a "bare" spy. This spy acts as any other spy - tracking calls, arguments, etc. But there is no implementation behind it. Spies are JavaScript objects and can be used as such.
```
 whatAmI = jasmine.createSpy('whatAmI');
 whatAmI("I", "am", "a", "spy");
 
 
  it("tracks that the spy was called", function() {
    expect(whatAmI).toHaveBeenCalled();
  });

  it("tracks its number of calls", function() {
    expect(whatAmI.calls.count()).toEqual(1);
  });

  it("tracks all the arguments of its calls", function() {
    expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
  });

  it("allows access to the most recent call", function() {
    expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
  });
  
```

### createSpyObj
In order to create a mock with multiple spies, use jasmine.createSpyObj and pass an array of strings. It returns an object that has a property for each string that is a spy

```
 beforeEach(function() {
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });
  
    it("tracks that the spies were called", function() {
    expect(tape.play).toHaveBeenCalled();
    expect(tape.pause).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalled();
    expect(tape.stop).not.toHaveBeenCalled();
  });
  
```
### and.callFake

By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied function.
```
jasmine.createSpy("spyName").and.callFake(function() { return "something"; } ) 
```
### return value
```
spyOn(something, "something").and.returnValue()
```
When called with, then return value

### Testing `$q.defer()` and `$q.all`

```
var $qMock;
var mockDefer = function () {
 var value;
 return {
  resolve: function (arg) { value = arg }
  promise: { then: function (fn) { fn(value) } } 
  reject: { then: function (fn) { fn(value) } } 
 }
}

mockAll = function () {
 return {
  then: function(fn) { fn(); } 
 }
}
$qMock = { defer: mockDefer, all: mockAll }  
```
In the tests, inject your own $q to module
```
module({ 
 $q: $qMock
})
```



