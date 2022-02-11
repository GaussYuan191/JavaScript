// object.assign 浅拷贝，只拷贝可拷贝的属性
Object.prototype.myAssign = function (target, ...objs) {
  if (target === null || target === undefined) {
    throw new TypeError("can not convert null or undefined to object");
  }
  let res = Object(target);
  objs.forEach((obj) => {
    if (obj != null && obj != undefined) {
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          res[key] = obj[key];
        }
      }
    }
  });
  return res;
};
let obj = {
  name: "张三",
  age: "18",
};
console.log(Object.myAssign({}, obj) === obj);
