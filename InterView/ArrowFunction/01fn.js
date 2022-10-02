let fn = () =>
  function () {
    console.log("abc");
  };
let fnn = fn();

fnn(); //abc

// 返回值是函数
