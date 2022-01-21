// 扁平化数组 多维数组
let arr = [[1, 2, 3],[1,3,[4]],3];
let log = console.log;
// 1.利用Array.flat, flat 默认只会拉平一层，
// log(arr.flat(Infinity));
// 2.reduce
let flat_reduce = (arr) => {
    return arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? pre.concat(flat_reduce(cur)) : pre.concat(cur);
    },[])
}
// log(flat_reduce(arr))
// 3.forEach
let flat_forEach = (arr) => {
    let ans = []
    arr.forEach(item => {
        Array.isArray(item) ? ans = ans.concat(flat_forEach(item)): ans.push(item);       
    })
    return ans;
}
// log(flat_forEach(arr))
//4. toString() 数据类型相同，例如都是数字类型
// let flat_toString = (arr) => {
//    return arr.toString().split(',').map(item => Number(item));
// }
// log(flat_toString(arr))
//5. join & split (join(',')与toString() 效果差不多)
let flat_join = (arr) => {
    return arr.join(',').split(',').map(item => Number(item))
}
// log(flat_join(arr))
//6. 扩展运算符(...)
let flat_ = (arr) => {
    // 判断数组中是否含有数组 some, 判断数组中的元素是否满足条件
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
log (flat_(arr))