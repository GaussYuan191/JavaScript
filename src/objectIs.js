// 判断两个值是不是同一个值
// 对 === 的一个补充, 不会强制类型转化
Object.prototype.myIs = function (x, y) {
  if (x === y) {
    // +0 != -0
    console.log(x !== 0);
    console.log(1 / x === 1 / y);
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // NaN == NaN
    return x !== x && y !== y;
  }
};
let log = console.log;
log(+0 === -0);
log(Object.myIs(0, -0));
log(Object.myIs(NaN, NaN));
Object.is("foo", "foo"); // true
Object.is(globalThis, globalThis); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

Object.is(null, null); // true

// 特例
Object.is(0, -0); // false
Object.is(0, +0); // true
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
