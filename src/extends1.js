// 父类
function Parent(name) {
  this.name = name || "父亲"; //实例基本属性(该属性，强调私有，不共享)
  this.arr = [1]; //(该属性，强调私有)
}
Parent.prototype.say = function () {
  // 将要复用，共享方法定义在父类原型上
  console.log("hello");
};
// 子类
function Child(like) {
  this.like = like;
}
// 1.原型链继承
Child.prototype = new Parent(); //核心
// Child.prototype.constructor = Child; // 修正constructor指向
let boy1 = new Child();
let boy2 = new Child();
// 优点：共享了父类构造函数的say方法
boy1.say();
boy2.say();
console.log(boy1.say === boy2.say); // hello , hello , true
// 缺点1：不能向父类的构造函数传参
console.log(boy1.name, boy2.name, boy1.name == boy2.name);
// 缺点2：子类实例共享了父类构造函数的应用属性，比如说arr
boy1.arr.push(2);
console.log(boy2.arr); // 注意修改boy1的name，boy2的name不影响
//注意要修改child类实例的constructor的指向
console.log(Child.prototype.constructor);
console.log(Child.prototype.__proto__ === Parent.prototype);
