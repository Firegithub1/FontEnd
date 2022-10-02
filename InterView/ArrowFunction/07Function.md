````js
let fn = (name) => {
  console.log(name);
};
const f = new fn("nanjiu"); //error```
````

### new

- new 内部实现其实是分为以下四步：

- 新建一个空对象

- 链接到原型

- 绑定 this，执行构造函数

- 返回新对象

```js
function myNew() {
  // 1.新建一个空对象
  let obj = {};
  // 2.获得构造函数
  let con = arguments.__proto__.constructor;
  // 3.链接原型
  obj.__proto__ = con.prototype;
  // 4.绑定this，执行构造函数
  let res = con.apply(obj, arguments);
  // 5.返回新对象
  return typeof res === "object" ? res : obj;
}
```

### 没有 new.target

- new 是从构造函数生成实例对象的命令。
- ES6 为 new 命令引入了一个 new.target 属性，这个属性一般用在构造函数中，返回 new 调用的那个构造函数。
- 如果构造函数不是通过 new 命令或 Reflect.construct()调用的，new.target 会返回 undefined

- ⚠️注意：
    * new.target属性一般用在构造函数中，返回new调用的那个构造函数
    * 箭头函数的this指向全局对象，在箭头函数中使用new.target会报错
    * 箭头函数的this指向普通函数，它的new.target就是指向该普通函数的引用

```js
function fn(name) {
    console.log('fn:',new.target)
}

fn('nanjiu') // undefined
new fn('nanjiu')
/*
fn: ƒ fn(name) {
    console.log('fn:',new.target)
}
*/
let fn2 = (name) => {
    console.log('fn2',new.target)
}
fn2('nan') // 报错 Uncaught SyntaxError: new.target expression is not allowed here

```
