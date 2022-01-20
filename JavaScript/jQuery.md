### jQuery

## Creating custom elements
```javascript
    		var footer = jQuery("<footer/>").addClass("Dialog-footer");
		
                var actionsDiv = jQuery("<div/>")
                    .addClass("Dialog-actions")
                    .attr("data-qe-id", $ctrl.tileInfo.name + "-tutorial-dialog-actions");


                $ctrl.button = jQuery("<a/>")
                    .addClass("Button Button--primary")
                    .attr("data-qe-id", $ctrl.tileInfo.name + "-tutorial-dialog-primaryAction")
                    .attr("type", "button")
                    .attr("ng-click", "$ctrl.navigateToCallToActionLink()")
                    .text($ctrl.callToAction);

                actionsDiv.append($ctrl.button);
                footer.append(actionsDiv);
              // jQuery(".Dialog.is-open").children(".Dialog-inner").append(footer);

```

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

## mouseover
```javascript
$().mouseover(); // when mouse moves over something
$().mouseover(function() {})
$().mouseout(function() {});

```

## hover
```javascript
hover(fn(){}, function(){}); // What hapens when mouse goes
```
## doubleclick
```javascript
$().dblclick(fn(){})

## on
Pass the events 

```javascript
function showWhatTouched(e) {
	alert(e.data.message);
}

var bsMsg = { message : “asdas}
on(“mouseover/track/scroll”. Blah, function)
```

```

## Form events
Blur => takes a function
Change 
Focus
Select

