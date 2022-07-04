// ES5 规定，
// 函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// 一下两种非法  不过浏览器可以执行，浏览器未遵守ES5

if (true) {
    (function f() {
        console.log("if() function");
    }());
}


try {

    function func2(arg) {
        {
            let arg;
            console.log("arg:******up*****");
        }
    }
    func2();

} catch (error) {

}