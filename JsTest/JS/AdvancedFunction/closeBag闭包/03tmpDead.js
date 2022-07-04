let x = 2;
function func() {
    console.log(x);
    let x = 3;
}
func();

// 变量暂时无法使用的区域（从代码块的开始到 let）有时被称为“死区”。