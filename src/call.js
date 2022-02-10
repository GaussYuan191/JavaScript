// f.call(obj)核心就是把函数f挂载到obj上,执行obj.f()的时候，f中的this就指向obj,执行完后
// 删除挂载在obj上的函数f
Function.prototype.myCall = function (thisArg, ...args) {
  // 判断挂载的是不是函数
  if (typeof this != "function") {
    throw new Error("The caller must be a function");
  }
  // 没有没有传入对象，就挂载在全局对象上
  if (thisArg === undefined || thisArg === null) {
    thisArg = globalThis;
  } else {
    // 把参数转成对象
    thisArg = Object(thisArg);
    // 把函数挂载到对象上，this指向被调用的函数
    thisArg.fn = this;
    // 执行该函数
    let res = thisArg.fn(...args);
    // 删除挂载的函数
    delete thisArg.fn;
    // 返回结果
    return res;
  }
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
obj.add.myCall(obj2);
