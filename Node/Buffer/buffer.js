let str = "this is 0 1 2";
let str2 = "1111"; //1个byte
let str3 = "一二三"; //3个byte

console.log("**********str11111*************");
let buf1 = Buffer.from(str);
console.log(buf1);  //输出二进制文件（控制台以16进制表示）
console.log(buf1.length);

console.log("**********str22222*************");
let buf2 = Buffer.from(str2);
console.log(buf2);
// console.log(buf2.toString(2));

console.log("*********str333**************");
let buf3 = Buffer.from(str3)
console.log(buf3);

console.log(buf3.toString());
