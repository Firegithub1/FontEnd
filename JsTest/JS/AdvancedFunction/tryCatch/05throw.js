let json = '{"age":29}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
} catch (err) {
    console.log("JSON Error;" + err.message);
}
