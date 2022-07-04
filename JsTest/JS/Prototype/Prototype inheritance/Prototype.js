let animal = {
    eats:true
    ,walk(){
        console.log("Animal Walk");
    }
};
let rabbit = {
    jumps:true
};
rabbit.__proto__ = animal;

console.log(rabbit.eats);
// console.log(rabbit.walk());
rabbit.walk();
