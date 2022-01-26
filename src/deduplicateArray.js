// 数组去重
// 1 利用set
let arr = [1, 2, 3, 3, 2, 4, 2, 7, 5, 9, NaN, NaN, +0, -0];
let log = console.log;
let deDuplication_set = (arr) => {
  return Array.from(new Set(arr));
};
// log(deDuplication_set(arr));
// 2 新建对象属性 + 新建数组
// 把数组的元素当做对象的key
let deDuplication_obj = (arr) => {
  let obj = {};
  let ans = [];
  arr.forEach((item) => {
    if (!obj[item]) {
      ans.push(item);
      obj[item] = 1;
    }
  });
  return ans;
};
// log(deDuplication_obj(arr))
// 3 利用map
function deDuplication_map(arr) {
  let map = new Map();
  for (let item of arr) {
    if (!map.has(item)) {
      map.set(item, true);
    }
  }
  return [...map.keys()];
}
// log(deDuplication_map(arr))
// 4 filter indexOf
// 有相同元素的话 indexOf 默认返回该元素首次出现的位置，过滤掉循环的index与indexOf不相等的元素
function deDuplication_filter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
// log(deDuplication_filter(arr))
// 5 新建数组 + sort
function deDuplication_sort(arr) {
  //1. arr.sort((a, b) => a - b);
  // let ans = [];
  // arr.forEach(item => {
  //     if (!Object.is(...ans.slice(-1), item)) {
  //         ans.push(item)
  //     }
  // })
  // return ans;
  arr.sort((a, b) => a - b);
  let ans = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] && !isNaN(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
}
// log(deDuplication_sort(arr))
// 6 reduce + includes
function deDuplication_reduce(arr) {
  return arr.reduce((pre, cur) => {
    return pre.indexOf(cur) === -1 ? [...pre, cur] : pre;
  }, []);
}
// log(deDuplication_reduce(arr));
// 7 splice
function deDuplication_splice(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Object.is(arr[i], arr[j])) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

log(deDuplication_splice(arr))