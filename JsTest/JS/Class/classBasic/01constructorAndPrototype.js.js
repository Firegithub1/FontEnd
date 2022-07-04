class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log("Hi~");
    }

}
console.log("*******sayHi******");
let user = new User("John");
user.sayHi();

console.log("*************");
console.log(typeof User);


console.log("*************");
console.log(User === User.prototype.constructor);

console.log("******getOwnPropertypeNames*******");
// FIXME:User本身含有的属性Length、name、prototype
console.log(Object.getOwnPropertyNames(User));
// FIXME:User.prototype含有sayHi constructor
console.log(Object.getOwnPropertyNames(User.prototype));
console.log(Object.getOwnPropertyNames(User.prototype.constructor));

console.log("*************new 构造器方法****************");
function Admin(name) {
    this.name = name;
}

Admin.prototype.sayHi = function () {
    console.log("Hei~");
}
let admin = new Admin();
admin.sayHi();