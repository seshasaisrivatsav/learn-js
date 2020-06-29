## Events

Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events


## Event
events are actions or occurrences that happen in the system you are programming 


## Event handler = Event Listener
 block of code (usually a JavaScript function that you as a programmer create) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are `registering an event handler`

## Event model
- Events aren't unique to JS
- Each language has it's own way
- Node.js has it's owne vent model
- relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like on() 

## addEventListener() and removeEventListener()

```
const b = document.querySelector('button');

b.addEventListener('click', () => {
	console.log('clicked')
})
```

Removal is useful for complex larger programs
```
btn.removeEventListener('click', bgChange);
```

## Event 
- Inside the vent handler function, if you set a parameter, say `e` or `event`. it's called event object




## Event bubbling and capture
- These are MECHANISMS that describe what happens when two handlers of same event type areactivated on one element.

TODO: Continue here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties
