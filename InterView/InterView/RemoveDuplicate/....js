let arr = [1, 5, 8, 3, 8, 3, 8, 6, 28];
let newArr = [...new Set(arr)].sort((a, b) => { return a - b; });
console.log(newArr);

function uniqueEasy(arr) {
    if(!arr instanceof Array){
        throw Error("current input isn't array");
    }
    let list = [];
    let object = {};
    arr.forEach(element => {
       if (!object[element]) {
            list.push(element);
            object[element] = true;
       }
    });
    return list.sort();
}
console.log(uniqueEasy(arr));