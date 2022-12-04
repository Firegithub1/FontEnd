let obj = {
  a: 1,
  b: 2,
  c: 3,
};
delete obj.b;
obj.b = null;
console.info(obj);

function a() {
  y = function () {
    X = 2;
  };

  return function () {
    var x = 3;
    y();
    console.log(this.x);
  }.apply(this.arguments);
}
let t = a();
console.log(t);
