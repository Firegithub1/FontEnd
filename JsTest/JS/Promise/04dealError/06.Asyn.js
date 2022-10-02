new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error("Whoops!"));
    }, 1000);
}).catch(alert);


new Promise(function (resolve, reject) {
    setTimeout(() => { throw new Error("Whoops!"); }, 1000);
})
    .catch(alert);