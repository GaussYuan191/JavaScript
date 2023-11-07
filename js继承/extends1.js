// 原型链继承
// 父类
function SuperType() {
  this.name = "SuperType"; // 父类属性
}
SuperType.prototype.sayName = () => {
  // 父类方法
  return this.name;
};

//子类
function SubType() {
  this.name = "SubType"; // 子类属性
}
SubType.prototype = new SuperType(); //将父类的实例作为子类的原型
SubType.prototype.saySubName = () => {
  // 子类方法
  console.log("this", this);
  return this.name;
};

let sub = new SubType();
console.log("this.name", sub.name, sub.saySubName(), sub.sayName());
