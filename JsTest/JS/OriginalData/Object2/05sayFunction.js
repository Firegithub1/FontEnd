let user = {
    name: "John",
    age: 30,
    sayAi:function () {
        console.log("ai~");
    }
};

user.sayHi = function () {
    console.log("Hi~");
};
user.sayAi();

console.log("/***********function Hi()**********/");
console.table(user);
user.sayHi();

console.log("/**********require ()***********/");
function Hello() {
    return"hello!";
};
// FIXME:here is not (),because need function
// ,rather than function value
user.sayHello = Hello;

console.table(user);
// user.sayHello;

console.log(user.sayHello);
