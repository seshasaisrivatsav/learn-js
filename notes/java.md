## Java

### Callable


### Stream
- Moving towards functional
- Moves from imperative
- Imperative approach v/s Declarative approach
  Imperative: write everything we do
  Declarative: We have few methods in streams api like `Filter`, `Sort`, `All match`, `Any match`, `none match`, `min`, `max`, `group`
  
- Advantages of stream:
 Few lines
 Use of lambda expressions
 Parallelstreams make it easy to multi thread
 
- A stream consists of `Source`, followed by 0 or more `intermediate` operations and a `terminal` operation 

Ex:
- source -> Filter -> Sort -> Map -> Collect/Reduce 

Stream Source: Collections, Lists, Sets, ints, longs
Stream operations: 
 - Intermediate - filter, map, sort , find first, skip, sorted, flatmap -> Returns stream 
 - Terminal - forEach, collect, reduce -> Return non stream result
collect - collects elements into collection
reduce - summary element

For large data set, filter first before doing sort or map.
For very large data set, use parallel stream to enable multiple threads

#### Example 1
range(1,10) - gives 1 to 9, 10 not included
```
IntStream.range(1,10).forEach(System.out::print);
```
#### Exampe 2: print 6 through 9 (Hint: use `skip`)
```
IntStream
  .range(1,10)
  .skip(5)
  .forEach(x -> System.out.println(x))
```
#### Example 3: Add numbers 1,5
```
IntStream
  .range(1,5)
  .sum()
```

#### Example 4: Sort and find first
sorted can take its own comparator
```
Stream.of("c","d", "e", "f")
  .sorted()
  .findFirst()
  .ifPresent(System.out::println)
```


#### Example 5: Array find sort, filter only if starts with "S"
```
String[] names = [];
Arrays.stream(names)
  .filter(x -> x.startsWith("S")
  .sorted()
  .forEach(System.out.println)

```

#### Example 6: 

### How to use `stream`, `map` and `collect`?
`.collect(Collectors.toList()) ` to output as a list
### Explain `Collectors`

### How to write equals method? (by overriding)

### Multithreading
#### Creating a thread 
```
Thread t1 = new Thread()
```
Every thread needs a `run` method
```
class MyClass  extends Thread
```
#### Standard (by extending `Thread` Class)
`extend Thread`
Override `run` method
`.start()` -> this triggers run method

```
class Hi extends Thread {
  public void run () {
    // logic to print hi 5 times
  }
}
class Hello extends Thread {
  public void run () {
    // logic to print hello 5 times
  }
}

public class ThreadDemo {
  mainMethod {
    Hi obj1 = new Hi();
    Hello obj2 = new Hello();
    
    obj1.start();
    obj2.start();
    
  }
}
```
#### Using implementing Runnable Interface
When your class already extends another class, use `Runnable`
Runnable has `run` method, works same way as above
`runnable` interface just has `run` method. It can be functional

```
class Hi implements Runnable {
  public void run() { }

}
class Hello extends Thread {
  public void run () {
    // logic to print hello 5 times
  }
}

public class ThreadDemo {
  mainMethod {
    Runnable obj1 = new Hi();
    Runnable obj2 = new Hello();
    
   Thread t1 = new Thread(obj1);
   Thread t2 = new Thread(obj2);
   t1.start();
   t2.start();
    
  }
}

```

### Override vs Overload
 Overriding indicates that the subclass is replacing inherited behavior. Overloading is when a subclass is adding new behavior.

#### Using Lambda Expression
- The logic of `Hi` and `Hello`, you can put it in `Runnable`
```

public class ThreadDemo {
  mainMethod {
    Runnable obj1 = new Runnable() 
    {
    public void run() { }
    };

    // Other way of writing it
    Runnable obj2 = () -> { // logic inside run method  } 
    
    
   Thread t1 = new Thread(obj1);
   Thread t2 = new Thread(obj2);
   Thread t3 = (() -> {//logic inside run});
   t1.start();
   t2.start();
   t2.start();
    
  }
}
```

#### Sleep, wait, notify
```Thread.sleep(milliseconds)```


### DTO v/s DAO
DTO - Data Transfer Object
  - Transfer data between classes and modules of application
  - DTO should only have private fields for your data, getters, setters and constructors
  - Not recommended to have business logic. 
  - Okay to have utils
DAO - Data Access Object
  - Encapsulate logic for retrieving, saving and updating data in storage
