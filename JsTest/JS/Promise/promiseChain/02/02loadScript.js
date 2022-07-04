function loadScript(src) {
    return new Promise((resolve, reject) => {

        let script = document.createElement("script");
        script.src = src;
        script => resolve(script);
        script => reject(new Error("Script is false"));
        document.head.append(script);
    })
}

loadScript("01chain.js")
    .then(loadScript("02test01.js"))
    .then(loadScript("02test02.js"))
    .then(() => {
        one();
        two();
        three();
    })