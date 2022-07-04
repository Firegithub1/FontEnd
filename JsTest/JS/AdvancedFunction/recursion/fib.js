/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-17 23:36:42
 * @Description:
 *
 */
//递归
function fib0(number) {
    if (number == 1) return 1;
    else if (number == 2) return 1;
    else if (number > 2) return fib0(number - 1) + fib0(number - 2)
}

console.log(fib0(7));

console.log('**********');
// 自下而上的动态规划
function fib1(num) {
    let fir = 1;
    let sec = 1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
}