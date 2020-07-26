# Web

Web APIs - https://developer.mozilla.org/en-US/docs/Web/API


## DOM (Document Object Model
DOM is an API that represents and interacts with any HTML or XML document
DOM is document model loaded in browser and representing document as a node tree where each node represents part of the document (eg: Element, text or comment)
more - https://developer.mozilla.org/en-US/docs/Glossary/DOM


## Flow

`EventTarget` <- `Node` <- `Element` <- `HtmlElement`
`EventTarget` <- `Node` <- `Document`

- Event Target = EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them.
- Node = is a key base class upon which many other DOM API objects are based, thus letting those object types to be used similarly and often interchangeably
- Element = Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements
- Document = The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. The DOM tree includes elements such as <body> and <table>, among many others.

## MessageEvent
- This is an interface that represents a message received by a target object
https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent


## Window

### Window.opener
The Window interface's opener property returns a reference to the window that opened the window using open().
In other words, if window A opens window B, B.opener returns A.

### Window.postMessage()
- postMessage method safely enables corss-origin communication between `Window` objects. EG: between a page and a pop up it spawned
- Can also be used for communication between a page and iframe
- One window may obtain a reference to another window by
` targetWindow = window.opener`
- And then dispatch a `MessageEvent` on it with `targetWindow.postMessage()`


If window A opens a window B, then window B can obtain reference to window A by doing Awindowrefernce = B.windopw.opener
and with the reference Awindow.reference.postMessage.
The argumment passed to postMessage must be of type `Event`
And window A must have an event listener


## document referrer

## History API
