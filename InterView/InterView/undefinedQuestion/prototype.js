let arr = [1];

console.log(arr.length === Array.prototype.length);
// false
console.log(arr.push === Array.prototype.push);
// true
console.log(typeof Array.prototype.__proto__ === 'function');
// false
console.log(arr.__proto__ === Array.prototype);
// true





