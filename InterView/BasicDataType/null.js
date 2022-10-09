let x = null;
console.log(typeof x);

let xin = x instanceof Object;
console.log(xin);
// console.log( x instanceOf Object);
let xNum = Number(x);
console.log(xNum); //0

// 附：null在类型判断时为什么是object
// 这是一段历史，1995年Javascript诞生之初， 在实现js类型判断的方法时（也就是typeof），数值是以32位存储的，由标志位（1~3位）和数值组成。标志位存储的是低位的数据。这里有五种标志位：

// 000 表示对象
// 1 表示整数
// 010 表示浮点数
// 100 表示字符串
// 110 表示布尔类型
// 有两个特殊值：

// undefined用-2^30表示
// null用全0表示
// 这不巧了吗这不是，null的低位也是000，所以误打误撞成为了object，这一点一直被认为是个bug，直到es6的时候typeof null === 'null'的提案被否决，typeof null === 'object'变成了feature，也就是说这个"bug"不会被“修复”了