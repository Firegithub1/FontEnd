let lessons = [{
        lesson: "计算机组成原理",
        click: 29,
        price: 30
    },
    {
        lesson: "网络安全",
        click: 43,
        price: 67
    },
    {
        lesson: "C程序设计",
        click: 39,
        price: 66
    }
];

function order(field, type = "asc") {
    return function(a, b) {
        if (type == "asc") {
            return a[field] > b[field] ? 1 : -1;
        }
        return a[field] > b[field] ? -1 : 1;
    }
}

console.table(lessons.sort(order("price", "desc")));


// lessons.order = function(kind, type) {
//     if (type == "asc") {
//         return sort(function(a, b) {
//             return a[kind] > b[kind] ? 1 : -1;
//         })
//     } else if (type == "dec") {
//         return this.sort(function(a, b) {
//             return a[kind] > b[kind] ? -1 : 1;
//         })
//     }
// }