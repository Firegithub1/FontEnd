
let promise02 = new Promise(function (resolve, reject) {
    // setTimeout(() => reject(new Error("Whoops!")), 1000);
    //   reject(new Error("…")); // 被忽略
    //   setTimeout(() => resolve("…")); // 被忽略
});

let promise = new Promise(resolve => resolve("done!"));
