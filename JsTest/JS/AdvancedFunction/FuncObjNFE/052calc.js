function sum(a) {
    let sum = 0;
    function add(b) {
        sum += b;
        return add;
    }

    add.toString = function () {
        console.log(sum);
    }

    return add;
}

sum(3)(5)(554).toString();