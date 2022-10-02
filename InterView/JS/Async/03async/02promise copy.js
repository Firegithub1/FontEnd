// new Promise((resolve, reject) => {
//   console.log(11);
//   resolve();
// }).then((result) => {
//     console.log('this is then');
//     reject();
// }).catch((err) => {
//     console.log('thennnnnnnnnnn is errrrrrrrrrrrrrr');
// });;

function A(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 200), n);
  });
}

function step1(n) {
  console.log(`step is ${n}`);
  return A(n);
}
function step2(n) {
  console.log(`step2222 is ${n}`);
  return A(n);
}
function step3(n) {
  console.log(`step3333333333 is ${n}`);
  return A(n);
}

step1(100)
  .then((time2) => {
    return step2(time2);
  })
  .then((time3) => {
    return step3(time3);
  })
  .then((result) => console.log("final is ", result));

//将回调函数的嵌套，改成链式调用
//每个异步函数执行完成后，再执行下一个then函数

// 只是回调函数的改进，使用then()避免了嵌套，更为直观
// 代码变得冗余，语义化并不强
