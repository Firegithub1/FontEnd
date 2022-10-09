// yield表达式可以暂停函数的执行
// yield本身没有返回值，或者说总是返回undefined
// yield返回的是{value:yield返回的值，done:true/false(执行状态)}
// next方法用于恢复函数执行
// next方法可以带一个参数，当作上一个yield表达式的返回值
function ajax(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        duration + "ms延时打印输出！，当前位于" + new Date().getSeconds() + "秒"
      );
      resolve(duration);
    }, duration);
  });
}

//
function* main() {
  const user = yield ajax(2000);
  console.log("user", user);

  const posts = yield ajax(5000);
  console.log("posts", posts);
}

function co(generator) {
  const g = generator();
  function handleResult(result) {
    if (result.done) return;
    result.value.then(
      (data) => {
        console.log("continue~~~~", data);
        handleResult(g.next(data));
      },
      (error) => {
        g.throw(error);
      }
    );
  }
  handleResult(g.next());
}

co(main);
// function* generator() {
//   yield 1;
//   yield 2;
//   return 3;
//   // 当 done: true 时，for..of 循环会忽略最后一个 value
// }

// let g = generator();
// let one = g.next();
// console.log(one);

// let two = g.next();
// console.log(two);

// let three = g.next();
// console.log(three);
