console.log('/********函数姓名******/');
function sayHi() {
    console.log("Hi");
}
console.log(sayHi.name);


console.log('/******匿名函数********/');


let sayHello = function () {
    console.log('hello');
};
console.log(sayHello.name);


console.log('/*******上下文命名*******/');

// 上下文命名
function f(sayNice = function () { }) {
    console.log(sayNice.name);
}

f();

console.log('/*******对象方法命名*******/');
let user = {
    say() {

    },
    sayHi() {

    }
};

console.log(user.say.name);
console.log(user.sayHi.name);


console.log('/*******无法推测名字*******/');
let arr = [function () { }];  //空字符串
console.log(arr[0].name);


// 而实际上，大多数函数都是有名字的。
let arr1 = [function () { console.log('first'); },2];  //空字符串
console.log(arr1[0].name);
console.log(arr1[1].name);