/*
 * @Author: YiFreerFiY
 * @Date: 2022-03-22 20:41:39
 * @Description:
 *
 */
let arr = ['i', 'study', 'Javascript'];
console.log(`base:` + arr);
arr.splice(1, 1);
console.log("delete:" + arr);
arr.splice(1, 0, "master");
console.log("add:" + arr);
arr.splice(-1, 0, "From", "now");
console.log("converseAdd:" + arr);

arr.splice(2, 2);
arr.splice(3, 0, "from", "now");

console.log("converseAdd2:" + arr);
arr.splice(-0, 0, "Thursday");
console.log("converseAdd3:" + arr);

//slice
let str = ['Javascript', 'is', 'interesting'];
console.log(str.slice(0));
console.log(str.slice(0, 2));
console.log(str);

//concat
let con = ["co", "on"];
let func = {
    name: "function",
    func: "example"
}
console.log("con:" + con);
let conc = con.concat(func);
console.log("conc:" + conc);


//forEach
str.forEach((item) => { console.log("forEach:::" + item) });
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

//indexOf/lastIndexOf//includes
console.log("includes:" + str.includes("is"));
console.log("indexOf:" + str.indexOf("is", 0));
console.log("lastIndexOf:" + str.lastIndexOf("is", 2));

//find ///findIndex
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
]
let user = users.find(item => item.id == 1);
console.log(user);
let userIndex = users.findIndex(item => item.id == 3);
console.log("findIndex:" + userIndex);

//filter
let results = users.filter(item => item.id == 3);
console.log("filte:" + results);
console.log("filter=>results.length:" + results.length);

let results2 = users.filter(function(item, index, array) { console.log(`${item.id} is at index ${index} in ${item.name}`) });

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numStr = num.filter(item => item < 5);
console.log("numStr" + numStr);

//map替换项为字符串长度
let lengths = ["first", "second", "Third"].map(item => item.length);
console.log("lengths:" + lengths);

//sort
let num2 = num.concat(15, 31, 23);
console.log("num2:" + num2);
num2.sort(); //默认按字符串排序
console.log("Sort_num2:" + num2);
let compareNumeric = (a, b) => {
    switch (true) {
        case (a > b):
            return 1;
        case (a == b):
            return 0;
        case (a < b):
            return -1;

    }
}
num2.sort(compareNumeric); //默认按字符串排序
console.log("compareNumeric:" + num2);
//函数表达式
let compareNumeric2 = function(a, b) {
    return a - b;
}
num2.sort(compareNumeric2); //默认按字符串排序
console.log("compareNumeric2:" + num2);

//箭头函数
let compareNumeric3 = (a, b) => {
    return a - b;
}
num2.sort(compareNumeric3); //默认按字符串排序
console.log("compareNumeric3:" + num2);

//localCompare for string
let contries = ['beijing', 'shanghai', 'henan', 'sishuan'];
num2.sort(compareNumeric3); //默认按字符串排序


//split  找到以‘‘里分隔符，分割’字符串‘
let strString = 'this,is,test,split,function';
let strSplit = strString.split(',');
for (let str of strSplit) {
    console.log(`Split:${str}`);
}
//此时的strSplit是分割后的object
console.log(typeof strSplit);
strSplit = strSplit.toString().split(',', 3);
//split 方法有一个可选的第二个数字参数 —— 对数组长度的限制
console.log("分割，输出3个" + strSplit);
//调用带有空参数 s 的 split(s)，会将字符串拆分为字母数组：
console.log("拆分为字母数组" + strSplit.toString().split(""));

//arr.join(glue) 与 split 相反。它会在它们之间创建一串由 glue 粘合的 arr 项。
let arrJoin = ['this', 'is', 'test', 'Join'];

console.log("Typeof:" + typeof arrJoin);
let strJoin = arrJoin.join('*');
console.log("Typeof:" + typeof strJoin + strJoin);