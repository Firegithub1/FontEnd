/*
 * @Author: YiFreerFiY
 * @Date: 2022-03-17 18:56:23
 * @Description:
 *
 */
console.log(`I'm handsome boy!`);
console.log('12345'.length);
console.log();
let a = "qwer";
let b = a.length;
let c = a.length;
console.log("this is " + b);
console.log("this is " + c);


let t = 0;

let str02 = 'Hi'
console.log(str02);
str02[1] = 'f';
console.log(str02);
str02 = 'I`m' + str + `boy!`;
console.log(str02[2].toUpperCase());

console.log(str.indexOf('a', 0));

let testWhile = `As sly as a fox,as strong as an ox`;
let target = `as`;
let pos = -1;
// while (pos = (testWhile.indexOf(target, pos + 1)) != -1) {
//运算符！= 优先级大于 = ，所以此处一直循环 pos = ()!=-1
while ((pos = testWhile.indexOf(target, pos + 1)) != -1) {
    console.log(pos);

}
console.log(str02.includes(2));
console.log(str02.startsWith("H"));
console.log(str02.endsWith("i"));

let str04 = "z".codePointAt();
console.log(`z：` + str04);
let str03 = String.fromCodePoint(90);
console.log("90:" + str03);

console.log();