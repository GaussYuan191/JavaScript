// 扁平化对象
// 判断是不是对象
function isObject(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Object'
}
// obj 需要扁平化的对象， pre 扁平后的key, 扁平的结果
function flatObject (obj, pre = '', res = {}) {
    if (!obj) return;
    Reflect.ownKeys(obj).forEach((key) => {
        let perKey = pre + key;
        if (isObject(obj[key])) {
            flatObject(obj[key], perKey + '.', res);
        } else {
            res[perKey] = obj[key];
        }
    })  
    return res;
}
// 测试
let entry = {
    a:1,
    b:2,
    c:{
        d:{
            e:3
        },
        f:{
            g:{
                h:4
            }
        },
        i:5
    }
  }
console.log(  flatObject(entry))