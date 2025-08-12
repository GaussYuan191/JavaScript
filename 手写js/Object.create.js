// Object.create 静态方法 创建一个新对象 没有构造函数，只继承了原型链上的属性和方法
// new 创建对象通过调用构造函数来初始化自身属性

// 思路：创建一个空函数 将对象绑定到函数的原型链上
function objectCreate(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}