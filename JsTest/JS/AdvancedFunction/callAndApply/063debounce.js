function say(x) {
    console.log(x);
}

function debounce(func, ms) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        console.log(arguments); //类数组
        console.log(...arguments);  //数组

        timeout = setTimeout(() =>
            func.apply(this, Array.from(arguments)), ms);

    }
}
say(['testt', 2, 'fsf']); //[]

say = debounce(say, 1000);
say('testt',2,'fsf');  //只能识别到一个参数，需要添加中括号