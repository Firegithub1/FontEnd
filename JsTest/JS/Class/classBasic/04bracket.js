class User{
    ['say'+'Hi'](){
        console.log("Hi~");
    }
}

new User().sayHi();

console.log("*******field*******");

class myClass {
    name = "John";

    sayHi() {
        console.log("hi~",this.name,'!');
    }
    sayClass() {
        console.log(myClass);
    }
};

new myClass().sayHi();
new myClass().sayClass();

console.log("*******prototype*******");
console.log(myClass.prototype.name);

console.log("*******field*******");
