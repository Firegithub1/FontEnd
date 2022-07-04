function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }
console.log('/*********f1**********/');
console.log(f1.length);
console.log('/*********f2**********/');
console.log(f2.length);
console.log('/*********many**********/');
// rest 参数不参与计数
console.log(many.length);

console.log('/*********ask**********/');
function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (const handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}

ask(true, () => console.log('you said yes'),
    result => console.log(result));
    // 对于积极的回答，两个 handler 都会被调用
    // 对于负面的回答，只有第二个 handler 被调用