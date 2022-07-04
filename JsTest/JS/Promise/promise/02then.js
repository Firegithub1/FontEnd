console.log('/*****resolve******/');
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done")
    }, 1000);
});
// 原型 .then（f1,f2)
// promise.then(
//   function(result) { /* handle a successful result */ },
//   function(error) { /* handle an error */ }
// );

promise.then(
    result => console.log(result),
    error => console.log(error)
)

console.log('/*****reject******/');
let promise02 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Whoop!"))
    }, 1000);
});

promise02.then(
    result => console.log(result),
    error => console.log(error)
)

console.log('/*****only resolve******/');
let promise03 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done!")
    }, 1000);
});

promise03.then(
    result => console.log(result)
)
console.log('/***** .then(null,catch) or .cathch******/');
let promise04 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Whoop!"))
    }, 1000);
});

promise04.then(
    null,
    result => console.log(result)
)