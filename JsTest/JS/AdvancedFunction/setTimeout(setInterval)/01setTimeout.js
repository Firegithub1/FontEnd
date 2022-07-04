// 1.传入一个函数，但不要执行它
// 期望得到一个对函数的引用
function sayHi() {
    console.log("hello");
}

setTimeout(sayHi, 3000);

function sayHi2(phrase, who) {
    console.log(phrase + ',' + who);
}

setTimeout(sayHi2, 1000, "hello", "John");

// 使用匿名函数,而不是代码块
setTimeout(() => console.log('hello3'), 2000)

let timeID = setTimeout(() => console.log('hello4'), 2000);

console.log(timeID);

clearTimeout(timeID);

// 嵌套的 setTimeout 能够精确地设置两次执行之间的延时，而 setInterval 却不能。

function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    })
}
printNumbers(5, 8);
// 一个副作用。如果函数引用了外部变量（译注：闭包），那么只要这个函数还存在，外部变量也会随之存在。