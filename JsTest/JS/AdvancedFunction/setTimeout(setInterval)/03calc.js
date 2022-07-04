// function printNumbers(from, to) {
//     let cur = from;

//     setTimeout(function go() {
//         console.log(cur++);
//         if (cur <= to) {
//             setTimeout(() => {
//                 go();
//             }, 1000);
//         }
//     }, 1000);
// }
// printNumbers(1, 3)

console.log('/**********Interval********/');
function printNumbers002(from, to) {
    let cur = from;

    // let timeId = setInterval(() => {
    //     if (cur == to) {
    //         clearInterval(timeId)
    //     }
    //     console.log(cur++);
    // }, 1000)

    function time() {
        if (cur == to) {
            clearInterval(timeId)
        }
        console.log(cur++);
    }
    time();

    let timeId = setInterval(time, 1000);
}


printNumbers002(1, 3)