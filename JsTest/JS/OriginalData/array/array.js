/*
 * @Author: YiFreerFiY
 * @Date: 2022-03-18 16:33:03
 * @Description:
 *
 */
let str = ["ab", "ad", "bc", "ef"];
console.log(str[1]);
console.log(str.length);
str[4] = function() { alert('hello') };
str[5] = { name: 'John' };
// str[4] = "function";

str[6] = 1000000;
console.log(str);

console.log("first number:" + str.length);
console.log(str.pop());
console.log("second number:" + str.length);
str.push("777");
console.log(str);
console.log("Third number:" + str.length);
console.log(str.shift());
console.log("Fourth number:" + str.length);
str.unshift("aabb");
console.log(str);
console.log("Fifth number:" + str.length);

let testNum = 3;
testNum /= 2;
testNum = Math.floor(testNum);
console.log(testNum);

console.log("****************");

function sumInput() {
    let str = [];
    let count = 0;
    do {
        str[str.length] = prompt("please input number:", "null");
        if (typeof str[str.lenth] === "number") {
            count += +str[str.length];
        }
    } while (typeof str[str.lenth] === "number");
    return count;
}

top: for (let index = 0; index < 3; index++) {
    console.log(index);
    if (index == 1) {
        break top;
        console.log("break top");
    }
}