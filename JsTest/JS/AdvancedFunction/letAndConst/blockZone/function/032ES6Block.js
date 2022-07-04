// ES6：
// 允许在  块级作用域 之中声明函数Function
// 块级作用域之中， 函数声明语句的行为类似于let，
// FIXME:在块级作用域之外不可引用。

function f() {
    console.log("I am outside!");
}

(function () {
    if (true) {

        function f() {
            console.log("I am inside!");
        }
        // f();
    }
    f();// 函数不在作用域范围内 Uncaught TypeError: f is not a function
}());
 // 浏览器的 ES6 环境

// function f() { console.log('I am outside!'); }
// (function () {

//   var f = undefined;

//   if (false) {
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

// ES6 在附录 B里面规定，
// 浏览器的实现可以不遵守上面的规定，有自己的行为方式。

// 允许在块级作用域内声明函数。
// 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
// 同时，函数声明还会提升到所在的块级作用域的头部。

