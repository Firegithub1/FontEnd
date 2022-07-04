let animal ={
    walk(){
        if(!this.isSleeping){
            console.log('I walk');
        }
    },
    sleep(){
        this.isSleeping = true;
    }
};

let rabbit = {
    name:"White Rabbit",
    __proto__:animal
};

rabbit.sleep();

console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
console.log(rabbit instanceof Array);