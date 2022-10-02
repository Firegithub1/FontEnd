let fn = name => {
    console.log(name)
}
let fn2 = function(name) {
    console.log(name)
}
console.log(fn.prototype) // undefined
console.dir(fn2.prototype) // {constructor: ƒ}

