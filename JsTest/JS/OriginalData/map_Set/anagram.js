/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-30 21:37:13
 * @Description:
 *
 */
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    console.log("***", map.values());
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

console.log("*****************");

function aclean02(arr) {
    let obj = {};
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index].toLowerCase()
            .split('')
            .sort()
            .join('');
        obj[element] = arr[index];
    }
    return Object.values(obj);
}


console.log(aclean02(arr));