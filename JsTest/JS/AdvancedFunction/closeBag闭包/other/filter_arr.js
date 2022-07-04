let arr = [1, 6, 2, 9, 3, 1, 9, 5, 8, 3];

function select(a, b) {
    return function (v) {
        return v >= a && v < b;
    }
}

console.table(arr.filter(select(3, 5)));
