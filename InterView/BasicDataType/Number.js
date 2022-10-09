const a = new Number("123.232380932");
console.log(a.toFixed(3));
console.log(a);

const b = Number("123");
console.log(b);

console.log(a instanceof Number);
console.log(b instanceof Number);

console.log(typeof a);
console.log(typeof b);

// // 小知识：
// 1、Number(1)是指将1转化为number类型，跟1是全等关系。
// Number(1)是把1转换为数字类型，new Number(1)是把 1 包装成了一个对象。

// 2、一个原始类型值并没有任何可用的方法，其使用的方法是包装对象原型上的，
// 例如：(12).toFixed()，toFixed()实际上是在Number对象原型(prototype)中声明的方法。