function sayHi() {
    console.log('hi');
    sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
sayHi();
console.log(`Called ${sayHi.counter} times`);


console.log('/*********************/');
function makeCounter() {

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
//函数变量只能在函数内部或闭包内调用
// 函数属性，复制函数表达式后可以外部调用
