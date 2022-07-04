// Deep

let arr = [1, 2, 3];

let arrCopy = [...arr];
// 将数组 spread 到参数列表中
// 然后将结果放到一个新数组

console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));

console.log(arr === arrCopy); //（它们的引用是不同的）

console.log('/*********obj*******');


let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj };
console.log("objCopy:");
console.table(objCopy)

console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
console.log(obj === objCopy);

console.log('/*********test*******');
let str = 'helloString';
