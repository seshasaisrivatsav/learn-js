## Events

- [Source Events MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Bubbling and Capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)

## Event
- events are actions or occurrences that happen in the system you are programming.
- The Event interface represents an event which takes place in the DOM.
- Inside the event handler function, if you set a parameter, say `e` or `event`. it's called event object

### EventTarget
is a DOM interface implemented by objects that can receive events and may have listeners for them.
Element, Document, and Window are the most common event targets, but other objects can be event targets, too. For example XMLHttpRequest, AudioNode, AudioContext, and others.
Many event targets (including elements, documents, and windows) also support setting event handlers via onevent properties and attributes.

Methods on `EventTarget`
1. `addEventListerner()` - Registers an event handler of a specific event type on the `EventTarget`.
2. `removeEventListener()` - Removes an event listener from `EventTarget`
3. `dispatchEvent()` - Dispatches an event to this `EventTarget`

## Event handler = Event Listener
 block of code (usually a JavaScript function that you as a programmer create) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are `registering an event handler`

## Event model
- Events aren't unique to JS
- Each language has it's own way
- Node.js has it's owne vent model
- relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like on() 


#### addEventListener
Many DOM elements can be set up to listen for events. Using
```
EventTarget.addEventListener()
```

The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

#### dispatchEvent
- Dispatches an Event at the specified EventTarget, (synchronously) invoking the affected EventListeners in the appropriate order.
- The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().

```
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { /* ... */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```


## addEventListener() and removeEventListener()

```javascript
const b = document.querySelector('button');

b.addEventListener('click', () => {
  console.log('clicked')
})
```

Removal is useful for complex larger programs
```javascript
btn.removeEventListener('click', bgChange);
```





## Event bubbling and capture
- These are MECHANISMS that describe what happens when two handlers of same event type are activated on one element.
- TODO: Continue here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties


### Bubbling v/s Capturing
- In HTML, we have parent and child.
- The argument to `addEventListener`
 - `false` - Bubbling
 - `true` - Capturing

```html
<p id ="parent">
  Lorem <strong id="child">ipsum</strong> Pipsum
</p>
```

#### Bubbling
We go from child to parent. Inner most element to parent
```javascript
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('parent')
});


child.addEventListener('click', () => {
  console.log('child')
});
```
- Now if we click `child` element, we'll get 'child' and 'parent' (Order matters)
- Clicking on parent, we'll get 'parent'

#### Capturing
- Goes from parent to child. The argument to event listener is `false` by default.
`false` - Bubbling
`true` - Capturing

```javascript
parent.addEventListener('click', () => {
  console.log('parent')
}, true);


child.addEventListener('click', () => {
  console.log('child')
}, true);

```

- Now if we click `child` element, we'll get 'parent' and 'child'
- Clicking on parent, we'll get 'parent'
