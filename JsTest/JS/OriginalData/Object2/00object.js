let user = {
    name: "zhangsan",
    age: 223,
    isAdmin: true,
};

for (const key in user) {
    console.log(key, user[key]);
}
console.log('***********delete**********');
delete user.age;

for (const key in user) {
    console.log(key, user[key]);
}
console.log('*********user[x] = y************');
var project = "project";
var SoftwareEngineer = "SoftwareEngineer";
user[project] = SoftwareEngineer;

for (const key in user) {
    console.log(key, user[key]);
}
console.log('**********fruit 覆盖 ***********');
let fruit = 13;

let bag = {
    fruit: 5,
    // 属性名是从 fruit 变量中得到的
};
bag[fruit] = fruit;

console.log('bag[fruit]',bag[13]);