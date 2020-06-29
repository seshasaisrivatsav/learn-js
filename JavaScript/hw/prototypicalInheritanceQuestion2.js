/* 
    Ask: Design two object
    HtmlElement
    HtmlSelectElement (represents dropdown)

    const e = new HtmlElement(); // has click, in its prototype, have focus

    e.clicked() // 'clicked' instance method
    e.focus(); // focus is  a prototype method


    const s = new HtmlSelectElement(); /// optionally pass array
    arrayItems: []
    addItem : f
    removeItem: f

    it's prototype is instance of HtmlElement
*/

function HtmlElement() {
    this.clicked = () => {
        console.log('clicked')
    }
};

HtmlElement.prototype.focus = () => {
    console.log('focus');
}


/*
Initializing variables to empty array input = [] (happens in ES 6)
Other way to do it is
this.items = items || [ ]
*/
function HtmlSelectElement(input = []) {
    this.addItem = (element) => {
        this.items.push(element);
    }
    this.removeItem = (element) => {
      this.items.splice(this.items.indexOf(element), 1);
    }

    // map returns array, which is joined by empty string as join defaults to comma
    this.render = () => {
        return  `<select>
        ${this.input.map(ele => `<option>${ele}</option>`).join('')}
        </select>`;
    }
}

/* 

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); // we create new object and it only gets focus method but not clicked
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
*/

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; // We did this in order to create objects of type HtmlSelectElement

/*

We need to change prototype constructor
// gigitty = new HtmlSelectElement.prototype.constructor(); => Gives a HtmlElement

Doing the following gives  HtmlSelectElement
HtmlSelectElement.prototype.constructor = HtmlSelectElement; 
*/

e = new HtmlElement(1);
 
s = new HtmlSelectElement();



/* 
Ask: Polymorphism

make html select element to render dropdown html with arguments
Create HtmlImageElement inherits from select 
*/

function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src="${this.src}" />`; 
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlElement.prototype.constructor = HtmlImageElement;

// added another render to HtmlSelectElement


// Needs to have src and render, 
const img = new HTMLImageElement('https:/www');
