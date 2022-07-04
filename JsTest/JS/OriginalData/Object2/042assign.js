let user = {
    name: "John",
    age:28
};

console.log(Object.values(user));
let user2 = {};
for (const key in user) {
    user2[key] = user[key];
}11
console.table(user2);
user2.surname = "Hote";
console.table(user2);


console.log("/******deep Copy****(new obj,obj)******/")
let clone = new Object();

Object.assign(clone, user);
console.log("clone:");
console.table(clone);

clone.age = 19;

console.log("clone:");
console.table(clone);

console.log("user:");
console.table(user);

console.log("/****shallow Copy***(obj)*****/")

let shallow = new Object();

shallow = Object.assign(user);

console.log("shallow:");
console.table(shallow);

shallow.age = 20;
console.log("change shallow:");
console.table(shallow);


console.log("user:");
console.table(user);

console.log("********合并**********");
let merge = {};


console.log("user:");
console.table(user);


user2.name = "Pete";
console.log("user2:");
console.table(user2);
Object.assign(merge, user2, user);
//FIXME: 相同的属性，后面的obj 将前面赋值覆盖

console.log("merge:");
console.table(merge);