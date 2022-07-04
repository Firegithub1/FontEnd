// user-defined
let json1 = { age: 30 };
let json = JSON.stringify(json1);

try {
    let user = JSON.parse(json);
    console.log(user.name);

    // FIXME:JSON.parse 正常执行，但是缺少 name 属性对我们来说确实是个 error。
} catch (err) {
    console.log("error!!");
    console.log(err.name);
}

console.log("*/************");
let error = new Error("Things happen o_O");

console.log(error.name);
console.log(error.message);