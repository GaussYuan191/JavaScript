// 节流 一段时间， 函数只执行一次，高频事件触发，节流会稀释函数的执行频率
// 基于时间戳实现
function throttle(fn, time) {
  let pre = 0;
  return function (...args) {
    let now = Date.now();
    if (now - pre > time) {
      fn.apply(this, args);
      pre = now;
    }
  };
}
// 基于定时器
function throttle(fn, time) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, time);
    }
  };
}
