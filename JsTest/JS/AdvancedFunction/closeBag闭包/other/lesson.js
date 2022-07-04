let lessons = [{
        name: "jijyjp",
        lesson: "uujujpgz",
        time: 8
    },
    {
        name: "pguuhs",
        lesson: "qmdr",
        time: 7
    },
    {
        name: "vclixx",
        lesson: "cigxuueji",
        time: 8
    }
]


function show(a, b) {
    return function(v) {
        return v.time >= a && v.time < b;
    }
}
console.table(lessons.filter(show(7, 9)));