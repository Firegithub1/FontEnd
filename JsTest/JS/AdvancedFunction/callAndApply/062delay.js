function f(x) {
    console.log(x);
}

function delay(f, times) {
    return function () {
        setTimeout(() => f.apply(this, arguments), times);
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"