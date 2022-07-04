let id = Symbol("Demo01");
console.log(id.toString());
console.log(id.description);

console.log("********getOwnPropertySymbols**********");

let obj = {};
obj.aa  = "AAA";
let a  = Symbol("a");
let b = Symbol.for("BbAa");

obj[a] = "localSymbol";
obj[b] = "GlobalSymbol";
// return Array  自身存在的属性（keys）
let objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols[0])


console.log("******************");
let objNames = Object.getOwnPropertyNames(obj);
console.log(objNames[0]);
let arr = [1,3,4];
console.log(arr instanceof Object);
console.log(Reflect.ownKeys(arr));

console.log("******************");
// 自身属性中是否具有指定的属性(key)
console.log(obj.hasOwnProperty("aa"));
console.log(Object.has);