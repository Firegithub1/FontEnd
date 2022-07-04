// const only Read variable
// 1.const一旦声明变量，就必须立即初始化

// const Num;  //error

// 2.常量的值就不能改变。

const PI = 3.1415;
console.log("PI:", PI);
Pi = 3;
console.log("PI01:", PI);

// 3.只在声明所在的块级作用域内有效。
if (true) {
    const MAX = 9;
}

// console.log("MAX：", MAX);   //error

// 4.不提升，同样存在暂时性死区，声明后才可使用
{
    // console.log("z:", z); //error
    const z = 5;
}

// 5.不可重复命名
var massage = "create";
// const massage = "hwhw"; //error