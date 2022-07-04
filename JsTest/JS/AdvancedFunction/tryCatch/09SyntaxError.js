class FormatError extends SyntaxError {
    constructor(message) {
        //    super(message);
        // super(stack);
        // this.name = "FormatError";
        // this.message = message;
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error");

console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);