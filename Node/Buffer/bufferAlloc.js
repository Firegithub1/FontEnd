let str = "this is 0 1 2";

let buf2 = Buffer.alloc(10);
console.log(buf2);
buf2[0] = 11;
buf2[1] = 111;
buf2[2] = -56;
buf2[10] = "f"; //一旦确定，不可更改
console.log(buf2);
console.log(buf2[1] );//数字在页面或者控制台输出是10进制
console.log(buf2[1].toString(16));

