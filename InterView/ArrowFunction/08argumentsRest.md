## arguments

### 箭头函数没有自己的 arguments

### 箭头函数处于全局作用域中，则没有 arguments

```js
let fn = (name) => {
  console.log(arguments);
};
let fn2 = function (name) {
  console.log(arguments);
};
fn2(); // Arguments对象 [callee: ƒ, Symbol(Symbol.iterator): ƒ]
fn(); // 报错 Uncaught ReferenceError: arguments is not defined
```

- 因为箭头函数自身是没有 arguments 的，然后它会往上层作用域中去查找 arguments，由于全局作用域中并没有定义 arguments，所以会报错。

### 箭头函数处于普通函数的函数作用域中，arguments 则是上层普通函数的 arguments

```js
let fn2 = function (name) {
  console.log("fn2:", arguments);
  let fn = (name) => {
    console.log("fn:", arguments);
  };
  fn();
};
fn2("nanjiu");
```

## 可以使用 rest 参数代替

ES6 引入 rest 参数，用于获取函数不定数量的参数数组，这个 API 是用来替代 arguments 的，形式为...变量名，rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
let fn3 = (a, ...arr) => {
  console.log(a, arr); //1, [2,3,4,5,6]
};

fn3(1, 2, 3, 4, 5, 6);
```

需要 ⚠️ 注意的是：

rest 参数只能作为函数的最后一个参数

```js
// 报错
function f(a, ...b, c) {
  // ...
}
```


## rest 参数与 arguments 的比较：

- 箭头函数和普通函数都可以使用 rest 参数，而箭头函数不能使用 arguments
  接受参数 rest 比 arguments 更加灵活
  rest 参数是一个真正的数组，而 arguments 是一个类数组**对象**，不能直接使用数组方法

- 箭头函数不能重复函数参数名称

```js
function fn(name,name) {
    console.log('fn2:',name)
}
let fn2 = (name,name) => {
    console.log('fn',name)
}
fn('nan','jiu') // 'jiu','jiu'  覆盖
fn2('nan','jiu') // 报错

```
