const myObject = {
    city: 'Madrid',
    greet() {
        console.log(`Greting from ${this.city}`)
    }
}

myObject.greet()

const personPrototype = {
    greet() {
        console.log(`HELLo`)
    }
}

const carl = Object.create(personPrototype)
carl.greet()

class Person {
    name;

    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'am ${this.name}`);
    }
}

class Professor extends Person {
    teaches;
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(
            `My name is ${this.name}, and I willbe your ${this.teaches} professor.`
        )
    }
    grade() {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

const walsh = new Person('Walsh', 'Psychology')
walsh.introduceSelf()


class Shape {
    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(
            `Perimeter ${this.name} is ${perimeter} m`
        )
    }
}



const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
    constructor(sideLength) {
        super('square', 4, sideLength);
    }
    calcArea() {
        const area = this.sideLength ** 2;
        console.log(
            `Area of ${this.name} is ${area} square units.`
        );
    }
}

const square = new Square(5);
square.calcPerimeter()
square.calcArea()

class Animal {
    sleep() {
        console.log('zzzzzz')
    }
}

const spot = new Animal()

spot.sleep()