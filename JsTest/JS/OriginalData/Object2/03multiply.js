let salaries = {
    John:100,
    Alice:200,
    Pete:130
};

function addtion(obj) {
    let count =0;
    for (const key in obj) {
        count +=obj[key];
        }
        return count;
}


function multiply(obj) {
    for (const key in obj) {
        obj[key] *=2;
    }
}
console.log(addtion(salaries));
multiply(salaries);
console.table(salaries);