// 核心同call ，但是apply传的参数是数组
Function.prototype.myApply = function (thisArg, args = []) {
  if (typeof this != "function") {
    throw new Error("apply must be a fucntion");
  }
  if (thisArg === undefined || thisArg === null) {
    thisArg = globalThis;
  } else {
    thisArg = Object(thisArg);
  }
  // 判断参数是不是数组
  if (!Array.isArray(args)) {
    throw new Error(
      "second argument to Function.prototype.apply must be an array"
    );
  }
  thisArg.fn = this;
  let res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
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
obj.add.myApply(obj2, [2]);
