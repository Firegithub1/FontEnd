let arr = [1, 53, 72, 72, 57, 22, 43, 54];
let arr2 = arr.sort((a, b) => a - b);
console.log(arr2); //0->999
let arr3 = arr.sort((a, b) => b - a);
console.log(arr3); //999->0
