function Rabbit(name) {
    this.name = name;
    console.log(name);
}
let rabbit = new Rabbit("whiteRibbit");


let rabbit2 = new rabbit.constructor("blackRibbit");