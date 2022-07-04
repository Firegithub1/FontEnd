let user = "John";
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(console.log(user), 1000));
})
promise.then(result => result);
// state:pending fulfilled rejected
// result：undefined    value   error
// console.log(promise.state);

let promise02 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
    //   reject(new Error("…")); // 被忽略
    //   setTimeout(() => resolve("…")); // 被忽略
});
//
// executor 只能调用一个 resolve 或一个 reject。任何状态的更改都是最终的。

// Resolve/reject 可以立即进行
let promise03 = new Promise((resolve, reject) => {
    resolve(console.log("123"));
})

// state 和 result 都是内部的
// 无法直接访问它们。但我们可以对它们使用 .then/.catch/.finally 方法。