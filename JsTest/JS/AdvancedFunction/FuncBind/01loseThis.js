let user = {
    firstname: "John",
    sayHi() {
        console.log(`Hello,${this.firstname}!`);
    }
};

let firstname = "Pete";
user.sayHi();


setTimeout(() => user.sayHi, 100);

// setTimeout(() => {
//     user.sayHi();
// }, 200);
