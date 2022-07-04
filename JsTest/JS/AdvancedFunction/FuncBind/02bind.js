let user = {
    firstName: "John"
};

function func() {
    console.log((this.firstName));
}

func();

user.f = func;

user.f();
console.log('/********/');
let funcUser = func.bind(user);
funcUser();
// let funcUser = func.bind(user);
