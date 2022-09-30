const fs = require("fs");
// 同步
fd = fs.openSync("hello.txt", "w");
let x = fs.writeSync(fd, "good good study DAY DAY UP UP",2);
console.log(x);
fs.closeSync(fd);