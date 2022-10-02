Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 500)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // 1

// 只等待第一个settled的Promise并获取结果(不论成功、失败)
// 忽略其它结果