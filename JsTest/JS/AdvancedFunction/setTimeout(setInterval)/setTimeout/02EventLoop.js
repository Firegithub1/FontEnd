// 事件循环
console.log('global');

setTimeout(() => {
    console.log('timeout1');
    new Promise((resolve, reject) => {
        console.log('timeout1_promise');
        resolve()
    }).then(() => console.log('timeout1_then'))
}, 2000);

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log("var_i:", i);
    }, 1000 * i);
    console.log("var_ii:", i);
}

new Promise((resolve, reject) => {
    console.log('promise1');
    resolve()
}).then(() => console.log('then1'))

setTimeout(() => {
    console.log('timeout2');
    new Promise((resolve, reject) => {
        console.log('timeout2_promise');
        resolve()
    }).then(() => console.log('timeout2_then'))
}, 1000);

new Promise((resolve, reject) => {
    console.log('promise2');
    resolve()
}).then(() => console.log('then2'))
