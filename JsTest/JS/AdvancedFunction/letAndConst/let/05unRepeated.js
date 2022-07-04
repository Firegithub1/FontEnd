console.log('error');

// function func() {
//     let a = 3;
//     var a = 4;
// }
console.log('error');

// function func1() {
//     let a = 1;
//     let a = 111;
// }
console.log('error');

// function func2(arg) {
//     let arg;
// }
// // 位于同一作用域下
// func2();


console.log('true');

function fun3(arg) {
    {
        let arg = 3;
        console.log(arg);
    }
}
fun3();
