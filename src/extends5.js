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
// 核⼼ 通过创建中间对象，⼦类原型和⽗类原型，就会隔离开。不是同⼀个啦，有效避免了⽅式4的缺点。
Child.prototype = Object.create(Parent.prototype);
// 这⾥是修复构造函数指向的代码
Child.prototype.constructor = Child;
let boy1 = new Child("⼩红", "apple");
let boy2 = new Child("⼩明", "orange");
let p1 = new Parent("⼩爸爸");

const a = Object.create(Person.prototype, {
  age: { value: 12, writable: true, configurable: true },
});
