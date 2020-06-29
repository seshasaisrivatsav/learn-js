### Use case of `invokeAny`

Depending on the execution time, set the timeout accordingly
```
    @Test
    public void testMe() {
        long EXECUTOR_SERVICE_TIMEOUT = 1001L;


        String success ;
        RandomTask worker = new RandomTask();
        List<RandomTask> workerList = Arrays.asList(worker);
        ExecutorService ex = Executors.newSingleThreadExecutor();
        try {
            ex.invokeAny(workerList, EXECUTOR_SERVICE_TIMEOUT, TimeUnit.MILLISECONDS);
            success = "success";
        } catch (TimeoutException te) {
            success = "timeout";
        } catch (Exception e) {
            if (e.getCause() instanceof TimeoutException) {
                success = "timeout";
            }
            success = "failure";
        }
        System.out.println(success);

    }


    public class RandomTask implements Callable<Boolean> {
        long THREAD_SLEEP_TIME = 1000L;
        @Override
        public Boolean call() {
            try {
                Thread.sleep(THREAD_SLEEP_TIME);
                return true;
            } catch (Exception e) {
                return false;
            }
        }
    }
```

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

newScheduledThreadPool(10)

```

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

### Constructor parameters

`corePoolSize` - (initial) Minimumbase size of pool .Current pool size is slightly different.
`maxPoolSize` = Max size of pool
`keepAliveTime` - Time to keep an idle thread alive. If there are no other tasks, thread pool can kill threads.
`workQueue` - Blocking Queue to store tasks from which threads fetch them
`threadFactory` - The factory to use to create new threads
`handler` - Callback to use when tasks submitted are rejected


| Parameter           | FixedThreadPool | CachedThreadPool | ScheduledTHreadPool  | SingleThreaded  |
|-----------------------------|-----|-------|---|---|
| CorePoolSize          | constructor-arg    |  0     | constructor-arg  | 1  |
| MaxPoolSize            |   same as corePoolSize  |  interger.MAX_VALUE     |  interger.MAX_VALUE | 1  |
| KeepAliveTime|  0 sec    |   60 sec    | 60 sec   |  0 sec |



Note: `allowCoreThreadTimeOut`

### Queue types
FixedThreadPool -> LinkedBlockingQueue (threads are limited, thus unbounded queue to store all tasks)
SingleThreadExecutor -> LinkedBlockingQueue
CachedThreadPool -> Synchronous QUeue (Threads are unbounded, thus no need to store tasks. Synchronous queue is a queue with single slot)
ScheduledTHreadPool -> DelayedWorkQueue (Special queue that deals with schedules/time delays)
Custom -> ArrayBlockingQueue


### Callable
Future get is blocking. Main thread will be in blocking statue. 
Be extra careful with fore loop job submissions. even if subsequent jobs are finished, if the first job isn't done, it'll wait.

```
public class Boop {
  public static void main(String[] args) {
    
      // create pool
      ExecutorService es = Executors.newFixedThreadPool(100);
      // this takes runnable tasks
      es.execute();
      
      // for callable tasks
      // if the task takes long time, we have a future 
      Future<Integer> future = es.submit(new Task());  // placeholder for value that arrives in future
      
      
      // perform some operations and then access future
      Integer result = future.get(); // this is a blocking operation (waits until future is ready)
      
      
      // for 100 tasks
      List<Future> allFutures = new ArrayList<>();
      for (int i =0; i<100; i++) {
         Future<Integer> future = es.submit(new Task());
         allFutures.add(future)
      }
      loop through the futures and do the logic
  }
  
  static class Task implements Callable<Integer> {
    @Override
    public Integer call() {
      return new Random().next();
    }
  }
  
}
```

![Screen Shot 2020-04-13 at 8 59 16 AM](https://user-images.githubusercontent.com/19309898/79125443-35286080-7d6c-11ea-8f91-0c3f7772d472.png)


## SchedulingConfigurer
