// 函数柯里化
// 有默认参数的函数用不了柯里化
function adds(a = 0, b = 0, c = 0) {
  return a + b + c;
}
let add = (a, b, c) => a + b + c;
// fn.length 表示传入函数的参数的个数, args.length,表示curry，传入的参数的个数
// 如果函数的参数大于传入参数的个数就递归调用柯里化函数
function curry (fn, ...args) {
  return fn.length > args.length ? (...args2) => curry(fn, ...args, ...args2) : fn(...args)
}

console.log(typeof add);
let newAdd = curry(add, 1);
console.log(newAdd(3, 5));
