let target ={
    a:'11',
    b:'22'
};
let source ={
    c:'333',
    d:'444'
};
function mixin(a,b) {
    let result = Object.assign(a,b);
    return result

}
console.log("target",mixin(target,source));

// console.log("result",result);