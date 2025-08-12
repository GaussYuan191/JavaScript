// 一个单位时间内，多次触发只能生效一次

function throttle(fn, delay) {
  let curTime = Date.now();
  return (...args) => {
    let context = globalThis;
    let nowTime = Date.now();
    if (nowTime - curTime >= delay) {
      fn.apply(context, args);
      curTime = Date.now();
    }
  };
}
