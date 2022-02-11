// 判断变量的数据类型，通过原型链，普通类型，判断不正确
function myInstanceof(instance, constructor) {
  if (
    (typeof instance != "object" && typeof instance != "function") ||
    instance == null
  ) {
    return false;
  }
  if (typeof constructor != "function") {
    throw TypeError("the right-hand-side of instanceof must be a function");
  }
  let proto = constructor.prototype;
  let p = instance.__proto__;
  while (p) {
    if (p == proto) {
      return true;
    }
    p = p.__proto__;
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}
console.log(myInstanceof(new Array(), Array));
console.log(typeof Array);
let obj = new Person("李四");
console.log(myInstanceof(obj, Person));
console.log(typeof Person);
