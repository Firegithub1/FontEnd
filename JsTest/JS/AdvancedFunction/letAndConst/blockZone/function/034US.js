// 严格模式下，函数只能声明在当前作用域的顶层。
'use strict';
// if (true) {
//     function ff() console.log("US1");
// };  //false

if (true) {
    function ff() { console.log("US1"); }
    ff();
};  //true

ff();  //false