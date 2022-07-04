// 1引入IIFE Immediate-Invoked Function Expression
for (var i = 0; i < 5; i++) {
    ((i) => setTimeout(() => {
        console.log(i);
    }, i * 1000))(i);
}

// 2.引入ES6关键字let
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i, i);
    }, i * 1000);
}

//3.利用setTimeout第三个参数
for (var i = 0; i <= 5; i++) {
    setTimeout((i) => {
        console.log(i, i, i);
    }, i * 1000, i);
}

// 4.把setTimeout单独出来形成闭包
let loop = (i) => {
    setTimeout(() => {
        console.log(i, i, i, i);
    }, i * 1000);
}

for (var i = 0; i < 5; i++) {
    loop(i);
}

// 利用ES 5引入的bind函数

for (var i = 0; i <= 5; i++) {
    setTimeout(function timer(i) {
        console.log(i, i, i, i, i);
    }.bind(null, i), i * 1000);
}