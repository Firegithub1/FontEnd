function throttle(f, ms) {

    let isThrottled = false,
        savedArgs, savedThis;
        // console.log(savedArgs);
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;
        f.apply(this, arguments);

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}

function f(a) {
    console.log(a);
}
let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);