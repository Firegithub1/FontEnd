function a() {
    let i =0;
    return function b() {
        var b =1;
        console.log("i",i++);
        console.log("b",b++);
    }
}

let c = a();
c();
c();
