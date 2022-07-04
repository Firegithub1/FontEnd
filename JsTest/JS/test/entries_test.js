let teacher = {
    name: "zhangsan",
    age: 18,
    sex: "male"
}
console.log(teacher);
console.log("*******");

for (const key in teacher) {
    console.log(key, teacher[key]);
    // console.log("\n");
}

console.log("********");
let temp = Object.entries(teacher);
console.log(temp);

console.log("********");