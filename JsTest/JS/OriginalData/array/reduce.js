// Array.reduce(function ( (total, currentValue, currentIndex, arr), initialValue) {})

let arr = [1, 3, 3, 4, 5, 45];

let total = arr.reduce(((total, arr) => total + arr), 2);
console.log(total);

let arr2 = [3,2,1];
let s = arr2.reduce(function (total,item,index,c) {
    console.log("total:",total);
    console.log("item:",item);
    console.log("index:",index);
    console.log("c:",c);
    return total+item;
},1);
console.log(s);