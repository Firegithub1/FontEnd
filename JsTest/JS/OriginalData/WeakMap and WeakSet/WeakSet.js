// WeakSet与对象存在与否密切相关
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let weakSet = new WeakSet();
for (const obj of messages) {
    weakSet.add(obj);
}




//******************* */
isRead = (messages) => {
    for (let i = 0; i < messages.length; i++) {
        if (weakSet.has(messages[i])) {
            console.log(`messages ${i} is true`);
        } else {
            messages[i] = new Date();
            console.log(`messages ${i} is false`);
        }
    }
}
isRead(messages)
console.log(weakSet.has(messages[0]));
// console.log(weakSet)
messages[0] = null;

console.log(weakSet.has(messages[0]));
console.log("********************")
    //******************* */
console.log(isRead(messages));

console.log(messages[0]);