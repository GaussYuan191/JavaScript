// bind 返回一个函数，且this的指向已经改变，之后不会发生变化

Function.prototype.myBind = function (thisArg, ...args1) {
  if (typeof this != "function") {
    throw new Error("the caller must be a ");
  }
  const fnBind = this;
  return function fnBound(...args2) {
    // 如果是通过new调用的
    if (this instanceof fnBound) {
      return new fnBound(...args1, ...args2);
    } else {
      return fnBind.apply(thisArg, [...args1, ...args2]);
    }
  };
};
let obj = {
  a: 2,
  b: 4,
  add: function () {
    console.log(this.a + this.b);
  },
};
let obj2 = {
  a: 4,
  b: 3,
};
obj.add.myBind(obj2)();
