/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-17 15:51:27
 * @Description:
 *
 */
//循环迭代法
function sumTo1(n) {
    for (let index = n - 1; index > 0; index--) {
        n += index;
    }
    return n;
}

console.log("sumTo1:", sumTo1(4));
// 递归
function sumTo2(num) {
    return (num == 1) ? num : (num + sumTo2(num - 1));
}

console.log("sumTo2:", sumTo2(5));
// 等差数列求和公式
function sumTo3(num) {
    return (num * num + 1) / 2;
}
console.log("sumTo3:", sumTo3(3));