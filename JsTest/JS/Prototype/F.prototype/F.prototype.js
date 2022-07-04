let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("whiteRabbit");

console.log(rabbit.eats);

animal.eats = false;

console.log('change',rabbit.eats);

console.log('****************');
