// 一个记住其外部变量并可以访问这些变量的函数。
function makeWorker() {
    // let name = 'Pete';
    return () => console.log(name);
}

let name = 'John';
let work = makeWorker();
work();