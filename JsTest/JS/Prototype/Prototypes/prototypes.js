let obj ={};
console.log(obj.toString === Object.prototype.toString);
console.log(obj.__proto__ === Object.prototype);

console.log(obj.__proto__.__proto__ === null);

String.prototype.show = function () {
   return this
};
console.log("BOOM!!".show());