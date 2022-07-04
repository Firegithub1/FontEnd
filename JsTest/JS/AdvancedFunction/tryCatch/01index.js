try {
    console.log('first');
    console.log('second');
    console.log('third');
} catch (err) {
    console.log('Bug!!');
}

console.log('/******simple*******/');
try {
    console.log('first');
    console.log(second);
    console.log('third');
} catch (err) {
    console.log('Bug!!');
}

console.log('/******setTimeout*******/');
setTimeout(function () {
    try {
        noSuchVariable;
    } catch {
        console.log(1111);
    }
}, 1000);

