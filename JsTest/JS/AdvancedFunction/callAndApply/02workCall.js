let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        //CPU Overload
        console.log("called With", x);
        return x * this.someMethod();
    }
};

function cachingDecorate(func) {
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

console.log(worker.slow(1));

// worker.slow = cachingDecorate(worker.slow);

// console.log(worker.slow(2));

let func = worker.slow;

func(2);



