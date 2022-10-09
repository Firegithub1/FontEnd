let param = "11";

function f1(params) {
  return function () {
    console.log(params);
  };
}
setTimeout(f1(param), 1000);

// setTimeout(function (param) {
//   console.log(param);
// }, 1000);
// //通过闭包可以实现传参效果
// function myfunc(param) {
//   return function () {
//     console.log(param);
//   };
// }
// var f1 = myfunc(1);
// setTimeout(f1, 1000);
