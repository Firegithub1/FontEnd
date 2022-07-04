function f(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

class User extends f("hello"){};

let user = new User();
user.sayHi();