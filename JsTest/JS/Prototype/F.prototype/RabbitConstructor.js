function Rabbit() { }

console.log(Rabbit.prototype.constructor == Rabbit);

let rabbit = new Rabbit();

console.log(rabbit.constructor == Rabbit);