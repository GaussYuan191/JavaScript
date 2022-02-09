let Base1 = function () {
  this.a = 1;
};
let o1 = new Base1();
let o2 = Object.create(Base1.prototype);
console.log(o1.a); // 1
console.log(o2.a); // undefined
let Base2 = function () {};
Base2.prototype.a = "aa";
let o3 = new Base2();
let o4 = Object.create(Base2.prototype);
console.log(o3.a); // aa
console.log(o4.a); // aa
let Base3 = function () {
  this.a = 1;
};
Base3.prototype.a = "aa";
let o5 = new Base3();
let o6 = Object.create(Base3.prototype);
// 详解js继承
console.log(o5.a); // 1
console.log(o6.a); // aa
