function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error for ", src));

        document.head.append(script);
    })
}

let promise = loadScript("http:www.baidfjasalf;u.com");

promise.then(
    script => console.log(script.src),
    error => console.log(`Error:${error.message}`)
);