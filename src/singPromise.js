// 功能就是上一次请求没有做完，之后无响应
function singlePipe(promiseFn) {
  // TODO
  let flag = false;
  return async function foo (arg) {
    if (flag) return Promise.resolve('');
    flag = true;
    let res = await promiseFn(arg);
    flag = false;
    return res;
  }

}
// 模拟一次请求
function bar(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(data), 1000);
  })
}

const request = singlePipe(bar)

request(1).then((res) => console.log(res));
request(2).then((res) => console.log(res));
setTimeout(() => {
  request(3).then((res) => console.log(res));
}, 1001);