/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-18 10:45:16
 * @Description:
 *
 */
function makeCounter() {
    let count = 0;
    return function sum() {
        let m = 1;
        return function show() {
            console.log(++m);
        }

    };
}
let counter = makeCounter()(); //注意多重调用
counter();