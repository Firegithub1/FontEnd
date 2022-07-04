/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-17 12:59:43
 * @Description:
 *
 */
function pow(x, n) {
    // if (n == 1) {
    //     return x;
    // } else {
    //     return x * pow(x, n - 1);
    // }
    return (n == 1) ? x : (x * pow(x, n - 1));
}

console.log(pow(2, 4));

console.log("****************");