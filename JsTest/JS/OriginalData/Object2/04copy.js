let user = {
    name: "John"
};

let admin = user;

console.log(user.name);
console.log(admin.name);

admin.name = "Pete";
console.log(user.name);
console.log(admin.name);

console.log("/******new obj**********/")
let a = new Object();
let b = new Object();
console.log(a == b);

console.log("/******deep Copy**********/")

let user2 =  {};
for (const key in user) {
    user2[key] = user[key];
}
console.table(user2);
user2.surname = "Hote";
console.log("user:");
console.table(user);
console.log("user2:");
console.table( user2);
