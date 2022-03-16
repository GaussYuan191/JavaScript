// 防抖 在第一次触发事件时不会立即执行函数，而是给出一个期限，
// 比如200ms，然后
// 如果在200ms内没有再次触发滚动事件，那么就执行函数
// 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时
// 效果: 如果短时间内大量触发同一个事件，只会执行一次函数
// 比如说 输入框搜索, 当用户正在输入的时候就不触发处理函数,等用户快输入完后才进行处理函数

// 第一次不执行
function debounce(fn, time) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
    console.log(timer);
  };
}

// 第一次执行
function debounce(fn, time, flag = true) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    // 第一次执行
    if (false && !timer) {
      fn.apply(this, args);
      flag = false;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}
