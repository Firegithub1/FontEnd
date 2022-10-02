var name = '南玖'
var person = {
    name: 'nanjiu',
    say: function() {
        console.log('say:',this.name)
    },
    say2: () => {
        console.log('say2:',this.name)
    }
}
person.say() // say: nanjiu
person.say2() // say2: 南玖
// this永远指向它定义时所在的上层作用域，所以say2的this应该指向的是全局window


console.log(name); // 南玖;

// 普通函数来说，内部的this指向函数运行时所在的对象

// 箭头函数，内部的this就是定义时上层作用域中的this。
// 也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。

//我们也可以通过Babel 转箭头函数产生的 ES5 代码来证明箭头函数没有自己的this，而是引用的上层作用域中this。
