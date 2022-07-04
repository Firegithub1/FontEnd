var tmp = new Date();

function f() {
    console.log(tmp);  //variable improvement
    if (true) {
        var tmp = "hello world";
        console.log(tmp);

    }
}

f();
console.log(tmp);
console.log('/*************/');

var s = "hello";
for (var i = 0; i < s.length; i++) {
    console.log("s[i]:", s[i]);
}

console.log('/********i*****/');
console.log("i",i);