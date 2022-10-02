// 箭头函数不适用场景
// 对象方法，且方法中使用了this
var name = "南玖";
var person = {
  name: "nanjiu",
  say: function () {
    console.log("say:", this.name);
    // 普通函数
    // this指向调用它的对象
  },
  say2: () => {
    console.log("say2:", this.name);
    // 对象不构成单独的作用域
    // this指向全局对象，因此不会得到预期结果
  },
};

person.say(); // say: nanjiu
person.say2(); //say2: 南玖

// 当函数需要动态this时
var button = document.querySelector(".btn");
button.addEventListener("click", () => {
  this.classList.toggle("on");
  //   箭头函数定义时就永远指向上一层作用域中的this(修改成普通函数)
});