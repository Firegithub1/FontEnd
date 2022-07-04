let lessons = [
    {
        lessons: "计算机组成原理",
        click: 20,
        price: 30
    },
    {
        lessons: '网络安全',
        click: 43,
        price: 67
    },
    {
        lessons: 'C程序设计',
        click: 39,
        price: 66
    }
];

function order(field, type = 'asc') {
    return function (a, b) {
        if (type == 'asc') {
            return a[field] > b[field] ? 1 : -1;
        }
        return a[field] > b[field] ? -1 : 1;
    }
}

console.table(lessons.sort(order("price", 'asc')));