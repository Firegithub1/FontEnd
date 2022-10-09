let arr = [11, 20, 51, 82];

let result = arr.find((item) => item > 50);
console.log(result);

let resultIndex = arr.findIndex((item) => item > 80);
console.log(resultIndex);

let resultIncludes = arr.includes(20);
console.log(resultIncludes);
