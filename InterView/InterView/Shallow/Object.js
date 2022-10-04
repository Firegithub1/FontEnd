let teacher = {
    name: "zhangsan",
    age: 18,
    sex: "male"
}

let assign = Object.assign({},teacher);
for (const key in assign) {
    assign[key] += 111;
}
// FIXME: Object.assign({},object) object.({},object)只有一层时 是深拷贝，调用对象
console.log(assign);
console.log("********");
console.log(teacher)
console.log("****************");

// JSON.parse(JSON.stringify()); Deep拷贝 JSON.parse/stringify
let jJSON = JSON.parse(JSON.stringify(teacher));
jJSON.age=1118;
console.log(jJSON);
console.log("********");
console.log(teacher);
console.log("****************");
// For IN 遍历赋值

// return 函数 递归
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};


// FIXME: Object.assign(object) object.assign 是shallow拷贝，对对象的引用
teacher.son = {surname:"xiaoming"};
let assign2 = Object.assign(teacher);
assign2.son.surname = "xnmk";
console.log(assign2);
console.log("********");
console.log(teacher)
console.log("****************");
// ...展开运算符 Shallow拷贝
let teacher02 = {...teacher};
teacher02.son.surage=17;
console.log("...",teacher02);
console.log(teacher);
// 3、函数库lodash的_.clone方法
// 该函数库也有提供_.clone用来做 Shallow Copy, 后面我们会再介绍利用这个库实现深拷贝。

