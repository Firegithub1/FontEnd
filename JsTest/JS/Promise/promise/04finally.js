new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 1000);
})
    .finally(() => console.log("Promise ready"))
    .then(result => console.log(result));
