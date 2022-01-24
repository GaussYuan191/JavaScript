// 数组去重
// 1 利用set
let arr = [1, 2, 3, 3, 2, 4, 2, 7, 5, 9];
let log = console.log;
let deDuplication_set = (arr) => {
  return Array.from(new Set(arr));
};
// log(deDuplication_set(arr));
// 2 新建对象属性 + 新建数组
let deDuplication_obj = (arr) => {
    let obj = {};
    let res = [];
    arr.forEach((item, index) => {
        if (!obj[item]) {
            res.push(item);
        } else {
            obj[item]++;
        }
    })
    return res;
}
log(deDuplication_obj(arr))