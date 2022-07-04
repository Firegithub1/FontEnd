new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
    .then(result => result * 2)
    .then(result => result * 2)
    .then(result => console.log(result * 2));


console.log('/****False**Chain*************/');

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
promise.then(result => console.log(result * 2));
promise.then(result => console.log(result * 2));
promise.then(result => console.log(result * 2));