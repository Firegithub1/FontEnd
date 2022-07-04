//块级作用域内部的函数声明语句，建议不要使用
{
    let a = 'secret';
    function f() {
        return console.log("a:", a);;
    }
    f();
}

//块级作用域内部，优先使用函数表达式
{
    let a = 'secret';
    let f = () => console.log("aaaa:", a);
    f();
}

//ES6 的块级作用域必须有大括号，
// 如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
// if (true) let x = 1;  //false

if (true) { let x = 1 };  //true



