let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function inBetween(a, b) {
    return (x) => x >= a && x <= b;
}

console.log(arr.filter(inBetween(3, 6)));

function inArray(args) {
    return (x) => args.includes(x);
}

console.log(arr.filter(inArray([1, 2, 10])));