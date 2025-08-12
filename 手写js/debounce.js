// 避免事件一段时间内重复触发，例如带查询的输入框，最后是等输入完再触发查询
// 这是第一次不执行
function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    let context = globalThis;
    // 如果存在就清空定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设置定时器
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 第一次执行
function debounce(fn, wait, flag = false) {
  let timer = null;
  return (...args) => {
    let context = globalThis;
    // 如果存在就清空定时器
    if (flag && !timer) {
      fn.apply(context, args);
      flag = false;
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设置定时器
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
