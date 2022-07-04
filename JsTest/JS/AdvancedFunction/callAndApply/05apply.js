
// apply与call区别
// 1.取上下文环境
// 2.call传递一个spread类数组对象
// 3.apply获取一个类数组对象、数组；数组更快，内部引擎优化过
//
let wrapper = function () {
    return func.apply(this,arguments);
}


function hash() {
    console.log([].join.call(arguments));
}

hash(1,2);
// method borrowing