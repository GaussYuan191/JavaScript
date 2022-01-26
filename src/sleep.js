// 睡眠函数
function sleep(time) {
  return new Promise((resolve, reject) =>{
    setTimeout(resolve, time);
  }
  )
}
console.log(1)
await sleep(4000);
console.log(2)