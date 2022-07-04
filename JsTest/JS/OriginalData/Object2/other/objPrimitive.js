let user = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive](hint) {
        // 作为对象的函数值属性存在的，当一个对象转换为对应的原始值时，会调用此函数。
        console.log(hint);
        return hint == "string" ? this.name : this.money;
    }
};

console.log('user:', user);
console.log('+user:', +user);

console.log('******************');

let user01 = {
    name: "John",
    money: 1000,
};

console.log(user01);
console.log('valueOf:',user01.valueOf() == user01);
// Object.valueOf()返回对象本身数据

console.log('******************');

let user02 = {
    name: "John",
    money: 1000,

    toString() {
        return this.name;
    },
    valueOf() {
        return this.money;
    }
}

console.log('user02:', user02);
console.log('+user02:', +user02);
