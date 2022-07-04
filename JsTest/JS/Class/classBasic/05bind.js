class Button {
    constructor(value) {
        this.value = value;
    }
    // click() {
    //     console.log(this.value);
    // }
    click = () => console.log(this.value);
}

let button = new Button("btn");

button.click();
console.log("/*******setTimeout*******/")
setTimeout(button.click, 1000);

console.log("/*******changeClick*******/")
console.log(Object.values(button));
