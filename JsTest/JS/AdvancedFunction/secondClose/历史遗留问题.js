let user = "theWindow";
let person = {
    user: "history Teacher",
    sex: "male",
    age: 19,
    show: function(){
        let This = this;
        return function(){
            return This.user;
        }
    }
}

let a = person.show();
console.log(a());