let obj = {
    name: "John",
    age: 30
};

console.log('*******Object<>JSON*******');

let json = JSON.stringify(obj);
console.log(json);
// json = "'" + json + "'";
// console.log(json);

console.log('*******JSON<>Object*******');

let JO = JSON.parse(json);
console.log(JO);

console.log('**********SyntaxError*************');
let json2 = "{bad json}";

try {
    console.log("second");
    let user = JSON.parse(json2);
} catch (error) {
    console.log("bug!!!");
    console.log(error.name);
    console.log(error.message);
}