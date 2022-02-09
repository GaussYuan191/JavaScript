function Parent(name) {
  this.name = name || "父亲"; //实例基本属性(该属性，强调私有，不共享)
  this.arr = [1]; //(该属性，强调私有)
}
Parent.prototype.say = function () {
  // 将要复用，共享方法定义在父类原型上
  console.log("hello");
};
// 子类
function Child(name, like) {
  Parent.call(this, name); //核心 拷贝了父类的实例属性和方法
  this.like = like;
}
Child.prototype = Parent.prototype; // 核⼼ ⼦类原型和⽗类原型，实质上是同⼀个
Child.prototype.constructor = Child;
// 缺点1：当修复⼦类构造函数的指向后，⽗类实例的构造函数指向也会跟着变了。 没修复之前：
console.log(boy1.constructor); // Parent 修复代码：
Child.prototype.constructor = Child; //修复之后：
console.log(boy1.constructor); // Child
console.log(p1.constructor); // Child 这⾥就是存在的问题(我们希望是Parent) 具体原因：因为是通过原型来实现继承的，Child.prototype的上⾯是没有constructor属性的， 就会往上找，这样就找到了Parent.prototype上⾯的constructor属性；当你修改了⼦类实例的 construtor属性，所有的constructor的指向都会发⽣变化。
