// 1.声明函数时使用

function showName(firstName,lastName,...title) {
    console.log(firstName,' ',lastName);
    console.log(title.length);
}

showName("Pete","LiSi","WhWu","WhNiMa");

// Rest 参数必须放到参数列表的末尾
function f(arg1, ...rest, arg2) { // arg2 在 ...rest 后面？！
  // error
}

