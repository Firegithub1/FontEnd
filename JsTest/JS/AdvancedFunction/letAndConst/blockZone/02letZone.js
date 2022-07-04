function f1() {
    let n = 3;
    if (true) {
        let n = 5;
    }
    console.log("n：",n);
}

f1();

function f2() {
    var p = 3;
    if (true) {
        var p = 5;
    }
    var p =1;
    console.log("p：", p);
}
f2();
// var可以重复声明同名变量
// let可以在不同作用域中声明同名变量