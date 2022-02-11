// 创建一个对象
Object.prototype.myCreate = function (proto, propertiesObject) {
  // 参数检测
  if (typeof proto != "object" && proto !== null) {
    throw new Error("the first param must be an object or null");
  }
  // 参数检测
  if (propertiesObject === null) {
    throw "TypeError";
  }
  // 指定原型
  function F() {}
  F.prototype = proto;
  const obj = new F();
  // 处理传参 null 的情况
  if (proto === null) {
    obj.__proto__ = proto;
  }
  // 如果有第二个参数，就返回对象指定属性
  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};

function Person(name) {
  this.name = name;
}
let obj = new Person("李四");
console.log(obj);
console.log(Object.myCreate(obj));
console.log(Object.create(obj));
