/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-30 22:06:58
 * @Description:
 *
 */
// 数组和字符串是使用最广泛的 内建 可迭代对象
let num = [1, 2, 3, 4, 5];

for (const iterator of num) {
    console.log(iterator);
}

console.log("**********");
for (const iterator of "test𝒳😂𩷶") {
    console.log(iterator);
}

console.log("**********");
// ## 使用展开运算符“...”
// 也可以将可迭代对象转换为真正的数组，而且更加简洁
let str02 = "𝒳😂";
let chars = [...str02];

console.log(chars[0]); // 𝒳

console.log("**********");
//通过构建迭代器  迭代对象
let range = {
    from: 1,
    to: 5
};

// 1. for..of首先调用这个：
range[Symbol.iterator] = function() {
    //返回迭代器对象（iterator object):
    //2. for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值

    return {
        current: this.from,
        last: this.to,

        // 3. next()在for..of的每一轮循环迭代中被调用
        next() {
            // 4. 它将返回{dome:...,value:...} 格式的对象
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let iterator of range) {
    console.log(iterator);
}

console.log("********");
// 显示调用迭代器（直接调用）
// 创建一个字符串迭代器，并”手动“从中获取值
let str = "iterator";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// Array.from
// 有一个全局方法 Array.from 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组。
// 然后我们就可以对其调用数组方法了。
let arrayLike = {
    0: "hello",
    1: "world",
    length: 2
};

let arr = Array.from(arrayLike);

console.log(arr.pop());

console.log("*********");
let strArrFrom = Array.from(str02);
console.log(strArrFrom[0]);