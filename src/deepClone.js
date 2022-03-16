var obj = {
    name: 'AAA',
    age: 23,
    job: {
        name: 'FE',
        money: 12000
    }
}
obj.obj = obj;
// 利用map解决循环引用
function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        Reflect.ownKeys(target).forEach(key => {
            cloneTarget[key] = typeof target[key] === 'object' ? clone(target[key], map) : target[key];
        })
        // for (const key in target) {
        //     cloneTarget[key] = clone(target[key], map);
        // }
        return cloneTarget;
    } else {
        return target;
    }
}