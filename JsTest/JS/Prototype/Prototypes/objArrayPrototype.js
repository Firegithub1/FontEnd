let obj ={
    0:'Hello',
    1:'world',
    length:2,
};

obj.join = Array.prototype.join;

console.log(obj);
console.log('/**********/');
console.log(obj.join());
console.log('/**********/');
console.log(obj.join(','));
console.log(typeof obj.join(','));