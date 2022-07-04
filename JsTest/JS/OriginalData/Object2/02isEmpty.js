let isEmpty = (object) => {
    for (const key in object) {
        return true;
    }
    return false;
}

let obj = {};

let t = isEmpty(obj);
console.log(t);

console.log("******obj.key = value******");
obj.key = "value";

let p = isEmpty(obj);
console.log(p);