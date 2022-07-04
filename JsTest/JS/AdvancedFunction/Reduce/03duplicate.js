let arr = [1, 2, 34, 4, 42, 4, 24, 2, 4, 24, 2, 4];

let newArr = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        return pre.concat(cur);
        // pre.push(cur);
        // return pre;
    } else {
        return pre;
    }
}, []);

console.log("newArr:", newArr.sort((a, b) => a - b));
console.log("newArr:", [0, 10, 100, 1000].sort((a, b) => a - b));
console.log("newArr:", ["0", "10", "100", "1000", "30"].sort());

console.log('/**********/');

let aa = [3, 3, 5, 43, 53,];
console.log(aa.shift());
console.log(aa);
console.log("return ", aa.push(9));
console.log(aa);


