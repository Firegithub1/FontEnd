function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.sum = () => this.a + this.b;

    this.mul = () => this.a * this.b;
}

let calculator = new Calculator(33, 11);

console.log(calculator.sum());
console.log(calculator.mul());
// shape  square
function Shape(a, b) {
    this.a = a;
    this.b = b;
};

let square = new Shape(3, 3);
console.table(square);
square.perimeter = function () {
    return (this.a + this.b) * 2;
};
// arrowFunction  FIXME: back come
square.perimeter02 = () => {
    // return this.a + this.b;
    return this;
};
console.log(square.perimeter02() == Function);
console.log(square.perimeter());
console.log(square.perimeter02());