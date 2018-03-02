function classHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error("Cannot be instantiated!");
            }
        }

        toString() {
            let type = this.constructor.name;
            let props = Object.getOwnPropertyNames(this);
            return type + ' - ' + props.map(p => `${p}: ${this[p]}`).join(', ');
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let container = classHierarchy();
let Figure = container.Figure;
let Circle = container.Circle;
let Rectangle = container.Rectangle;

let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3, 4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
// let f = new Figure();       //Error