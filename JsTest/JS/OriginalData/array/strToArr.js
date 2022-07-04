let str = 'Hand some';
let arr01 = str.split(" ");
console.log("arr01:" + arr01);

let arr02 = Array.from(str);
console.log("arr02:" + arr02);

let arr03 = [...str];
console.log("arr03:" + arr03);

for (var i = 0; i < 5; i++) {
    setTimeout(
        function() {
            console.log(new Date, i);
        }, 1000);
}

console.log("first", new Date, i);


for (var j = 0; j < 3; ++j) {
    setTimeout(function() {
        console.log(j);
    }, 500);
}


// for (var k = 0; k < 3; ++k) {
//     setTimeout(function(k) {
//         console.log(k);
//     }(k), 1000);
// }