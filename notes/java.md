## Java

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



### ExecutorService 
Video https://www.youtube.com/watch?v=sIkG0X4fqs4

- Automatically provides a pool of threads and API for assigning tasks to it
- ExecutorService can execute Runnable and Callable tasks.
- in Java let's say we have a thread that has few operations
- An operation can pass a `Task` to `ExecutorService`. The thread will continue its own sequence of operations and the `ExecutorService` will continue with its.
- ` java.util.concurrent` has two implementation `ThreadPoolExecutor` and `ScheduleThreadPoolExecutor`
#### ThreadPools / Factory Methods
1. `FixedThreadPool`
- ```newFixedThreadPool(10)``` -> Creates ExecutorService containing containing fixed number of threads. Each task processed by each thread.
- Below `Task` class implements `Runnable` and has a `run` method
- Has fixed number of threads, we keep sending tasks to it, all the tasks are stored in queue (which is thread safe) and hence it's a blocking queue
```
ExecutorService service = Executors.newFixedThreadPool(10);
for (int i=0;i<100;i++) {
  service.execute(new Task();
} 
```

2. `CachedThreadPool`
- no queue
- no fixed amt of threads
- Queue is replaced by synchronous queue (can hold only 1 task). It'll look for free threads. If no threads available it'll create new thread. Has ability to kill idle threads.
```
ExecutorService service = Executors.newCachedThreadPool();
for (int i=0;i<100;i++) {
  service.execute(new Task();
} 
```

3. `ScheduledThreadPool`
- Specifically for tasks you want scheduled after a `delay`
- Eg; To check something for every 10 seconds
- Here the tasks are stored in `Delay Queue`. The tasks may not be sequential. Tasks will be queued based on delay.

 a. `Service.schedule`
 b. `scheduleAtFixedRate` (run the task at fixed rate)
 c. `scheduledWithFixedDelay` (run the task at fixed delay. COmpletes the task, waits and then schedules

In the below example
```
ExecutorService service = Executors.newScheduledThreadPool(10); // for scheduling of tasks

// For task to run after 10 second delay
service.schedule(new Task(), 10, SECONDS); 

// For a task to be run every 10 seconds. First time it'll wait for 15 seconds
service.scheduleAtFixedRate(new Task(), 15, 10, SECONDS); 

// Waits for 15 seconds, wait for task to complete, then wait for 10 seconds
service.scheduleWithFixedDelay(new Task(), 15, 10, SECONDS)
```


```newScheduledThreadPool(10)```
4. `SingleThreadExectutor`
 ```newSingleThreadExecutor()``` -> all tasks passed to this Executor will be worked on by single thread. If a new task is passed to this before first task is finished, it will be queued up.
 
- Size is 1
- Sequential
- Used when task 1 is always run before task 2

#### Methods for Passing tasks for execution
1. `execute` (runnable) -> Takes runnable instance (with run method) as argument. It'll  execute this when it has capacity
```
ExecutorService es = Executors.newSingleThreadExecutor();
es.execute(new Runnable() { oublic void run() {} } );
es.shutdown();
```
2. `submit` (runnable) 
quess task internally and gives future object
Can't return anything inside run()
```
ExecutorService es = Executors.newSingleThreadExecutor();
Future future = es.submit(new Runnable() { oublic void run() {} } );
future.get(); // returns null if the task finished correctly
es.shutdown();
```

3. `submit` (callable)
You can return something inside call

```
ExecutorService es = Executors.newSingleThreadExecutor();
Future future = es.submit(new Callable() { oublic Object call() {} } );
future.get(); // behaes differently where we can get returned
es.shutdown();
```

`invokeAny` and `invokeAll` used for bulk execution, executing collection of tasks and then waiting for at least one or all to complete
4. `invokeAny` (...)
Executes the given tasks, returning the result of one that has completed successfully (i.e., without throwing an exception), if any do before the given timeout elapses.

5. `invokeAll` (...)

`
#### Usage
Pass a runnable implementation to executor. 
```
ExecutorService executorService = ExecutorService.newFixedThreadPool(10);
executorService.execute(new Runnable() { public oid run() { } })
executorService.shutdown()
```

#### Notes
- Pool = Collection of threads
- We can have any number of tasks, but these threads are constant, keep working on them tasks

##### CPU Intensive tasks, be careful with coreCount / threads
- If CPU has 4 cores we can have maximum 4 threads running at a time. No matter how many threads, it'll do time split scheduling. Ideally, thread size = Number of cores
- to get number of cores
```
int coreCount = Runtime.getRuntime().availableProcessors()
ExecutorService ser = Executors.newFixedThreadPool(coreCount);

for (int i = 0 ; i < 10; i++) {
  ser.execute(new SomeTask that implements runnable)
}
```
##### IO intensive tasks (for http requests etc)
- Once those requests are made to DB as there is timing involved, you can increase thread size as just using few threads will run longer)
- Size of pool can be increased (as most threads can be in waiting state)
```
ExecutorService ser = Executors.newFixedThreadPool(100);
```

### DTO v/s DAO
DTO - Data Transfer Object
  - Transfer data between classes and modules of application
  - DTO should only have private fields for your data, getters, setters and constructors
  - Not recommended to have business logic. 
  - Okay to have utils
DAO - Data Access Object
  - Encapsulate logic for retrieving, saving and updating data in storage
