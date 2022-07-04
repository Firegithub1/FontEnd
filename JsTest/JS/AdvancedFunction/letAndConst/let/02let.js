var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = () => console.log(i);
}

a[3]();
a[4]();


// for循环还有一个特别之处，
// 就是设置循环变量的那部分是一个父作用域，
// 而循环体内部是一个单独的子作用域。

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}