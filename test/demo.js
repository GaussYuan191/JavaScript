setTimeout(()=>{
  console.log('setTimeout 执行')
},0)

const p = new Promise((resolve)=>{
   console.log('Promise执行')
   resolve()
})
p.then(()=>{
  console.log('Promise 回调执行')
})

process.nextTick(()=>{
  console.log('nextTick 执行')
})
console.log('代码执行完毕')