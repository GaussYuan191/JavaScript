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
function Child(name, like) {
  Parent.call(this, name); //核心 拷贝了父类的实例属性和方法
  this.like = like;
}

let boy1 = new Child("小红", "apple");
let boy2 = new Child("小明", "orange");
// 优点1: 可向父类构造函数传参
console.log(boy1.name, boy2.name); // 小红 小明
// 优点2: 不共享父类构造函数的引用类型
boy1.arr.push(2);
console.log(boy1.arr, boy2.arr);
// 缺点1：方法不能复用
console.log(boy1.say === boy2.say);
// 缺点2: 不能继承父类原型上的方法
// boy1.say();   // boy1.say is not a function
console.log(Child.prototype === Parent.prototype);
console.log(Child.prototype.constructor);
