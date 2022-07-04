try {
    console.log('try');
    if (true) {
        bad_Code();
    }
} catch (err) {
    console.log("catch");
} finally {
    console.log('finally');
}
console.log('/***********************/');
function func() {
    try {
        // 等待finally~
        return 1;
    } catch (err) {

    }finally{
        // return 前先执行 finally
        console.log("finaally~");
    }
}
console.log(func());
