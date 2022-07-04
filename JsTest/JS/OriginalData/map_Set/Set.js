/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-29 10:03:06
 * @Description:
 *
 */
let set = new Set();

let John = { name: "John" };
let Pete = { name: "Pete" };
let Mary = { name: "Mary" };

//visits
set.add(John);
set.add(Pete);
set.add(Mary);
set.add(John);

//set 只保留不重复的值
console.log(set.size);
console.log("*********分割线**********");
for (const iterator of set) {

    console.log(iterator.name);
}

console.log("*********分割线**********");
// forEach 含有两个value 和 Set集合
set.forEach((value, valueAgain, set) => {
    console.log(value);
})

console.log("*********分割线**********");
// Set.keys()
for (const iterator of set.keys()) {
    console.log(iterator);
}

console.log("*********分割线**********");
// Set.values()
for (const iterator of set.values()) {
    console.log(iterator);
}

console.log("*********分割线**********");
// Set.Entries()
for (const iterator of set.entries()) {
    console.log(iterator);
}