// JavaScript 引擎会跟踪此类 rejection，在这种情况下会生成一个全局的 error。
// 如果你运行上面这个代码，你可以在控制台（console）中看到。
// 在浏览器中，我们可以使用 unhandledrejection 事件来捕获这类 error

new Promise(() => noSuchFunction())
    .then(() => console.log("none"));
console.log('/****************************/');
console.log("window's addEventListener");

window.addEventListener("unhandledrejection", function (event) {
    console.log(event.promise);
    console.log(event.reason);
});

new Promise(() => noSuchFunction())
    .then(() => console.log("none"));