function showName() {
    console.log(...arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

}


// 有一个名为 arguments 的特殊的类数组对象，
// 该对象按参数索引包含所有参数。
showName("Pete", "LiSi", "WhWu", "WhNiMa");
// 缺点
// 一个类数组，也是可迭代对象，
// 但它终究不是数组。它不支持数组方法，
// 因此我们不能调用 arguments.map(...) 等方法

console.log('/*****arrowFunction******/');
function f() {
    let showAge = () =>{
        console.log(arguments[0]);
    }
    showAge();
}

f(1,3);

//箭头函数没有 "arguments"
// 属于箭头函数外部的“普通”函数。

console.log('/*****arguments******/');

function hash(args) {
    return args[0] + ',' + args[1];
}

console.log(hash(1, 3));