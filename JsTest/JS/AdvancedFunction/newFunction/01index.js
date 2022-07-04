// eval();

let sum = new Function ('a','b','return a+b');

console.log(sum(1,2));


let say = new Function("let hoho = 1314; let gxgx = 520; console.log('gghhh:',gxgx,hoho);");
say();