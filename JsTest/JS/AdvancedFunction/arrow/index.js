// function ask(question, yes, no) {
//     return question ? yes() : no();
// }

let ask = (question, yes, no) => question ? yes() : no();

ask("true",
    () => console.log("pemission"),
    () => console.log("Denied!"));