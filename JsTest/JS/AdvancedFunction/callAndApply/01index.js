function slow(x) {
    console.log(`Called with ${x}`);
    return x * 4;
}

function cachingDecorator(func) {

    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);

        return result;
    }
}

// cachingDecorator 是可重用的。

slow = cachingDecorator(slow);

slow(1);
console.log('again:', slow(1));
slow(2);
slow(2);
console.log('again:', slow(2));



