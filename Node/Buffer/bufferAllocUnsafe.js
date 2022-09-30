
let buf2 = Buffer.allocUnsafe(10); //可能含有敏感数据，因为分配空间，不清除内  存
console.log(buf2);
buf2[0] = 11;
buf2[0] = 11;
console.log(buf2);
console.log(buf2[1] );//数字在页面或者控制台输出是10进制
console.log(buf2[1].toString(16));

