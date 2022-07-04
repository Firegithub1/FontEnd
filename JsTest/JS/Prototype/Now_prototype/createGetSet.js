// __proto__ 属性很特别：它必须是对象或者 null。字符串不能成为 prototype。

let animal = {
    eats: true
};
// let rabbit = Object.create(animal);

let rabbit = Object.create(animal, {
    jumps: {
        value: "JumpsJumps!!!"
    }
});

console.log(rabbit.jumps);
console.log("******************");

console.log(Object.getPrototypeOf(rabbit) === animal);
console.log(Object.getPrototypeOf(rabbit));
console.table(rabbit.jumps);
console.log("******************");

Object.setPrototypeOf(rabbit, Array);
console.log(Object.getPrototypeOf(rabbit));
console.log(rabbit);
console.log(rabbit.length);
console.log("******************");
