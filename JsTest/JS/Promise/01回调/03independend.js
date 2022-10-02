loadScript('1.js',step1);
function step1(err,script) {
    if (err) {
        handleError(err);
    } else {
        // ...
        loadScript('2.js',step2);
    }
}

function step2(err,script) {
    if (err) {
        handleError()
    } else {
        loadScript('3.js',step3)
    }
}