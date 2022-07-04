class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    // this.speed = 1;
    this.earLength = earLength;
  }
}

// 现在可以了
// 重写Rabbit Constructor,仍可向上查找父类的constructor
let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.speed); // White Rabbit
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10