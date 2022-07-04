let animal = {
    eats: true
    , walk() {
        console.log("Animal Walk");
    }
};
let rabbit = {
   __proto__:animal
};

rabbit.walk = function () {
    console.log("Rabbit! Bounce-Bounce!");
}

console.log(rabbit.eats);
// console.log(rabbit.walk());
rabbit.walk();
