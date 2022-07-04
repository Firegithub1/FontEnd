for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i, new Date())
    }, i * 1000);
}

// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i, new Date())
//     }, i * 1000)
// }