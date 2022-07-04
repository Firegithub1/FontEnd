for (let i = 0; i <=5 ; i++) {
    setTimeout(() => {
          console.log("let:i:", i);
    }, i*1000);
}

console.log('/************/');

for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log("var:i:", i);
    }, i * 1000);
}

