// （弱映射和弱集合）

let john = { name: "John" };
let john33 = {
    name: "John33",
    age: 19
};

//弱映射 删除对象，Map里面的对象也会被回收
let weakMap = new WeakMap();
// 添加对象为键值
weakMap.set(john, "fsjf");

console.log("discover:" + weakMap);
john = null; // 覆盖引用
console.log("cover:" + weakMap);

let num = john33.name || 0;
console.log(num);
console.log(`*********`);
// for in =>对象
for (const key in john33) {
    console.log(key, john33[key]);
}

// for (const values of weakMap) {
//     console.log(values);
// }

let map = new Map();
map.set("test", 11)
    .set("ndy", 'yeye');

map.forEach((a, b) => console.log(a, b));
console.log("keys,values:", map);