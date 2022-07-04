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