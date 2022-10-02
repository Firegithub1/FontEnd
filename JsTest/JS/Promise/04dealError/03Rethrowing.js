// new Promise((resolve, reject) => {
//     throw new Error("Whoop!");
// })
//     .catch(err => console.log("this err is handle,continue normally"))
//     .then(() => console.log("Next successful handle runs"));
console.log('/******************/');
// 处理程序（handler）捕获了 error，但无法处理它
// （例如，它只知道如何处理 URIError），
// 所以它将其再次抛出：

new Promise((resolve, reject) => {
    throw new Error("Whoop!");
})
    .catch(err => {
        if (err instanceof URIError) {
            console.log("this URIError is handle,continue normally")
        } else {
            console.log("Can't handle such err");
        }
        throw err;
    })
    .then(() => console.log("Next successful handle runs"))
    .catch(err => console.log(`the unknow err has occured ${err}`));