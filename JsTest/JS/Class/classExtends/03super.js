class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stand stll.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop();
        this.hide();
    }
}
console.log('/******super********/')

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.stop();

console.log('/******arrowF super********/')
class Rabbit02 extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        // this.hide();
        setTimeout(() => super.stop(), 1000);
    }
}
// 继承容易混淆父类
let rabbit02 = new Rabbit02("Gray Rabbit");
rabbit02.stop();