let person = {
    user: "history",
    sex: "male",
    age: 19,
    show: function() {
        let This = this; //this指向调用值类型的(windows.a)
        return function() {
            return This.user;
        }
    }
}

let a = person.show();
console.log(a());