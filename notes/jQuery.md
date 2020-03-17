### jQuery

## Select and click
$("[data-qe-id='create-flow-panel-continue-to-editor-btn']").trigger('click')
    
### Trigger
Any event handlers attached with .on() or one of its shortcut methods are triggered when the corresponding event occurs. They can be fired manually, however, with the .trigger() method. A call to .trigger() executes the handlers in the same order they would be if the event were triggered naturally by the user:
```
$( "#foo" ).on( "custom", function( event, param1, param2 ) {
  alert( param1 + "\n" + param2 );
});
$( "#foo").trigger( "custom", [ "Custom", "Event" ] );

```
The event object is always passed as the first parameter to an event handler. An array of arguments can also be passed to the .trigger() call, and these parameters will be passed along to the handler as well following the event object. 
