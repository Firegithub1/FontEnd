async function AA(n) {
  console.time("11");

  let s1 = await step1(n);
  console.timeEnd("11");
  console.time("22");

  let s2 = await step2(s1);
  console.timeEnd("22");

  let s3 = await step3(s2);

  console.log("final is it s3:", s3);

  return s3;
}

function A(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 200), n);
  });
}

function step1(n) {
  console.log(`step is ${n}`);
  return A(n);
}
function step2(n) {
  console.log(`step2222 is ${n}`);
  return A(n);
}
function step3(n) {
  console.log(`step3333333333 is ${n}`);
  return A(n);
}

let result = AA(100).then((x) => console.log(x));

//async 返回的是一个promise对象
// 函数需有返回值
