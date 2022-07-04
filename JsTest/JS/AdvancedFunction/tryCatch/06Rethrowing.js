let json = '{ "age": 30 }'; // 不完整的数据

try {
    user = JSON.parse(json); // <-- 忘记在 user 前放置 "let"
} catch (err) {
    console.log("JSON Error:" + err);
}

console.log('/******** instanceof  判断错误类型***********/');
// try {
//     user = {};
// } catch (err) {
//     if (err instanceof ReferencError) {
//         console.log("ReferencError");
//     }
// }

console.log('/*********************/');
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data no name");
    }
    blabla();
    // 抛出不知名bug
    console.log("1");
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("JSON Error:" + err.message);
    } else {
        throw err;
    }
}

console.log('/*********throw************/');
try {
    let user = JSON.parse(json);
    blabla();
    // 抛出不知名bug
    // if (!user.name) {
    //     throw new SyntaxError("Incomplete data no name");
    // }
    console.log(user.name);
} catch (err) {
    if (!err instanceof SyntaxError) {
        console.log("JSON Error:" + err.message);
    } else {
        // throw err;
        console.log("External catch got:"+err);
    }
}