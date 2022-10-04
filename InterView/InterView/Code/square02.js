class Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

class Square extends Shape {
    constructor(length, width) {
        super(length, width);
        // this.width = 3;
    }
    // perimeter() {
    //     console.log((this.length + this.width) * 2);
    // }
    perimeter = () => (this.length + this.width) * 2;
}

let square = new Square(3, 3);

console.log(square.perimeter());