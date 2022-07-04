let name = 123;

function makeUser (){
    return this;
}
// console.log(makeUser());
console.log(makeUser().name);

console.log("/***************/");

let calculator = {
    sum() {
        return this.a +this.b;
    },
    read(a,b) {
        this.a = a;
        this.b = b;
    }
};

calculator.read(3,4);
console.log(calculator);

console.log("/********class.sum*******/");
console.log(calculator.sum());