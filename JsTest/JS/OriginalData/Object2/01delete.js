let user = new Object();
user.name = "John";
user.surname = "Smith";
console.log(user.name);

console.log("/****delete*******/");
delete user.name;
console.log(user.name);

console.log("/****delete*******/");
user.name = "Pete";
console.log(user.name);
