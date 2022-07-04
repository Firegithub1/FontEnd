/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-16 15:12:02
 * @Description:
 *
 */
const map = new Map();
map.set('head', "Map's head");
map.set('foot', "Map's foot");

//size
// size属性返回 Map 结构的成员总数 2
console.log(map.size);

//set()
//设置map的映射取出用get()
map.set("first", "Map's First word");
//可以采用链式写法
map.set("second", "Map's Second word").set("third", "Map's Third word");


//get()
//获取map的映射数据
console.log(map.get('third'));

//has()
//返回一个bool值，确定所寻找的key是否存在
console.log(map.has("four"));

for (const key of map.keys()) {
    console.log("I'm map's key:", key);
}

for (const value of map.values()) {
    console.log("I'm map's value:", value);
}

//keys()
for (const key of map.keys()) {
    console.log(key);
}

//values()
for (const value of map.values()) {
    console.log(value);
}

//entries
for (const object of map) {
    console.log(object);
}
console.log("*********分割线**********");

for (const [object1, object2] of map) {
    console.log(object1, object2);
}

console.log("*********分割线**********");
//forEach
// 对每个键值对 (key, value) 运行 forEach 函数
// 第一个参数是值 第二个参数为键 第三个为函数
map.forEach((value, key, map) => {
    console.log(`${key}:${value}`);
})

console.log("*********分割线**********");
// Object.entries(obj)
// 从一个已有的普通对象（plain object）来创建一个 Map，
// 那么我们可以使用内建方法 Object.entries(obj)，该方法返回对象的键/值对数组，
// 该数组格式完全按照 Map 所需的格式。

let obj = {
    name: "John",
    age: 30
};

let map02 = new Map(Object.entries(obj));
console.log(map02.get('name'));

console.log("*********分割线**********");
// Object.fromEntries(obj)
// 方法的作用是相反的：
// 给定一个具有[key, value] 键值对的数组，它会根据给定数组创建一个对象
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
console.log(prices);
console.log("*********分割线**********");
//可以使用 Object.fromEntries 从 Map 得到一个普通对象（plain object）。
let map03 = new Map();
map03.set('apple', 1)
    .set('pineapple', 2)
    .set('pear', 2)
    .set('durian', 5);
// 创建一个普通对象（plain object）(*)
// 调用 map.entries() 将返回一个可迭代的键/值对
let prices02 = Object.fromEntries(map03.entries());
console.log(prices02);
console.log("*********分割线**********");
let prices03 = Object.fromEntries(map03);
console.log(prices03);
console.log("*********分割线**********");