// 箭头函数没有自己的this

// 箭头函数没有自己的作用域

// 没有自己的argument
// 没有prototype属性
// 没有super或new.target yield 关键字-
// -通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。
// 不能当作构造函数,不能进行new操作 语法

let t = (a,b) => {
    let ta =3;
    console.log(a+b);
    console.log(ta);
}
t(1,2);