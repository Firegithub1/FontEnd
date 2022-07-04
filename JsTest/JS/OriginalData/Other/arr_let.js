// 我们有一个存放了名字和姓氏的数组
let arr = ["John", "Smith", "Alice"];

// 解构赋值
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname, secname] = arr;

console.log(`这是array To let : ${firstName},${surname},${secname}`);

// 这种语法叫做“解构赋值”，因为它通过将结构中的各元素复制到变量中来达到“解构”的目的。但数组本身是没有被修改的。
// 优化
let [firstName02, surname02, secname02] = "John Smith Baobo".split(' ');


let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// 改变 let {...} 中元素的顺序
let { a, width: b, title } = { title: "Menu", height: 200, width: 100 }

console.log(b); // Menu
console.log(a); // 100
console.log(title); // 200

// 冒号表示“什么值：赋值给谁”。上面的例子中，属性 width 被赋值给了 w，属性 height 被赋值给了 h，属性 title 被赋值给了同名变量。
// 对于可能缺失的属性，我们可以使用 "=" 设置默认值，如下所示：

let Obj = {
    name: "Alice",
    age: 19,
    sex: "female"
};

let { name_other, ...rest } = Obj;
console.log(rest[0]); //无效，对象不可以获取序列

let {...other } = Obj;
console.log(other);

let {...arr02 } = ["this", "is", "array"];
console.log(arr02[2]);

// let options02 = {
//     title02: "menu"
// };

// let { width = prompt("width?"), title03 = prompt("title?") } = options;

// console.log(title03);

let title04, width02, menu;
({ title04, width02, menu } = { title04: "Menu02", width02: 200, menu: 100 });
console.log(title04, width02, menu);

// test
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxsalaries = 0;
    let maxnum = null;
    // for (const key in salaries) {
    //     maxsalaries < salaries[key] ? (maxnum = key) : maxnum = maxnum;
    // }
    for (const [name, salary] of Object.entries(salaries)) {
        (maxsalaries < salary) ? maxnum = name: maxsalaries;
    }
    return maxnum;
}
console.log(topSalary(salaries));