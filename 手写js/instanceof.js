// 用于判断变量类型 通过原型链判断
// 最后判断一下 rightObj是个对象或函数

function isInstanceof(leftObj, rightObj) {
  let proto = Object.getPrototypeOf(leftObj);
  const prototype = rightObj;

  while (proto) {
    if (proto == prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}
