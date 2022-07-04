let arr = [1, 4, 54, 543, 6, 36, 3, 63, 6, 36];

function selector(a, b) {
    return (v) => { return v >= a && v < b };
}

console.log(arr.filter(selector(5,88)));