function work(a, b) {
    return console.log(a + b);
}

function spy(func) {
    function wrapper(...args) {
        console.log("...args:", ...args);

        console.log("args:", args);
        let type = Array.isArray(args);

        console.log("typeof args:", type);
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);
work(3, 5);
for (const args of work.calls) {
    console.log("call:", args.join());
}