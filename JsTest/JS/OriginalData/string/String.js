/*
 * @Author: YiFreerFiY
 * @Date: 2022-03-18 12:20:32
 * @Description:
 *
 */
function ucFirst(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, str.length - 1) + "…" : str;

    // if (str.length < maxlength) {
    //     return str;
    // } else {
    //     return str.slice(0, maxlength - 1) + "…";
    // }
}
console.log(truncate("What I'd like to tell on this topic is:", 10));

function extractCurrencyValue(str) {
    return +str.slice(1);

}
console.log(extractCurrencyValue(`￥123`) === 123);