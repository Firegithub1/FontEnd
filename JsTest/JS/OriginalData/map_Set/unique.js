/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-29 18:18:10
 * @Description:
 *
 */
function unique(arr) {
    return Array.from(new Set(arr));
    // let set = new Set();
    // for (const iterator of arr) {
    //     if (set.has()) {
    //         set.add(iterator);
    //     }
    // }
    // let str = [];
    // for (const iterator of set) {
    //     str[str.length] = iterator;
    // }
    // return str;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));