let timeID = setInterval(()=>console.log('tick'),2000);

setTimeout(()=>{clearInterval(timeID);console.log('stop');},5000)

function printNumbers(from, to) {
    let current = from;

    let timeId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timeId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 8);