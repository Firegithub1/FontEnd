let User = class myClass {
    sayHi(){
        console.log("hi~");
    }
    sayClass(){
        console.log(myClass);
    }
};

new User().sayHi();
// console.log(myClass);
console.log("*******dynamic**********");
function makeClass(phrase) {
    return class{
        sayHello(){
            console.log(phrase);
        }
    };
}

let User02 = makeClass("User02");
let user02 = new User02();
user02.sayHello();