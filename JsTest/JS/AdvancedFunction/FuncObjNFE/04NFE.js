// Named Function Expression

// normal Fuction Expression
let sayHi = function (who) {
    console.log('hi,', who);
}

// addNamed  func
let sayHello = function func(who) {
    if (who) {
        console.log('hello,', who);
    }else{
        func("Guest");
    }
}

sayHi();
sayHello();
// 1.它允许函数在内部引用自己。
// 2.它在函数外是不可见的。
// func("hi");