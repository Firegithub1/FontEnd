function sum(a) {

    function add(b) {

        return a + b;
    }

    return add;
}

let t = sum(1)(2);
console.log(t);