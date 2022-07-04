let arr = [8, 2, 4, 42, 42, 8];
let arrmax = Math.max.call(null,...arr);
console.log(arrmax);

// call 和 apply 之间唯一的语法区别是，
// call 期望一个参数列表，
// 而 apply 期望一个包含这些参数的类数组对象。


function hash() {
    console.log([].join.call(arguments, "*")); // Error: arguments.join is not a function
}

hash(1, 2);