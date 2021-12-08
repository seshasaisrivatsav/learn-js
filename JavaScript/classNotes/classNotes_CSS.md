## Class 1 02/18
- HTML5 introduced inline blocks.
- twitter bootstrap
- bootstrap = not native to your browser
- flexbox = natively available in the newer browsers. 
- CSS grid = competitor to flexbox
- start with blocks and in line blocks

- If you can build a layout, it has `display: block` by default
```html
<div>
asdas
</div>
```
```html
<p>
asd
</p>
```
// it has display block, margins and stuff


- what are the blocks in css?
- paragraph, div

### computed
it's also kind of default

### padding
- what every is padding inside div, add 2px to it
- added inside.
```html
<div style="padding;2px; border: 1px solid green">hi</div>
```


### margin
- Added outside. between itself and the next Element. 
- default font size is 16; but when you inspect it, it shows 18. as it adds 1px on top and bottom.
```html
<p>hi<p> 
```



### Border Box
- Content and padding around it and a border around it.

### hook/selector
1. class
- connecting html and css
```html
<div class = "test">hi</div>
```
```css
.test {
    border: 1px solid red;
}
```

2. id
```html
<div id = "myId>hi </div>
```

```css
#myId {
    background-color: brown;
}

```
- ids are supposed to be unique. 
- classes can be used multiple times.

3. attribute
- class and id are attributes
```html
<div sesha=""> hi</div>
```

```css
[sesha] {
    background-color:white;
}
```
#### specificity
- when conflicting styles are applied to same elements, based on priority, called specificity, it goes.
- Eg: id and attribute conflict, id is given first priority as it is unique.

- id can be used for css and JS both
```html
    <div myName = "test1"> h11 </div>
    <div myName = "test2"> h11 </div>
```


- css
```css
    [myName = "test1"] {
        asdfsdf
    }
    [myname = "test2] {
        asyjuk
    }

```
- these are also called selectors/hooks

### combination of selectors
applying combination of selectors to a style
```css
.className#myID{
    background-color: black
}
```


### class 4 - 04/03/2018
Note taken else where
[03_04_18_class_4.md](03_04_18_class_4.md)


### class 5 - 04/10/2018
#### display property
- By default divs are blocks
```html
    <div class = "a">a</div>
    <div class = "a b">b</div>
    <div class = "a">c</div>
    <div class = "a">d</div>
    <div class = "a">e</div>
    <div class = "a">f</div>
    <div class = "a">g</div>
```

```css
    .a {
        display: inline-block;
        width:60px;
    }
```
- If you want to move d before

## position property
- Besides where this element where it's going to be positioned. 
- display = natural order
- position = user defined position

### Static
- By default, position value is static [observe in css]

```css
.a {
    display: inline-block;
    width: 60px;
}

```
margin impacts others
```css
.b {
    margin: 20px; // applies on all sides
    margin-left: 20px; // applies 20px on left
}

```

### position:relative
- to change position (absolute, relative)
- element b moves to the right, without impacting others when we move relative position. 
```css

.b {
    position:relative;
    left:20px; //  moves to right
    top: 60px; // moves to bottom
}

```
- margin applies to all elements

look at :

```css
.a {
    display: inline-block;
    width: 60px;
    border: 1px solid red;
}

.b {
    position:relative;
    bottom:60px;  
    margin-top: 100px;  
}
```


```html
<div class="wrap">
    <div class = "a">a</div>
    <div class = "a b">b</div>
    <div class = "a">c</div>
    <div class = "a">d</div>
    <div class = "a">e</div>
    <div class = "a">f</div>
    <div class = "a">g</div>
</div>

```
```css

.a {
    display: inline-block;
    width: 60px;
    vertical-align: top;
    border: 1px solid red;
}

.b {
    position:relative;
    bottom:60px;  
    margin-top: 100px;  
}

.wrap {
    border: 1px solid black;
}

```

### position:absolute
- relative to its relative parent
- if you use position: absolute; you need to specify left, right etc

```css
.b {
    position:absolute;
    left: 30px;
}

```

```html
<div class = "x">
    <span>asdasd</span>
    <button class = "y"> click </button>

</div>
```

```css

.x {
    height: 200px;
    width: 300px;
    border: 1px solid red;
    position: relative;

}

.y {
    position: absolute;
    right: 5px;
    bottom: 5px
}
```

### position:fixed
Eg: add stays where it is even if we scroll.
```css
.elementClass {
    position: fixed;
    top: 30px;
    border: 1px solid
}
```

## Mastering CSS
1. Box model
2. Display
3. Position


- blocks = containers
- span = simple text, doesn't take width or height.

Look at properties that get inherited and what doesn't.
- Eg: Font gets inherited
- Display 




## inherit 
- inherits parents' property. it doesn't inherit top right left


## Responsive design

- When bottom screen is at certain width, make it different
```html
<div class="text">my </div>
<div class="text">name </div>
<div class="text">is </div>
<div class="text">srivatsav </div>

```
```css
.text {
    display: inline-block;
    background-color: blue;
}

// 500 px and below
@media screen and (max-width: 500px) {
    .text{
        background-color: yellow;
    }
}

```


- Whatever is in media, that's applied if screen goes below 500px
- You can make multiple media for multiple sizes.

### Horizontal and vertical alignment
- horizontal alignment => text-align: center;
- vertical alignment =>
    line-height: 50px

    
   
