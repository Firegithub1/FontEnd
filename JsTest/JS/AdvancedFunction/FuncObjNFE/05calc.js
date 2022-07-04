// 函数属性
function makeCounter() {
    let count = 0;
    function counter() {
        return ++count;
    }
    counter.set = (value) => count = value;
    counter.decrease = () => --count;
    return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter.set(4));
console.log(counter.decrease());


// 任意数量的括号求和
// 闭包，返回函数创建时的环境的函数
console.log('/*******sum*******/');

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    }

    return f;
}

console.log(sum(3)(2)(4).toString());