// 函数调用扁平化
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
function compose(...fn) {
  return fn.reduce((result, it) => {
    return (...args) => {
      return result(it(...args));
    }
  }, it => it);
}
let a = compose(fn1);
console.log(a(1))