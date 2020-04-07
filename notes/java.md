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
