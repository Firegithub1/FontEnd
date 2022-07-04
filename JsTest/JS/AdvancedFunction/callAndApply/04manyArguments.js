let worker = {
    show(min, max) {
        return console.log(`min:${min},max:${max}  count:${min + max}`);
    }
};

function hash(args) {
    return args[0] + '+' + args[1];
}

function decorate(func) {
    let cache = new Map();

    return function () {

// FIXME:多调试输出

        console.log(arguments);
        let key = hash(arguments);
        console.log(key);
        if (cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    }
}

worker.show = decorate(worker.show);

worker.show(3, 5);


