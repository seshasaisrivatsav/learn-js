
### Image gradient
 "background": "linear-gradient(to right, #ffffffd6, #ffffff61), url('image') right center no-repeat",
                    "background-size": "auto 100%",

## Positioning
```
<div class="apply-border padding-four">
  <div class="parent apply-border">
  Parent
    <div class="child-one">One</div>
    <div class="child-two">Two</div>
    <div class="child-three">Thr</div>
  </div>
</div>
```
### static
- is default 

### relative 
- RELATIVELY positions from parent container
- Acts as static positioning, BUT allows you to change 4 things
- `left`, `right`, `top`, `bottom`
- It takes the element out of the document flow and moves up, down, left or right. 
- It DOES NOT push other elements
- It becomes difficult to style relative positioned as we need to make other elements relative

```
.padding-four: {
  padding: 30px;
}

.apply-border > * {
  border: 1px solid black;
  width: 200px;
}

.child-one {
  position:relative;
  left: 10px;
  top: 10px;
}
```
![image](https://user-images.githubusercontent.com/19309898/98550226-d7a8b380-2269-11eb-8a3e-b8d5c08d4e1e.png)


### absolute
- ABSOLULTE positions from the screen
- Completely removes the element from DOM and everything elese renders as if it didn't exist at all
- Useful when we want to stick something and we don't want other elements to change
- Allows `left`, `right`, `top`, `bottom`
- Anytime you have position other than static ABSOLUTE-ly positioned elements use that as its parent that it's absolutely positioned inside of

![image](https://user-images.githubusercontent.com/19309898/98550178-c495e380-2269-11eb-89b2-de04b1341a62.png)


```
.padding-four: {
  padding: 30px;
}

.apply-border > * {
  border: 1px solid black;
  width: 200px;
}

.child-one {
  position: absolute;
  top: 0px;
}
```

In the below example we can see that the element is absolutely positioned 0px from the top
![image](https://user-images.githubusercontent.com/19309898/98550590-4c7bed80-226a-11eb-86c7-1210fcb789a5.png)


#### Most common use case of absolute
- The most common use case of absolute positioning is to make the parent relatively positioned.
- When you want to absolutely position an element inside a parent, the parent must be relatively positioned.
- Absolute element is relative to the relatively positioned element
- 
![image](https://user-images.githubusercontent.com/19309898/98550983-c57b4500-226a-11eb-86c2-cf938ef6c878.png)

```
.padding-four: {
  padding: 30px;
}

.apply-border > * {
  border: 1px solid black;
  width: 200px;
}

.parent {
  position: relative;
}

.child-one {
  position: relative;
  top: 5px;
}
```

### fixed positioning
- Are always FIXED position based on entire elements
- they stay at same place even if you scroll
- takes `left`, `right`, `top`, `bottom`

