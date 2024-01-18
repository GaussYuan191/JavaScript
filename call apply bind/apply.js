// 核心同call 只是参数是数组

Function.prototype.apply2 = function(context, args = []) {
    if (typeof this !== 'function') {
        throw new Error('the caller must be a function');
    }
    // 绑定函数的对象
    const obj = context !== null || context !== undefined ? Object(context) : globalThis;
    obj.fn = this;
    const res = obj.fn(...args);
    delete obj.fn;
    return res;
}

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
  obj.add.apply2(obj2, [2]);
  