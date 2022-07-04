function Rabbit() {}
console.log(Rabbit.prototype.constructor==Rabbit);

console.log("********beforeChange*****");
let rabbit = new Rabbit();
console.log(rabbit.constructor == Rabbit);

Rabbit.prototype = {
    jumps: true
};

console.log("********afterChange*****");
let rabbit2 = new Rabbit();
console.log(rabbit2.constructor == Rabbit);