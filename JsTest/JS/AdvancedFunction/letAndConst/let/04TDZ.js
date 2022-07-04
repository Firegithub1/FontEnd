// temporal dead zone
var tmp =22;

// if (true) {
//     tmp = 'abc';
//     let tmp;
// }


let x;
console.log(typeof x);

// ES6 规定暂时性死区和let、const语句不出现变量提升，
// 主要是为了减少运行时错误，
// 防止在变量声明前就使用这个变量，
// 从而导致意料之外的行为。