function Rabbit() {

}
Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};
const rabbit = new Rabbit();

console.table(rabbit.constructor.prototype);

console.log(Object.keys(rabbit));