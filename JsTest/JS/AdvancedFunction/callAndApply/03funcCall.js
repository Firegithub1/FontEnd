function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let Admin = { name: "Admin" };


sayHi.call(user);
sayHi.call(Admin);


console.log('/****arguments*******/');
function sayHello(phrase) {
    console.log("hello", ':' + this.name+phrase);
}

let user02 = { name: "Pete" };

sayHello.call(user02, 'nice~');