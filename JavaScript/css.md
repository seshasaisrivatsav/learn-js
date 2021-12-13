
## Display v/s Position v/s Float
### Display 
    - When you create an element to display on page, it renders as a box and we see how to position.
    - Display specifies type of rendering box
    - Types
      1. Block - Take entire width `div, p, h1, ul, li, canvas`
      2. Inline - Can start any where on a line `span, input, button, img`
      3. Grid - Block level element with inner content in grid
      4. Flex - Block level element with inner content in flexbox
      5. Inline-block - Inline but height and width can be specified. Can be used with Grid, Flex, Table as they're block
      6. None - Removes element
```html
<p> line 1 - block element</p>
<h1> line 1 - block element</h1>

<span>same line</span><input type="text" placeholder='same line' />
```
### Position 
- Determines in what manner item is positioned on a page relative to another
- Types
  1. Static - Default position is static. Follows order. top, right, bottom, left, z-index can't be used. can't be stacked due to z index.
  2. Relative - Offsettable with top, right, bottom, left, z-index 
  3. Absolute - Element positioned relative to its first non-static ancestor is called Absolute. top, right, bottom, left, z-index can be used
  4. Fixed - Relative to browser
  5. Sticky 
  
### Float
- Setting this property to left or right, floats an element to container, wraps the rest of the content around it.
- Defaults to none
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


## Child and Sibling Selectors
[Ref](https://css-tricks.com/child-and-sibling-selectors/)

###  " " Descendant Selector
- Denoted by space - combines 2 selectors such that elements matched by 2nd selector are selected if they have an acestor element matching first selector
```
ul li { margin: 0 0 5px 0; }

```
- Selects any list items that are anywhere underneath an unordered list. Item can be nested however.
- It works multiple level deeper.


### ">" Child Combinator Selector
```
ul > li { margin: 0 0 5px 0; }

```
- Unlike descendant selector, child selector only selects list items that are direct children of un ordered list.
- TLDR: It only works one level deeper

### "+"  (Adjacent Sibling Combinator)
- Separates two selectors and matches second only if and only if immediately follows the first element and both are children of same parent
-
```
<div>

<img src="http://placekitten.com/g/200/300" />
<p>One</p>
<p>Two</p>
</div>
```

```
img + p {
  font-weight: bold;
}

```
![image](https://user-images.githubusercontent.com/19309898/107388058-6d4f1b80-6ac3-11eb-850d-ed8fcccfbd44.png)

Selects all paragraphs that follow another one
```
p +p { font-size: smaller  }
```


### "~" General Sibling Combinator
- Similar to adjacent sibling comparator, but different is that the second element needn't immediately succed the specified first, it can occur anywhere
- NOTE: However for both ASC and GSC they need same parent


## Sass symbols/ampersand
[Ref](https://css-tricks.com/the-sass-ampersand/)

| SCSS                                             | CSS                                       |
|--------------------------------------------------|-------------------------------------------|
| ``` .btn {   &-primary {}   &-secondary {} } ``` | ``` .btn-primary {} .btn-secondary {} ``` |


### 1. Nesting
The below two mean the same thing
```
 .parent {
  .child {
  
  }
 } 
```

```
 .parent .child {}
```

### 2. Nesting with & ampersand

```
 .parent {
  .child {
  
  }
 } 
```

```
 .parent {
  & .child {
  
  }
 } 
```
### 3. Working with pseudo classes
This
```
.button {
  &:visited { }
  &:hover { }
  &:active { }
}
```
is same as 
```
.button:visited { }
.button:hover { }
.button:active { }
```

### 4. Nesting >, + and ~
```
.button {
  & > span { }
  & + span { }
  & ~ span { }
}
```
same as
```
.button {
  > span { }
  + span { }
  ~ span { }
}
```

same as 
```
.button > span { }
.button + span { }
.button ~ span { }
```


### Image gradient
```
 "background": "linear-gradient(to right, #ffffffd6, #ffffff61), url('image') right center no-repeat",
 "background-size": "auto 100%",
```

## Pseudo classes
![image](https://user-images.githubusercontent.com/19309898/107411759-e73fce80-6adc-11eb-8c1a-58373c267c40.png)
![image](https://user-images.githubusercontent.com/19309898/107386212-9ec6e780-6ac1-11eb-986f-c1809200db4a.png)

## Pseudo Elements
![image](https://user-images.githubusercontent.com/19309898/107386116-8bb41780-6ac1-11eb-87f3-f5f2e7c5796d.png)
