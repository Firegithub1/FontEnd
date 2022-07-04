class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json){
    let user = JSON.parse(json);
    if (!user.age) {
        throw new ValidationError("No field:age");
    }
    if(!user.name){
        throw new ValidationError("No field:name");
    }
    return user;
}
// try..catch 的工作示例
try {
    let user = readUser('{"age":25}');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data:"+err.message);
        // (else if)   but not (if)
    }else if (err instanceof SyntaxError) {
        console.log("JSON Synatax Error:"+err.message);
    }else{
        throw err;
    }
}