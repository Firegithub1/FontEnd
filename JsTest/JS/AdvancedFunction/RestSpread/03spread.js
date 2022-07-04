/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-18 09:50:04
 * @Description:
 *
 */

// spread 引用，对数组，字符串，可迭代对象

console.log('/**********Math***/');
console.log(Math.max(...arr));

console.log('/*******arr***arr2***/');
let arr2 = [6,3,1];
console.log(Math.max(...arr,...arr2));

console.log('/********conventional********/');
console.log(Math.max(5,...arr2,...arr,999));

console.log('/********merge array********/');
let merge = [0,...arr2,...arr];
console.log(merge[5]);

console.log('/********string********/');
let str = 'helloString'
console.log([...str]);

// Array.from 将可迭代对象转换为数组
console.log( Array.from(str) );

// 不过 Array.from(obj) 和 [...obj] 存在一个细微的差别：

// Array.from 适用于类数组对象也适用于可迭代对象。
// Spread 语法只适用于可迭代对象。
// 因此，对于将一些“东西”转换为数组的任务，Array.from 往往更通用。