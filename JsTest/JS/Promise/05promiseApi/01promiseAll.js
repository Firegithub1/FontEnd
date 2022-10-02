Promise.all([
    new Promise(resolve=>setTimeout(()=>resolve(1),3000)),
    new Promise(resolve=>setTimeout(()=>resolve(2),2000)),
    new Promise(resolve=>setTimeout(()=>resolve(3),1000)),
]).then(console.log);
// 一个失败，忽略全部结果，只返回error
// 默认接受promise数组，其它“按原样”传递给结果数组。
// 所以我们可以在方便的地方将准备好的值传递给 Promise.all