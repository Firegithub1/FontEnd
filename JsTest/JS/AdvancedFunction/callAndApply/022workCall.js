let worker = {
    someMethod() {
        return 2;
    },
    show(x) {
        //    return this.mounted(x);
        return x * this.someMethod(); // (*)
    }
};
function decorator(func) {
    let cache = new Map();

    return function (x) {

        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x);

        cache.set(x, result);
        return result;
    };
}

worker.show = decorator(worker.show);

console.log(worker.show(2)); // 工作正常
console.log(worker.show(2)); // 工作正常，没有调用原始函数（使用的缓存）