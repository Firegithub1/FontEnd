function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve('hello'), 2000)
    })
}
getData().then(res => {
    console.log(res)
})
// 立马输出 hello

// code2

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 2000, 'hello')
//     })
// }
// getData().then(res => {
//     console.log(res)
// })
// // 2s后输出hello
