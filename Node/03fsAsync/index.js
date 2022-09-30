const fs = require("fs");
// 同步
fd = fs.open("hello2.txt", "w", function (err, fd) {
  if (!err) {
    fs.write(fd, "Next Next good good study DAY DAY UP UP", 2, function () {
      console.log("fffff",fd);
      fs.close(fd);
    });
  }
});
