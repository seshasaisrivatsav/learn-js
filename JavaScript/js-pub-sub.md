## JavaScript Publish Subscribe

```
const listOfSubscriptions = [];

// to add to listOfSubscriptions
const addSubscription = fn => {
  listOfSubscriptions.push(fn);
} 

// to call subscribers
const callSubscribers = args => {
  listOfSubscriptions.forEach(fn => {
     fn(args);
  });
}


// Where we need to add subscription, use
addSubscription(someCallback);

// 

```
