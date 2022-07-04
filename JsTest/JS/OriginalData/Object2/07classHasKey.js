let ladder = {
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;
    }
}

ladder.up().up().showStep();

ladder.down().showStep();

console.log("/***********/ ");

function bigUser() {
    this.name = "John";

    return {
        name:"Godzilla"
    };
}

console.log(bigUser());
console.table(bigUser());
console.table(bigUser().name);

console.log("/*****test userName******/ ");

let user = {
    name:"Pete"
};

user.rename = bigUser;
console.log("user:");
console.table(user);

console.log("Rename user:");
let inherite = user.rename();
console.table(user);


console.log("inherite:");
console.table(inherite);

