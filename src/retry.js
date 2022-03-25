// 请求重试
// 最常见的方式
// request().catch(err => request())
// 多个
// request().catch(err => request()).catch(err => request())
// 封装函数 请求的函数 请求的次数
// async function retry(asyncRequest, times) {
//   try {
//     return await asyncRequest();
//   } catch (err) {
//     if (--times) {
//       return retry(asyncRequest, times);
//     } else {
//       throw err;
//     }
//   }
// }

function sleep(delay) {
  return new Promise((reslove, reject) => {
    setTimeout(reslove, delay);
  })
}
// 普通写法
// function retry(asyncRequest, times, delay) {
//   return asyncRequest().catch((err) => {
//     if (--times) {
//       return sleep(delay).then(() => retry(asyncRequest, times, delay));
//     } else {
//       throw err;
//     }
//   })
// }
// async, await写法
async function retry(asyncRequest, times, delay) {
  try {
    return await asyncRequest();
  } catch(err) {
    if (--times) {
      await sleep(delay);
      return await retry(asyncRequest, times);
    } else {
      throw err;
    }
  }
}
function fn() {
  return new Promise((reslove, reject) => {
    reject("error")
  })
}
retry(fn, 2).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})