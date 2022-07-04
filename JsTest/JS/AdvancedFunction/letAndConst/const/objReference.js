
// 冻结对象 Object.freeze()
const obj2 = Object.freeze({ prop: 11, name: "zhangsan" });

obj2.age = 19;  //不起作用
console.log("obj2:");
console.table(obj2);

obj2.surname = "liSi";
console.log("obj2:");
console.table(obj2);
console.log('/*************/');

// 彻底冻结
function freezeAll(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == 'object') {
            freezeAll(obj[key]);
        }
    })
}

function freezeAll22(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        if (typeof obj.key == 'object') {
            freezeAll(obj.key);
        }
    })
}


const obj3 = Object.freeze({ name: "liSi", girlfriend: { name: "xiaohong" } });


freezeAll(obj3);

obj3.girlfriend.surage = 13;
console.log("obj3:girlfriend");
console.table(obj3.girlfriend);

console.log('/***********/');


const obj33 = Object.freeze({ name: "liSi", girlfriend: { name: "xiaohong" } });

freezeAll22(obj3);

obj3.girlfriend.surage = 13;
console.log("obj33:girlfriend");
console.table(obj3.girlfriend);