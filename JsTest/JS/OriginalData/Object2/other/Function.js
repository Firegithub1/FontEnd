function Person(name) {
  this.name = name;
  this.sayName = function () {
    log(this.name);
  };
}

let p1 = new Person("p1111");
// 1.创建对象
// 2.将实例的隐式原型指向构造函数constructor
// 3.
let p2 = new Person("p22222");

function log(x) {
  console.log(x);
}

log(Person.prototype.constructor)

// log((p1.constructor = p2.constructor)); //true
// log("constructor");
// log((p1.constructor = Person)); //true

// log(p1.sayName());
// log("p1  p22的sayName()");
// log(p1.sayName() === p2.sayName()); //true
// log(p1.sayName() == p2.sayName()); //true
// log("p1  p22的sayName");
// log(p1.sayName === p2.sayName); //false
// log(p1.sayName)
// log(p2.sayName)

// log(typeof p1); //Object
// log(p1 instanceof Object); //true
// log(p1 instanceof Person); //true

// log("undefineddddddddddddddd");
// log(undefined == undefined);
// log(undefined === undefined);
// log("nullllllllllllllllll");
// log(null == null);
// log(null === null);