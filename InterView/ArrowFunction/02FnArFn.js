let fn = name => {
    console.log(name)
}
let fn2 = function(name) {
    console.log(name)
}
console.dir(fn) //
console.dir(fn2) //

// 从打印结果来看，箭头函数与普通函数相比，缺少了caller，arguments，prototype