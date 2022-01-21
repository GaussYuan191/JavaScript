// 介绍Object对象上的方法
// Object.defineProperty()
// 方法会直接在对象上定义一个新的属性，或修改一个对象的
// 先拥有的属性，并返回此对象
// const object1 = {};
// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false
// });
// object1.property1 = 77;
// console.log(object1.property1)
// Object.defineProperty(obj, prop, descriptor)
// obj 要定义的属性， prop 要定义或修改的属性名称
// decriptor 要定义或修改的属性描述符
// 描述：该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的。
// 数据描述符
// configurable,configurable 为true，该属性的描述符才能被改变
// 同时该属性也能从对应的对象上被删除 默认为false
// enumberable, enumberable 为true时，该属性才会出现在对象的枚举属性
// 默认false
// 数据描述符， 可选
// value，任何有效的JS值(数值，对象，函数)
// 默认值： undefined
// writable, writable 为true时，value才能被改变 默认值为false
// 存储描述符
// get 属性的getter函数，如果没有getter,则为undefined。当
// 访问该属性时，会调用此函数，会传入this(由于继承的关系，this指向访问value的对象)
// set 属性的setter函数，如果没有setter，则为undefined，当
// 属性值修改时，会调用此函数，会传入赋值时的this对象
// 注意：1.如果一个描述符不具有value、writable、get、set中的任意一个键，那么它
// 将被认为是一个数据描述符。2.如果一个描述符同时拥有value为writable和get、set
// 键，则会产生一个异常

// Object.keys() 返回属性key, 但不包括不可枚举的属性
// Reflect.ownKeys() 返回所有属性key
var obj = {
	a: 1,
	b: 2
}
Object.defineProperty(obj, 'method', {
	value: function () {
	    alert("Non enumerable property")
	},
	enumerable: false
})

console.log(Object.keys(obj))
// ["a", "b"]
console.log(Reflect.ownKeys(obj))
// ["a", "b", "method"]
