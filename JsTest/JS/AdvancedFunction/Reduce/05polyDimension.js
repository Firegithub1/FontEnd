let arr = [[1, 3], [[3, 2], [5, 4, 5]]];

const newArr = (arr) => {
    return arr.reduce((pre, cur) =>
    pre.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
}
console.log(newArr(arr));


// const newArr = (arr) => {
//     return arr.reduce((pre, cur) =>
//         pre.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
// }

// console.log(newArr(arr));

// let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
// const newArr = function(arr){
//    return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
// }
// console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]