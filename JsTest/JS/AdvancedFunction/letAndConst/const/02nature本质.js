// 1.值类型  String Number Boolean
// 变量指向内存地址，因此等同于  常量


// 2.引用型  Array Object Function(次要)
// 变量指向内存地址，保存的仅是指向实际数据的指针

// 变量存在栈，对象存在堆

const obj = {};
obj.prop = 123;
console.log("obj.prop:", obj.prop);

obj = {}; //error


const arr = [];
arr.push(5);
arr.push('7');
arr.push('9');
console.log("arr:", arr);

// arr = [1, 2, 3]; //error