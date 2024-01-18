// 立即执行 传参为顺序传参
// f.call(obj) 核心是把f函数挂在obj上, 执行完后再删除
Function.prototype.call2 = function (context, ...args) {
  // 判断是不是函数调用
  if (typeof this !== "function") {
    throw new Error("The caller must be a function!");
  }
  // 判读是不传了绑定的obj, globalThis是es2020的新特性，表示一个全局对象
  let obj =
    context !== null || context !== undefined ? Object(context) : globalThis;
  // 把函数绑到obj上
  obj.fn = this;
  // 执行函数
  const res = obj.fn(...args);
  // 删除绑定的函数
  delete obj.fn;
  return res;
};
