// FIXME:没有参数，可以省略（）
let user = new Object;
console.log(user instanceof Object);
user.name ="hai~";
console.log(user)
console.log(user.name);
console.log("***********");
// FIXME:没有参数，可以省略 new
let user2 = Object ();
user2.name = "hello~";
console.log(user2 instanceof Object);
console.log(user2)
console.log(user2.name);
console.log("***********");

// FIXME:没有参数，可以省略（）
let user3 = Object;
user3.name = "obj~";
console.log(user3 instanceof Object);
console.log(user3)
console.log(user3.name);

