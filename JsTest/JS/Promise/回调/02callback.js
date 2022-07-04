function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load for ${src}`))
    document.head.append(script);
}
// FIXME:回调地狱、厄运金字塔
loadScript('1.js',(error,script)=>{
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js',(error,script)=>{
            if (error) {
                handleError(error)
            } else {
                loadScript('3.js',(error,script)=>{
                    // ...
                    // ...download all script to continue
                });
            }
        });
    }
});