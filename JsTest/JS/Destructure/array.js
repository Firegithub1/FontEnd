let { max } = Math;

let array = [1, 3, 5, 7, 6, 8, 7, 9];
console.log(max(...array));

console.log(Math.max(...array));

let a = "1234567890";
let { length: len } = a;
console.log(len); // 结果：10

let [b1, b2, b3, b4, b9] = a;
console.log(b1,b2, b9);  //1 2 5
