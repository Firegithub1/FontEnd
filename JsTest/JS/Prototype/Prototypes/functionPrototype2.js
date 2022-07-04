function f(a, b) {
    console.log(a + b);
}

// Function.prototype.defer = function (time) {
//     let f = this;
//     return function(...args){
//         setTimeout(()=> f.apply(this,args),time);
//     }
// }

Function.prototype.defer = function (time) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), time);
    }
}

f.defer(1000)(1, 3);