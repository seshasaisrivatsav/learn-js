/*
Have circle and square have same prototype methods.
Solution: Create a shape object 
*/

function Shape() {

    Shape.prototype.draw = () => {
        console.log('draw');
    }
}

function Circle(radius) {
    this.radius = radius;

    Circle.prototype.circleMethod = () => {
        console.log('circle method');
    }
}

function Square(side) {
    this.side = side;
}
 
/*
To establish inheritance we need to point circle's prototpe to shape base
The default is
Circle.prototype = Object.create(Object.prototype);

If you change circle's prototype, everytime you create a new circle object 
using new Circle.prototype.constructor() => Shape (it gives shape)
It should be reset to circle
*/
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(2);


/* 
Another way of creating new objects:

new Circle(1)
is same as
new Circle.prototype.constructor(1)

*/

// ================================================================================ //
/*
Equivalent of calling super 
*/


function Color(color) {
    this.color = color;
}

function CircleNew(radius, color){
    Color.call(this, color);
    this.radius = radius;
}

cn1 = new CircleNew(2, 'green'); // cn1 will be a radius 2 color green
// What if we want to apply color to a circle