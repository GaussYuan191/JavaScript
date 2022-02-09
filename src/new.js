function Person(name, age) {
  this.name = name;
  this.age = age;
}
function _new(fn, ...args) {
  // 创建一个空对象obj,并让其继承fn.prototype
  let obj = Object.create(fn.prototype);
  // 执行构造函数，并让this指向创建的空对象obj
  let result = fn.call(obj, ...args);
  // 当返回值为对象时，返回该对象，否则返回新的对象obj
  return result instanceof Object ? result : obj;
}
let ming = _new(Person, "小明", 18);
console.log(ming);
