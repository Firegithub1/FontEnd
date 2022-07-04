function f() {
    console.log("hello");
}

Function.prototype.defer = function (time) {
    console.log(this);
    setTimeout(this,time);
};

f.defer(1100);