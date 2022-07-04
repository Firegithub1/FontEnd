class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        // FIXME:this._name this.name
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("Pete");
console.log(user.name);
let user01 = new User("132");
console.log(user01.name);
