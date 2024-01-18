// 改变this后，返回一个函数 传参为顺序
Function.prototype.bind2 = (context, ...args1) => {
  // 判断一下是不是函数调用
  if (typeof this !== "function") {
    throw new Error("the caller must be a function");
  }
  const funBind = this;
  return function fnBound(...args2) {
    // 如果是当做构造函数使用
    if (this instanceof fnBound) {
      return new fnBound(...args1, ...args2);
    } else {
      return funBind.apply(context, [...args1, ...args2]);
    }
  };
};
