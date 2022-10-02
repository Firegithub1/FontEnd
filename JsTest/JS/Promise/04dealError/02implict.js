new Promise((resolve, reject) => {
    throw new Error("whoop!");
})
    .catch(err => console.log(err));

console.log('/**************/');
new Promise((resolve, reject) => {
    reject(new Error("whoop!"));
})
    .catch(err => console.log(err));
    // .catch 不仅会捕获显式的 rejection，
    // 还会捕获它上面的处理程序（handler）中意外出现的 error。