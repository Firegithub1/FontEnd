function multiCounter() {
    let count = 0;
    return function sum() {
        let m = 1;
        return function show() {
            console.log(m++, count++);
        }
    }
}

let counter = multiCounter();
// 一层此时是获取 multiConter 里面的变量和函数
counter()();
// 第二层 获取sum()函数里面的变量和函数
// 此时获取到了show函数
// 第三层 ()为调用function  show ()