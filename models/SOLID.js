//Bad
Class Usersetting {
    constructor(user) {
        this.user = user;
    }

    changeSettings(settings) {
        if(this.verifyCredentials()) {
            //..
        }
    }

    verifyCredentials() {
        // ...
    }
}

// Good
class UserAuth {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    verifyCredentials() {
        // ...
    }
}

class Usersetting {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            // ...
        }
    }
}
end

// BAD

var iceCreamFavors=["chocolate", "vanilla", "caramel"];
var iceCreamMaker={
    makeIceCream (flavor) {
        if(iceCreamFavors.indexOf(flavor)>-1){
            console.log("Great success. You now have ice cream.")
        } else{
            console.log("Epic fail. No ice cream for you")
        }
    }
}
export default iceCreamMaker;

// GOOD
var iceCreamFavors=["chocolate","vanilla"];
var iceCreamMaker={
    makeIceCream(flavor) {
        if(iceCreamFlavors.indexOf(flavor)>-1){
            console.log("Great Success. You now have ice cream.")
        }else{
            console.log("Epic fail. No ice cream for you")
        }
    }
    addFlavor(flavor){
        iceCreamFlavors.push(flavor);
    }
    export default iceCreamMaker;
}

// BAD
class Rectangle {
    constructor() {
        this.width = 0;
        this.height = 0;
    }

    setColor(color) {
        // ...
    }

    render(area) {
        // ...
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

function renderLargeRectangles(rectangles) {
    rectangles.forEach((rectangle) => {
        rectangle.setWidth(4);
        rectangle.setHeight(5);
        const area = rectangle.getArea(); //Bad: returns 25 for square should be 20
        rectangle.render(area);
    });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);

// GOOD

class Shape {
    setColor(color) {
        // ....
    }

    render(area) {
        // .....
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    getArea() {
        return this.length * this.length;
    }
}

function renderLargeShapes(shapes) {
    shapes.forEach((shape) => {
        const area = shape.getArea();
        shapes.render(area);
    });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);


// Intetrface Segregation Principle

// BAD

class DOMTraverser {
    this.settings = settings;
    this.SecurityPolicyViolationEvent();
}

setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
}

traverse() {
    // ...
}

const $ = new DOMTraverser({ 
    rootNode: document.getElementsByTagName('body'),
    animationModule() {} //Most of the time, we dont need to animate when traversing
})