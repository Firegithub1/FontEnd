// (A,B)=>
function A() {
  return new Promise((resolve) => resolve(2));
}
function B() {
  return new Promise((resolve) => resolve(3));
}

function C() {
  A()
    .then((num) => {
      console.log(num);
      // resolve(B());
      return B();
    })
    .then((num) => console.log(num));
}
// console.log(C());
C();

// 获取a
// 再去获取b
// 最后获取c