let arr = [[0,1],[2,3],999,[7,6]];

let newArr = arr.reduce((pre,cur)=>{
    return pre.concat(cur);
},[]);

console.log(newArr);