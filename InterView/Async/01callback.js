function callBack(x) {
  function callBack2() {
    console.log(x);
  }
  if (x > 1) {
    callBack2();
  } else {
    return 1;
  }
}

callBack(3);
let x = callBack(1);
console.log(x);


// 简单，容易理解和部署

//不利于代码的阅读和维护，各部分之间高度耦合，流程会很混乱