let today = new Date();
let month = new Map();
month.set(1, "Jan")
    .set(2, "Feb")
    .set(3, "Mar")
    .set(4, "Apri")
    .set(5, "May");

console.log(`Today is ${today.getDay()}, ${month.get(today.getMonth()+1)},${today.getDate()}:${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

let start = Date.now();
for (let index = 0; index < 19999; index++) {
    let i = index;
}
let end = Date.now();
console.log(`耗时${end-start}ms`);

//对一个字符串使用Date.parse
let time1 = new Date(Date.parse('2012-12-31T12:12:12'));
console.log(time1);
console.log(time1.getDay());

