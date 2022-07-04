{
    {
        {
            {
                let insane = "hi~";
                { let insane = "hello~" }
            }
        }
    }
}
// IIFE(Immediately-invoked Function Expression)
// 立即执行函数表达式
;(function () {
    var tmp = "x";
    console.log(tmp);
})();

{
    let tmp = "tmp";
    console.log(tmp);

}