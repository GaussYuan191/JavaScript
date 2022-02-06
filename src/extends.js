// 父类
function Parent(name) {
  this.name = name || "父亲"; //实例基本属性(该属性，强调私有，不共享)
  this.arr = [1]; //(该属性，强调私有)
}
Parent.prototype.say = function () { // 将要复用，共享方法定义在父类原型上
  console.log("hello")
}
// 子类
function Child (like) {
  this.like = like;
}
// 1.原型链继承
Child.prototype = new Parent() //核心

let boy1 = new Child()
